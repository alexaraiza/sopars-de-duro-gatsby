import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";

import { handleTagSelect } from "./grid";
import * as tagsStyles from "./tags.module.css";

const Tags = () => {
  const data = useStaticQuery(graphql`
    query {
      allTagsJson {
        edges {
          node {
            id
            name
          }
        }
      }
    }
  `);

  const allTags = data.allTagsJson.edges;

  return (
    <div className={tagsStyles.tags}>
      <h5>Etiquetes</h5>
      <form className={tagsStyles.grid} onChange={handleTagSelect}>
        {allTags.map((tag) => <>{tag.node.name}<input type="checkbox" value={tag.node.id} /></>)}
      </form>
    </div>
  );
}

export default Tags;