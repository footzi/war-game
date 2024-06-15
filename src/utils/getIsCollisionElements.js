import { getIsCollision } from './getIsCollision.js';

export const getIsCollisionElements = (aria, elements) => {
  for (let i = 0; i < elements.length; i++) {
    const el = elements[i];

    if (getIsCollision(el, aria)) {
      return true;
    }
  }

  return false;
};
