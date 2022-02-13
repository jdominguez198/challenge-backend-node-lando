import { Module } from '@nestjs/common';
import { RadarController } from './controllers/radar.controller';
import { ValidationService } from './services/validation.service';
import { AttackCalculatorService } from './services/attack-calculator.service';

@Module({
  imports: [],
  controllers: [RadarController],
  providers: [
    ValidationService,
    AttackCalculatorService
  ],
})
export class AppModule {}
