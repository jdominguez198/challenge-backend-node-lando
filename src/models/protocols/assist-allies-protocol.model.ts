import { ProtocolInterface } from '../protocol.interface';
import { PointModel } from '../point.model';

export class AssistAlliesProtocolModel implements ProtocolInterface {
  scan(points: PointModel[]): PointModel[] {
    return this.getPointsWithAllies(points);
  }

  protected getPointsWithAllies(points: PointModel[]): PointModel[] {
    return points.filter((item) => item.allies && item.allies > 0);
  }
}
