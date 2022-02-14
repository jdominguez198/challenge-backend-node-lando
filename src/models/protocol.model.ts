import { Injectable } from '@nestjs/common';

@Injectable()
export class ProtocolModel {
  protected available = [
    'closest-enemies',
    'furthest-enemies',
    'assist-allies',
    'avoid-crossfire',
    'prioritize-mech',
    'avoid-mech',
  ];

  isProtocolAvailable(protocol: string): boolean {
    return this.available.includes(protocol);
  }
}
