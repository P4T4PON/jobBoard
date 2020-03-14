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

export const resetAllTiles = (seniorityNames, setTiles, tiles) => {
  for (let i = 0; i < seniorityNames.length; i++) {
    tiles[seniorityNames[i]] = false;
  }
  setTiles({
    ...tiles
  });
};

export const handleTileChange = (name, tiles, setTiles) => {
  let newTiles = tiles;
  newTiles[name] = !newTiles[name];
  setTiles({
    ...newTiles
  });
};
