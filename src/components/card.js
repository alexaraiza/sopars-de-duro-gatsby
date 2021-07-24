import * as React from "react";
import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

import * as cardStyles from "./card.module.css";

const Card = (props) => {
  return (
    <Link to={"/" + props.recipe.id} className={cardStyles.card}>
      <GatsbyImage image={props.recipe.image.childImageSharp.gatsbyImageData} alt={props.recipe.title} style={{ "overflow": "visible" }} imgStyle={{ "transition": "transform 300ms cubic-bezier(0, 0, 0, 1), opacity .25s linear" }} />
      <h4>{props.recipe.title}</h4>
    </Link>
  );
}

export default Card;