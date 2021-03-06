import React from "react";
import { Link } from "react-router-dom";
import { slugify } from "../helpers";

// http://localhost:3000/recipe/ginger-champagne
// http://localhost:3000/recipe/Ginger%20Champagne

const RecipeItem = ({ recipe }) => {
  const { title, ingredients, thumbnail } = recipe;
  return (
    <div className="col-sm-3 mt-4">
      <Link to={`/recipe/${slugify(title)}`}>
        <div className="card">
          <img className="card-img-top img-fluid" src={thumbnail} alt="" />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">
              <strong>Ingredients: </strong>
              {ingredients}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default RecipeItem;
