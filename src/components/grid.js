import * as React from "react";

import Card from "./card";
import * as gridStyles from "./grid.module.css";

const Grid = (props) => {
  return (
    <main className={gridStyles.grid}>
      {props.recipes.map((recipe) => <Card recipe={recipe.node} />)}
    </main>
  );
}

export default Grid;