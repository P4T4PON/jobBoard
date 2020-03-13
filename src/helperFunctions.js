import { employmentTypeNames } from './constans';

export const checkTiles = (tiles, setTiles) => {
  const activatedTiles = Object.keys(tiles).filter(k => tiles[k]);
  let newTiles = tiles;

  if (activatedTiles.length === 0) {
    newTiles['all'] = true;
    setTiles({ ...newTiles });
  } else if (activatedTiles.length > 1 && newTiles['all'] !== false) {
    newTiles['all'] = false;
    setTiles({ ...newTiles });
  }
};

export const handleTileChange = (tiles, setTiles, name) => {
  let newTiles = tiles;
  newTiles[name] = !newTiles[name];
  setTiles({
    ...newTiles
  });
};

export const resetAllTiles = (tiles, setTiles) => {
  for (let i = 0; i < employmentTypeNames.length; i++) {
    tiles[employmentTypeNames[i]] = false;
  }
  setTiles({
    ...tiles
  });
};
