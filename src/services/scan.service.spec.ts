import { ScanService } from './scan.service';
import { PointModel } from '../models/point.model';
import { EnemyModel } from '../models/enemy.model';
import { CoordinateModel } from '../models/coordinate.model';

describe('ScanService', () => {
  let scanService: ScanService;

  beforeEach(() => {
    scanService = new ScanService();
  });

  it('should return same first target if no protocol passed', () => {
    const scanPoints = [
      new PointModel(
        new CoordinateModel(0, 0),
        new EnemyModel(EnemyModel.MECH, 1),
      ),
      new PointModel(
        new CoordinateModel(10, 10),
        new EnemyModel(EnemyModel.MECH, 1),
      ),
    ];
    expect(scanService.getTargetCoordinates([], scanPoints)).toStrictEqual(
      new CoordinateModel(0, 0),
    );
  });

  it('should return closest target when closest-enemies protocol is used', () => {
    const closestCoordinates = new CoordinateModel(5, 5);
    const furthestCoordinates = new CoordinateModel(10, 10);
    const scanPoints = [
      new PointModel(closestCoordinates, new EnemyModel(EnemyModel.MECH, 1)),
      new PointModel(furthestCoordinates, new EnemyModel(EnemyModel.MECH, 1)),
    ];
    expect(
      scanService.getTargetCoordinates(['closest-enemies'], scanPoints),
    ).toStrictEqual(closestCoordinates);
  });

  it('should return furthest target when furthest-enemies protocol is used', () => {
    const closestCoordinates = new CoordinateModel(5, 5);
    const furthestCoordinates = new CoordinateModel(10, 10);
    const scanPoints = [
      new PointModel(closestCoordinates, new EnemyModel(EnemyModel.MECH, 1)),
      new PointModel(furthestCoordinates, new EnemyModel(EnemyModel.MECH, 1)),
    ];
    expect(
      scanService.getTargetCoordinates(['furthest-enemies'], scanPoints),
    ).toStrictEqual(furthestCoordinates);
  });
});
