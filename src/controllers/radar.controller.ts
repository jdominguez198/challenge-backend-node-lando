import {
  Body,
  Controller,
  HttpException,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { ValidationService } from '../services/validation.service';
import { AttackCalculatorService } from '../services/attack-calculator.service';

@Controller()
export class RadarController {
  constructor(
    protected validationService: ValidationService,
    protected attackCalculatorService: AttackCalculatorService,
  ) {}

  @Post('radar')
  processRadar(@Body() parameters: any): any {
    const { protocols, scan } = parameters;

    if (!this.validationService.validate()) {
      throw new HttpException('Missing parameters', HttpStatus.BAD_REQUEST);
    }

    return this.attackCalculatorService.getTargetCoordinates(protocols, scan);
  }
}
