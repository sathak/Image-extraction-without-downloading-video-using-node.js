"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ffmpegService = void 0;
const path_1 = __importDefault(require("path"));
class ffmpegService {
    get(timestamp, video_url, image_text) {
        const _exec = require('child_process').execSync;
        const dirPath = path_1.default.join(__dirname);
        const queryTimestamp = timestamp;
        const queryUrl = video_url;
        _exec(dirPath + "/ffmpeg.exe -ss " + queryTimestamp + " -i " + queryUrl + " -vframes 1 -vcodec png -an -y %d.png", { stdio: 'inherit' });
        const fs = require('fs');
        const contents = fs.readFileSync(dirPath + '/1.png', { encoding: 'base64' });
        image_text = contents;
        return {
            timestamp: timestamp,
            video_url: video_url,
            image_text: image_text
        };
    }
}
exports.ffmpegService = ffmpegService;
