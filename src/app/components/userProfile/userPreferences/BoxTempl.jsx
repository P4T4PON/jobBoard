import React, { useState } from 'react';

const BoxTempl = ({ typeState, typeNames }) => {
  const [tiles, setTiles] = useState(typeState);

  useEffect(() => {
    checkTiles();
  });

  const checkTiles = () => {
    const activatedTiles = Object.keys(tiles).filter(k => tiles[k]);
    let newTiles = tiles;

    if (activatedTiles.length === 0) {
      newTiles['all'] = true;
      setTiles({ ...newTiles });
    } else if (activatedTiles.length > 1 && newTiles['all'] != false) {
      newTiles['all'] = false;
      setTiles({ ...newTiles });
    }
  };

  const handleTileChange = name => {
    let newTiles = tiles;
    newTiles[name] = !newTiles[name];
    setTiles({
      ...newTiles
    });
  };

  const resetAllTiles = () => {
    for (let i = 0; i < typeNames.length; i++) {
      tiles[typeNames[i]] = false;
    }
    setTiles({
      ...tiles
    });
  };

  return;
};

export default BoxTempl;
