import { Module } from '@nestjs/common';
import { RadarController } from './controllers/radar.controller';
import { ValidationService } from './services/validation.service';
import { ScanService } from './services/scan.service';

@Module({
  imports: [],
  controllers: [RadarController],
  providers: [
    ValidationService,
    ScanService,
  ],
})
export class AppModule {}
