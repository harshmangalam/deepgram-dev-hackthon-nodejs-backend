import { Module } from '@nestjs/common';
import { DeepgramModule } from 'src/deepgram/deepgram.module';
import { TranscribeController } from './transcribe.controller';
import { TranscribeService } from './transcribe.service';

@Module({
  imports: [DeepgramModule],
  controllers: [TranscribeController],
  providers: [TranscribeService],
})
export class TranscribeModule {}
