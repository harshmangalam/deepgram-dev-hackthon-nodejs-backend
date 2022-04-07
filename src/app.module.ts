import { Module } from '@nestjs/common';
import { TranscribeModule } from './transcribe/transcribe.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [TranscribeModule, ConfigModule.forRoot()],
})
export class AppModule {}
