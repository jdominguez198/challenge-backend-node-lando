import { Injectable } from '@nestjs/common';

@Injectable()
export class ValidationService {
  validate(parameters: any): boolean {
    if (!parameters) {
      return false;
    }

    const { protocols, scan } = parameters;

    if (!protocols || !scan || !Array.isArray(scan)) {
      return false;
    }

    return !scan.some((item) => !item.enemies || !item.coordinates);
  }
}
