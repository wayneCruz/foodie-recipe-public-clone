import {createContext, useState, useContext, useEffect} from "react";

const RecipeContext = createContext();

export const useRecipeContext = () => useContext(RecipeContext)

export const RecipeProvider = ({children}) => {
  const [savedRecipes, setSavedRecipes] = useState([]);

  useEffect(() => {
    const storedRecipes = localStorage.getItem("saved-recipes");

    if (storedRecipes) setSavedRecipes(JSON.parse(storedRecipes));
  }, [])

  useEffect(() => {
    if(savedRecipes.length) {
      localStorage.setItem('saved-recipes', JSON.stringify(savedRecipes))
    }
  }, [savedRecipes])

  const addToSaved = (recipe) => {
    setSavedRecipes(prev => [...prev, recipe])
  }

  const removeFromSaved = (recipeId) => {
    setSavedRecipes(prev => prev.filter(recipe => recipe.id !== recipeId))
    localStorage.setItem('saved-recipes', JSON.stringify(savedRecipes))
  }

  const isSaved = (recipeId) => {
    return savedRecipes.some(recipe => recipe.id === recipeId)
  }

  const value = {
    savedRecipes,
    addToSaved,
    removeFromSaved,
    isSaved
  }

  return <RecipeContext.Provider value={value}>
    {children}
  </RecipeContext.Provider>
}