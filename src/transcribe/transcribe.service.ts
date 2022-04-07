import { Injectable } from '@nestjs/common';
import { DeepgramService } from 'src/deepgram/deepgram.service';

@Injectable()
export class TranscribeService {
  constructor(private deepgramService: DeepgramService) {}
  async transcribe(file: Express.Multer.File) {
    const response = await this.deepgramService.transcribeFile(file);
    return response;
  }
}
