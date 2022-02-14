import { PointModel } from '../models/point.model';

const startingDistance = { x: 0, y: 0 };
const squareDistance = (pointA, pointB) => {
  const y = pointB.x - pointA.x;
  const x = pointB.y - pointA.y;

  return Math.sqrt(x * x + y * y);
};

export function sortCoordinates(
  coordinates: PointModel[],
  type = 'asc',
): PointModel[] {
  return coordinates.sort((coordinateA, coordinateB) => {
    const distanceToA = squareDistance(
      startingDistance,
      coordinateA.coordinates,
    );
    const distanceToB = squareDistance(
      startingDistance,
      coordinateB.coordinates,
    );

    if (distanceToA > 100 || distanceToB > 100) {
      return 0;
    }

    return type === 'asc'
      ? distanceToA - distanceToB
      : distanceToB - distanceToA;
  });
}
