import { Injectable } from '@nestjs/common';
import { incompatibleProtocols } from '../models/protocols/protocol.config';

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

    if (this.hasIncompatibleProtocols(protocols)) {
      return false;
    }

    return !scan.some((item) => !item.enemies || !item.coordinates);
  }

  protected hasIncompatibleProtocols(protocols: string[]): boolean {
    return incompatibleProtocols.some(
      (incompatibleProtocol) =>
        incompatibleProtocol.filter((protocol) => protocols.includes(protocol))
          .length === incompatibleProtocol.length,
    );
  }
}
