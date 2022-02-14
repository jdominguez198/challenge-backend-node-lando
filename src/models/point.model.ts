import { CoordinateModel } from './coordinate.model';
import { EnemyModel } from './enemy.model';

export class PointModel {
  coordinates: CoordinateModel;
  enemies: EnemyModel;
  allies: number = null;

  constructor(
    coordinates: CoordinateModel,
    enemies: EnemyModel,
    allies: number = null,
  ) {
    this.coordinates = coordinates;
    this.enemies = enemies;
    this.allies = allies;
  }
}
