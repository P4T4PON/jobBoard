import React, { Fragment } from 'react';
//TODO: zobacz, ze Junior, Regular oraz Senior to praktycznie ten sam komponent z różnicą klas, zastanow sie, jak mozna z tego zrobic jeden komponent reuzywalny i nie tworzyc niepotrzebnie tylu elementow
const Junior = () => {
  return (
    <Fragment>
      <div className="offer-dot pink-dot" />
      <div className="offer-dot pink-dot" />
      <div className="offer-dot grey-dot" />
      <div className="offer-dot grey-dot" />
      <div className="offer-dot grey-dot" />
    </Fragment>
  );
};

export default Junior;
