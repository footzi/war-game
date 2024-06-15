import { MAP } from '../constants.js';
import { getRandomNumber } from './getRandomNumber.js';
import { getIsCollisionElements } from './getIsCollisionElements.js';

const generate = (width, height, elements, limits) => {
  const { minX, minY, maxX, maxY } = limits;

  let x, y;
  do {
    x = getRandomNumber(minX, maxX);
    y = getRandomNumber(minY, maxY);
  } while (getIsCollisionElements({ x, y, width, height }, elements));
  return { x, y };
};

export const getRandomCoords = (width, height, createdElements) => {
  const minX = MAP.X;
  const minY = MAP.Y;

  const maxX = MAP.WIDTH > width ? MAP.WIDTH - width : MAP.WIDTH;
  const maxY = MAP.HEIGHT > height ? MAP.HEIGHT - height : MAP.HEIGHT;

  const { x, y } = generate(width, height, createdElements, { minX, minY, maxX, maxY });

  return {
    x,
    y,
  };
};
