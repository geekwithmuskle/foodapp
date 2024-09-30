import React from 'react';
import CustomImage from "../components/CustomImage.jsx";

const RecipeCard = ({recipe}) => {
  return (
    <div className='recipe-card'>
        <CustomImage imgSrc={recipe.image} pt="65%" />
        <div className="recipe-card-info">
          <img src={recipe.authorImg} className="author-img" alt="" />

          <p className="recipe-title">{recipe.title}</p>
          <p className="recipe-desc"> Lorem ipsum is simply dummy text of the printing and typesetting industry.</p>
          <a href="" className="view-btn">VIEW RECIPE</a>
        </div>
    </div>
  )
}

export default RecipeCard;