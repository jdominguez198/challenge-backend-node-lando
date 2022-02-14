import { ProtocolInterface } from '../protocol.interface';
import { PointModel } from '../point.model';
import { EnemyModel } from '../enemy.model';

export class AvoidMechProtocolModel implements ProtocolInterface {
  scan(points: PointModel[]): PointModel[] {
    return this.getFirstNonMech(points);
  }

  protected getFirstNonMech(points: PointModel[]): PointModel[] {
    return points.filter(
      (item: PointModel) => item.enemies.type !== EnemyModel.MECH,
    );
  }
}
