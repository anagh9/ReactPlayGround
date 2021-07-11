import React from "react";
import Ingredient from "./Ingridents";

export default function IngredientList({ ingredients }) {
  const ingredientElements = ingredients.map((ingredient) => {
    return <Ingredient key={ingredient.id} {...ingredient} />;
  });
  return <div className='ingridient-grid'>{ingredientElements}</div>;
}
