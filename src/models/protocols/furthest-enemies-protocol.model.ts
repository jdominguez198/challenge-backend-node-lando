import { ProtocolInterface } from '../protocol.interface';
import { PointModel } from '../point.model';
import { sortCoordinates } from '../../utils/sortCoordinates';

export class FurthestEnemiesProtocolModel implements ProtocolInterface {
  scan(points: PointModel[]): PointModel[] {
    return sortCoordinates(points, 'desc');
  }
}
