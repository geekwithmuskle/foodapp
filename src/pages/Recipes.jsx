import React from 'react'
import PreviousSearches from '../components/PreviousSearches';
import RecipeCard from '../components/RecipeCard';

const Recipes = () => {
  const searches = ["pizza", "burger", "cookies", "juice", "salad", "ice-cream", "lasagna", "Hamburger", "chips", "pudding", "soup"];

  const recipes = [
    {
        title: "Chicken Pan Pizza",
        image: "/img/gallery/img_1.jpg",
        authorImg: "/img/top-chefs/img_1.jpg",
    }, 
    {
        title: "Spaghetti and Meatballs",
        image: "/img/gallery/img_4.jpg",
        authorImg: "/img/top-chefs/img_2.jpg",
    },
    {
        title: "American Cheese Burger",
        image: "/img/gallery/img_5.jpg",
        authorImg: "/img/top-chefs/img_3.jpg",
    },
    {
        title: "Mutton Biriyani",
        image: "/img/gallery/img_6.jpg",
        authorImg: "/img/top-chefs/img_5.jpg",
    },
    {
        title: "Japanese Sushi",
        image: "/img/gallery/img_10.jpg",
        authorImg: "/img/top-chefs/img_6.jpg",
    },
    {
        title: "Chicken Pan Pizza",
        image: "/img/gallery/img_1.jpg",
        authorImg: "/img/top-chefs/img_1.jpg",
    }, 
    {
        title: "Spaghetti and Meatballs",
        image: "/img/gallery/img_4.jpg",
        authorImg: "/img/top-chefs/img_2.jpg",
    },
    {
        title: "American Cheese Burger",
        image: "/img/gallery/img_5.jpg",
        authorImg: "/img/top-chefs/img_3.jpg",
    },
    {
        title: "Mutton Biriyani",
        image: "/img/gallery/img_6.jpg",
        authorImg: "/img/top-chefs/img_5.jpg",
    },
    {
        title: "Japanese Sushi",
        image: "/img/gallery/img_10.jpg",
        authorImg: "/img/top-chefs/img_6.jpg",
    },
    {
        title: "American Cheese Burger",
        image: "/img/gallery/img_5.jpg",
        authorImg: "/img/top-chefs/img_3.jpg",
    },
    {
        title: "Mutton Biriyani",
        image: "/img/gallery/img_6.jpg",
        authorImg: "/img/top-chefs/img_5.jpg",
    }
  ]
  return (

    
    <div>
      <PreviousSearches searches={searches} />

      <div className="recipe-container">
        {recipes.map((recipe,i) => (
            <RecipeCard key={i} recipe={recipe} />
        ))}
        
      </div>
      
    </div>
  )
}

export default Recipes