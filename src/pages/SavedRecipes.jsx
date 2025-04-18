import Nav from "../components/Nav.jsx"
import FoodieRecipe from "../components/FoodieRecipe.jsx"
import { useRecipeContext } from "../context/recipeContext.jsx"
import backgroundImage from "../assets/backgroundimg2.webp"
import backIcon from "../assets/back-button.png"

export default function SavedRecipes() {
  const {savedRecipes} = useRecipeContext()
  
  if(savedRecipes.length) {
    return  <main>
        <Nav link="/foodie-recipe/home"
          text="Back Home"
          icon={backIcon} 
        />
        <div className="background-image">
            <img src={backgroundImage} />
        </div>  

        <div className="recipe-container">
            <h2 className="saved-header">Saved Recipes:</h2>
            <div>
              {savedRecipes.map((recipe) => (
                <FoodieRecipe recipe={recipe} key={recipe.id} />
              ))}
            </div>
        </div>
    </main>   
  }

  return <main>
    <Nav link="/foodie-recipe/home"
      text="Back Home"
      icon={backIcon} 
    />
      <div className="background-image">
          <img src={backgroundImage} />
      </div>  
  
    <div className="saved-empty">
      <h2>No saved recipes yet!</h2>
      <p>Start saving recipes here.</p>
    </div>
  </main>   
}