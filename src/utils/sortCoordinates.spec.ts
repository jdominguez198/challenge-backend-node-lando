import { CoordinateModel } from '../models/coordinate.model';
import { sortCoordinates } from './sortCoordinates';
import { PointModel } from '../models/point.model';
import { EnemyModel } from '../models/enemy.model';

describe('sortCoordinates', () => {
  it('should sort ascending a list of coordinates', () => {
    const listCoordinates = [
      new PointModel(new CoordinateModel(1, 1), new EnemyModel(null, null)),
      new PointModel(new CoordinateModel(10, 10), new EnemyModel(null, null)),
      new PointModel(new CoordinateModel(2, 2), new EnemyModel(null, null)),
      new PointModel(new CoordinateModel(50, 50), new EnemyModel(null, null)),
      new PointModel(new CoordinateModel(20, 20), new EnemyModel(null, null)),
    ];
    const sortedListCoordinates = [
      new PointModel(new CoordinateModel(1, 1), new EnemyModel(null, null)),
      new PointModel(new CoordinateModel(2, 2), new EnemyModel(null, null)),
      new PointModel(new CoordinateModel(10, 10), new EnemyModel(null, null)),
      new PointModel(new CoordinateModel(20, 20), new EnemyModel(null, null)),
      new PointModel(new CoordinateModel(50, 50), new EnemyModel(null, null)),
    ];
    expect(sortCoordinates(listCoordinates, 'asc')).toStrictEqual(
      sortedListCoordinates,
    );
  });

  it('should sort descending a list of coordinates', () => {
    const listCoordinates = [
      new PointModel(new CoordinateModel(2, 2), new EnemyModel(null, null)),
      new PointModel(new CoordinateModel(10, 10), new EnemyModel(null, null)),
      new PointModel(new CoordinateModel(1, 1), new EnemyModel(null, null)),
      new PointModel(new CoordinateModel(50, 50), new EnemyModel(null, null)),
      new PointModel(new CoordinateModel(20, 20), new EnemyModel(null, null)),
    ];
    const sortedListCoordinates = [
      new PointModel(new CoordinateModel(50, 50), new EnemyModel(null, null)),
      new PointModel(new CoordinateModel(20, 20), new EnemyModel(null, null)),
      new PointModel(new CoordinateModel(10, 10), new EnemyModel(null, null)),
      new PointModel(new CoordinateModel(2, 2), new EnemyModel(null, null)),
      new PointModel(new CoordinateModel(1, 1), new EnemyModel(null, null)),
    ];
    expect(sortCoordinates(listCoordinates, 'desc')).toStrictEqual(
      sortedListCoordinates,
    );
  });
});
