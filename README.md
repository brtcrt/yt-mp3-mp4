# Youtube to .mp3 or .mp4

> `yt-convert (url)(true/false)`

## Some info

- This cli kinda thing uses [ytdl-core](https://github.com/fent/node-ytdl-core) developed by the awesome [fent](https://github.com/fent)!
- The better version of this cli is [ytdl](https://github.com/fent/node-ytdl)

## What You'll Need

- [node.js](https://nodejs.org/en/download/) installed and ready to use.
- Make sure npm is working. It usually comes with node.js so you shouldn't have a problem.

## How to download

<ol>
<li> git clone https://www.github.com/brtcrt/yt-mp3-mp4.git </li>
<li> cd into the folder</li>
</ol>

> or

1. Download the zip from github.

## How to use

- Open up command line.
- cd into the directory.
- Run "npm install . "
- Wait for the packages to install.
- Run "npm link"
- Create a "downloads" directory (mkdir downloads) if it doesn't exist.
- Run "yt-convert -u (url)". Replace (url) with a youtube url. If you want to download as mp3, make sure to say -a after the url.
- The url is mandatory.
- Wait for the download to finish.
- Enjoy!
