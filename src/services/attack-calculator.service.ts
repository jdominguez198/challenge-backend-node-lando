import { Injectable } from '@nestjs/common';

@Injectable()
export class AttackCalculatorService {
  getTargetCoordinates(protocols: any, scan: any): [any] {
    return [{ protocols, scan }];
  }
}
