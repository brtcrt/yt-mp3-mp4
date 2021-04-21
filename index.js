#! /usr/bin/env node

const ytdl = require("ytdl-core");
const fs = require("fs");

const url = process.argv.slice(2)[0];
var audio_only = process.argv.slice(2)[1];

if (audio_only === "true") {
  audio_only = true;
} else if (audio_only === "false") {
  audio_only = false;
}

if (!url) throw "No url given.";
const main = async (url, audio_only = false) => {
  console.log(audio_only);
  results = await ytdl.getInfo(url);
  console.log(
    `Downloading ${audio_only ? "mp3" : "mp4"} of ${results.videoDetails.title}`
  );
  ytdl(url, { filter: audio_only ? "audioonly" : null }).pipe(
    fs.createWriteStream(
      `./downloads/${results.videoDetails.title}.${audio_only ? "mp3" : "mp4"}`
    )
  );
};

main(url, audio_only);
