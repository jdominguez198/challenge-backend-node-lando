import { ProtocolInterface } from '../protocol.interface';
import { PointModel } from '../point.model';
import { EnemyModel } from '../enemy.model';

export class PrioritizeMechProtocolModel implements ProtocolInterface {
  scan(points: PointModel[]): PointModel[] {
    const mechs = this.getMechs(points);

    return mechs.length === 0 ? points : mechs;
  }

  protected getMechs(points: PointModel[]): PointModel[] {
    return points.filter(
      (item: PointModel) => item.enemies.type === EnemyModel.MECH,
    );
  }
}
