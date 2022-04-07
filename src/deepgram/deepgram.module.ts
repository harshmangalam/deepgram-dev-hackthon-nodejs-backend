import { DynamicModule, Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { DeepgramService } from './deepgram.service';

@Module({
  providers: [DeepgramService, ConfigService],
  exports: [DeepgramService],
})
export class DeepgramModule {}
