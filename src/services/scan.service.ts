import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { PointModel } from '../models/point.model';
import { ProtocolInterface } from '../models/protocol.interface';
import { CoordinateModel } from '../models/coordinate.model';
import { protocolsMap } from '../models/protocols/protocol.config';

@Injectable()
export class ScanService {
  getTargetCoordinates(
    protocols: string[],
    points: PointModel[],
  ): CoordinateModel {
    const scanPoints = protocols.reduce((accum, current) => {
      const protocol = this.getProtocolInstance(current);
      return protocol.scan(accum);
    }, points);

    if (scanPoints.length === 0) {
      throw new InternalServerErrorException('Unable to find coordinates');
    }

    return this.getPrettyCoordinates(scanPoints[0]);
  }

  protected getProtocolInstance(protocol: string): ProtocolInterface {
    if (!Object.keys(protocolsMap).includes(protocol)) {
      throw new InternalServerErrorException('Protocol not found');
    }

    return new protocolsMap[protocol]();
  }

  protected getPrettyCoordinates(point: PointModel): CoordinateModel {
    return new CoordinateModel(point.coordinates.x, point.coordinates.y);
  }
}
