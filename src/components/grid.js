import * as React from "react";

import Card from "./card";

import * as gridStyles from "./grid.module.css";

let selectedTags;
let setSelectedTags;

export function handleTagSelect(event) {
  let target = event.target;
  if (target.checked) {
    selectedTags.add(target.value);
  }
  else {
    selectedTags.delete(target.value);
  }
  setSelectedTags((selectedTags) => new Set(selectedTags));
}

const Grid = (props) => {
  [selectedTags, setSelectedTags] = React.useState(new Set());
  const [recipes, setRecipes] = React.useState(props.recipes);

  React.useEffect(() => {
    if (selectedTags.size) {
      setRecipes(props.recipes.filter((recipe) => recipe.node.tags.some((tag) => selectedTags.has(tag))));
    }
    else {
      setRecipes(props.recipes);
    }
  }, [selectedTags]);

  return (
    <main className={gridStyles.grid}>
      {recipes.map((recipe) => <Card recipe={recipe.node} />)}
    </main>
  );
}

export default Grid;