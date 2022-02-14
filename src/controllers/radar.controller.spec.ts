import { Test, TestingModule } from '@nestjs/testing';
import { HttpException, HttpStatus } from '@nestjs/common';
import { RadarController } from './radar.controller';
import { ScanService } from '../services/scan.service';
import { ValidationService } from '../services/validation.service';
import { CoordinateModel } from '../models/coordinate.model';

describe('RadarController', () => {
  let radarController: RadarController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [RadarController],
      providers: [ScanService, ValidationService],
    }).compile();

    radarController = app.get<RadarController>(RadarController);
  });

  it('should fail without parameters', () => {
    const err = new HttpException('Wrong parameters', HttpStatus.BAD_REQUEST);

    try {
      radarController.processRadar({});
    } catch (e) {
      expect(e).toStrictEqual(err);
    }
  });

  it('should not fail with parameters', () => {
    const zeroCoordinates = new CoordinateModel(0, 0);
    const parameters = {
      protocols: [],
      scan: [{ enemies: {}, coordinates: zeroCoordinates }],
    };
    expect(radarController.processRadar(parameters)).toStrictEqual(
      zeroCoordinates,
    );
  });
});
