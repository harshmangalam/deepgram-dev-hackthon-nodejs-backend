import { Deepgram } from '@deepgram/sdk';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class DeepgramService {
  private deepgram: Deepgram;
  constructor(private configService: ConfigService) {
    const apiKey = this.configService.get<string>('DEEPGRAM_API_KEY');
    this.deepgram = new Deepgram(apiKey);
  }
  async transcribeFile(file: Express.Multer.File) {
    const response = await this.deepgram.transcription.preRecorded({
      buffer: file.buffer,
      mimetype: file.mimetype,
    });

    return response;
  }

 
}
