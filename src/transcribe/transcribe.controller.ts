import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { TranscribeService } from './transcribe.service';

@Controller('transcribe')
export class TranscribeController {
  constructor(private transcribeService: TranscribeService) {}
  @Post('pre-recorded-file')
  @UseInterceptors(FileInterceptor('file'))
  async transcribePreRecordedFile(@UploadedFile() file: Express.Multer.File) {
    const response = await this.transcribeService.transcribe(file);
    return response;
  }
}
