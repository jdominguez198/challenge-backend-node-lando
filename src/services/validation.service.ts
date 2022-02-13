import { Injectable } from '@nestjs/common';

@Injectable()
export class ValidationService {
  validate(): boolean {
    return true;
  }
}
