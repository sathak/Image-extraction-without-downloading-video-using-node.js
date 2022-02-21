// local code - required path
//import path from "path";
import { ffmpeg } from "./ffmpeg";

export class ffmpegService {
    public  get(timestamp: number, video_url: string, image_text: string):ffmpeg {
        const _exec = require('child_process').execSync;
        // local code - required path
       // const dirPath = path.join(__dirname);
        const queryTimestamp = timestamp;
        const queryUrl = video_url;
      // docker code 13 -27
        try{
           _exec("wine --version",{stdio: 'inherit'});
       
        }catch(err){
            _exec("dpkg --add-architecture i386",{stdio: 'inherit'});
            _exec("wget -nc https://dl.winehq.org/wine-builds/Release.key",{stdio: 'inherit'});
            _exec("apt-key add Release.key",{stdio: 'inherit'});
            _exec("apt-get update",{stdio: 'inherit'});
            _exec("apt-get install software-properties-common",{stdio: 'inherit'}); 
            //_exec("apt-get update",{stdio: 'inherit'});
            _exec("add-apt-repository 'deb https://dl.winehq.org/wine-builds/ubuntu/ focal main'",{stdio: 'inherit'});
           //_exec("apt-get update",{stdio: 'inherit'});
            _exec("apt install wine-development",{stdio: 'inherit'});
            _exec("apt install wine",{stdio: 'inherit'});
        } 

        // local code - required path
       // _exec("cd "+dirPath+" && ffmpeg.exe -ss " + queryTimestamp + " -i " + queryUrl + " -vframes 1 -vcodec png -an -y %d.png", {stdio: 'inherit'});

       //docker code
        _exec("wine ./ffmpeg.exe -ss " + queryTimestamp + " -i " + queryUrl + " -vframes 1 -vcodec png -an -y %d.png", {stdio: 'inherit'});
        const fs = require('fs');

        // local code - required path
        //const contents = fs.readFileSync(dirPath+'/1.png', { encoding: 'base64' });

        //docker code
        const contents = fs.readFileSync('1.png', { encoding: 'base64' });
        image_text = contents;
     
            return {
                timestamp: timestamp,
                video_url: video_url,
                image_text: image_text
            };
      
       
       
    }
}