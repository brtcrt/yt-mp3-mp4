#! /usr/bin/env node

// imports
const ytdl = require("ytdl-core");
const chalk = require("chalk");
const fs = require("fs");
const path = require("path");
const { Command } = require("commander");
// imports

const cli = new Command()
  .option("-u, --url <url>", "Give a youtube link.")
  .option("-a, --audio", "Only download audio")
  .parse(process.argv);

// variables
const options = cli.opts();
const url = options.url;
let audio_only = true;
// variables

if (!options["audio"]) {
  // if the user didn't say -a or --audio
  audio_only = false;
}

if (!url) {
  // help command type of thing
  console.log();
  console.log(`
                    ${
                      chalk.redBright("yt") +
                      chalk.greenBright("-") +
                      chalk.blueBright("mp3") +
                      chalk.greenBright("-") +
                      chalk.redBright("mp4")
                    }

  
  ${chalk.gray("Github: https://github.com/brtcrt/yt-mp3-mp4")}


  ${chalk.magenta("Parameters you can pass are:")}
  ${chalk.blue("-u / --url <youtube url> ")}${chalk.greenBright(
    "-->"
  )}${chalk.whiteBright(
    " The youtube video which you want to download. You need to specify this."
  )}
  ${chalk.blue("-a / --audio ")}${chalk.greenBright("-->")}${chalk.whiteBright(
    " Use this if you just want to download the audio."
  )}${chalk.red(" Don't use this if you want both the video and the audio!")}
  
  ${chalk.magenta("Here are some examples:")}
  ${chalk.green(
    "yt-convert -u https://www.youtube.com/watch?v=4TkFmmdmk50 -a"
  )}${chalk.whiteBright(" Only download the audio.(.mp3)")}
  ${chalk.green(
    "yt-convert -u https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  )}${chalk.whiteBright(" Downloads both the video and the audio.(.mp4)")}
  
  `);
  return;
} else {
  isValid = ytdl.validateURL(url);
  if (!isValid) {
    console.log(`
    ${chalk.red("Couldn't find a youtube video with that url.")}
  `);
    return;
  }
  console.log(`
  ${chalk.green("Found the video!")}
  `);
}

const download = async (url, audio_only) => {
  results = await ytdl.getInfo(url);
  console.log(`
  ${chalk.cyan(
    `Downloading ${results.videoDetails.title.trim()} as ${
      audio_only ? "mp3" : "mp4"
    }`
  )}
  `);
  ytdl(url, { filter: audio_only ? "audioonly" : null }).pipe(
    fs.createWriteStream(
      path.join(
        __dirname,
        `./downloads/${results.videoDetails.title.trim()}.${
          audio_only ? "mp3" : "mp4"
        }`
      )
    )
  );
  return path.join(
    __dirname,
    `./downloads/${results.videoDetails.title.trim()}.${
      audio_only ? "mp3" : "mp4"
    }`
  );
};

const main = async (url, audio_only) => {
  const file_location = await download(url, audio_only);
  console.log(`
  ${chalk.green(`Done! The file is at ${chalk.magenta(file_location)}`)}
  `);
};

main(url, audio_only);
