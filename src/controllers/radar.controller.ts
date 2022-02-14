import {
  Body,
  Controller,
  HttpCode,
  HttpException,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { ValidationService } from '../services/validation.service';
import { ScanService } from '../services/scan.service';
import { CoordinateModel } from '../models/coordinate.model';

@Controller()
export class RadarController {
  constructor(
    protected validationService: ValidationService,
    protected scanService: ScanService,
  ) {}

  @Post('radar')
  @HttpCode(200)
  processRadar(@Body() parameters: any): CoordinateModel {
    if (!this.validationService.validate(parameters)) {
      throw new HttpException('Missing parameters', HttpStatus.BAD_REQUEST);
    }

    const { protocols, scan } = parameters;

    return this.scanService.getTargetCoordinates(protocols, scan);
  }
}
