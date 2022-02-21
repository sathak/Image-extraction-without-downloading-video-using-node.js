"# Image-extraction-without-downloading-video-using-node.js" 

if you want to run locally then

goto Src -> ffmpeg -> ffmpegService.ts, comment all docker code and uncomment local code specified in comments and Save it.

Run the commands below:

1. npm run build
2. npm start

if you want to run docker mode then

goto Src -> ffmpeg -> ffmpegService.ts, uncomment all docker code and comment local code specified in comments and Save it.

Run the commands below:

1. docker build -t pix-cap .
2. docker run -d -p 8081:8081 pix-cap
