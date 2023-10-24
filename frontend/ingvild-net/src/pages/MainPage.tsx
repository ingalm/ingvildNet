import React from 'react';
import '../App.css';
import '../css/mainPage.css';
import { useEffect, useState } from 'react';
import { Recipe } from '../services/recipeService';
import RecipeService from '../services/recipeService';
import NavBar from '../components/NavBar';
import RecipeList from '../components/RecipeList';
import Footer from '../components/Footer';

function MainPage() {

  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [recentRecipes, setRecentRecipes] = useState<Recipe[]>([]); //Recipes that have been added recently
  const [recipeTips, setRecipeTips] = useState<Recipe[]>([]); //Random recipes to be shown on the main page
  
  const Update = () => {
    RecipeService.GetRecipes()
      .then((response) => {
        setRecipes(response);
        console.log(recipes);
      })
      .catch((error) => {
        console.log(error);
      });
  };

   useEffect(() => {
     Update();
   }, []);

  return (
    <div className="App">
      <NavBar></NavBar>
      <div id='recipePlanner'>
        <p>The weekly planner will be here</p>
      </div>
      <div id='recipeTips'>
        <h3>Oppskriftstips</h3>
        <RecipeList recipes={recipeTips}></RecipeList>
      </div>
      <div id='recentRecipes'>
        <h3>Nye oppskrifter</h3>
        <RecipeList recipes={recentRecipes}></RecipeList>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default MainPage;
