import { ProtocolInterface } from '../protocol.interface';
import { PointModel } from '../point.model';

export class AvoidCrossfireProtocol implements ProtocolInterface {
  scan(points: PointModel[]): PointModel[] {
    return this.getPointsWithoutAllies(points);
  }

  protected getPointsWithoutAllies(points: PointModel[]): PointModel[] {
    return points.filter((item) => !item.allies || item.allies === 0);
  }
}
