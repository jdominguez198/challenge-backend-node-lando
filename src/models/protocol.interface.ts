import { PointModel } from './point.model';

export interface ProtocolInterface {
  scan(points: PointModel[]): PointModel[];
}
