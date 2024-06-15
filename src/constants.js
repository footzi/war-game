export const CANVAS = {
  WIDTH: 1000,
  HEIGHT: 500,
};

export const MAP = {
  WIDTH: 990,
  HEIGHT: 420,
  X: 5,
  Y: 40,
  COLOR: '#D4C5AA',
};

export const TEXT_STYLES = {
  fontFamily: 'Arial',
  fontSize: 14,
  fill: '#ffffff',
};

export const RESOURCES = ['food', 'forest', 'gold', 'metal'];
export const RESOURCES_LIST = {
  FOREST: {
    name: 'forest',
    width: 10,
    height: 10,
    color: '#3DA564',
    padding: 1,
  },
  GOLD: {
    name: 'gold',
    width: 40,
    height: 40,
    color: '#ff8f38',
  },
};

export const BUILDINGS_LIST = {
  HOME: {
    name: 'Ратуша',
    width: 70,
    height: 40,
    cost: {
      forest: 300,
      food: 20,
    },
  },
};
export const BUILDINGS = [BUILDINGS_LIST.HOME, BUILDINGS_LIST.HOME, BUILDINGS_LIST.HOME, BUILDINGS_LIST.HOME];

export const INITIAL_RESOURCES = {
  forest: [
    [5, 5, 5, 5, 5],
    [3, 3, 3],
    [2, 2],
    [4, 4, 4, 4],
  ],
  gold: [500, 1000, 50],
};
