import {
    Controller,
    Get,
    Route,
    Query,


} from "tsoa";
import { ffmpeg } from "./ffmpeg";
import { ffmpegService } from "./ffmpegService";



@Route("ffmpeg")
export class ffmpegController extends Controller {
    @Get("Image")
    public async getImage(
        @Query() timestamp: number,
        @Query() url: string
    ): Promise<ffmpeg> {
        const image_text="";
        return new ffmpegService().get(timestamp, url, image_text);;


    }


}