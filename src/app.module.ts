import { Module } from '@nestjs/common';
import { RadarController } from './controllers/radar.controller';

@Module({
  imports: [],
  controllers: [RadarController],
  providers: [],
})
export class AppModule {}
