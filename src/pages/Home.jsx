import { useState, useRef, useEffect } from "react"
import FoodieRecipe from "../components/FoodieRecipe.jsx"
import IngredientsList from "../components/IngredientsList.jsx"
import { getRecipeFromAI } from "../services/ai.js"
import LoadingAnimation from "../components/LoadingAnimation.jsx"
import suggestedIngredients from "../data/suggestedIngredients.js"
import backgroundImage from "../assets/backgroundimg.jpg"
import Nav from "../components/Nav.jsx"
import { nanoid } from "nanoid"
import savedIcon from "../assets/saved.png"

export default function Home() {
    const [ingredients, setIngredients] = useState([])
    const [recipe, setRecipe] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    const recipeSection = useRef(null)
    const errorSection = useRef(null)

    function addIngredient(formData) {
        const newIngredient = formData.get("ingredient")
        
        if(newIngredient) {
            setIngredients(prevIngredients => [...prevIngredients, newIngredient])
        }else{
            return
        }
    }

    function addSuggested(ingr) {
        setIngredients(prevIngredients => 
            prevIngredients.includes(ingr) ? prevIngredients 
                : 
            [...prevIngredients, ingr] 
        )
    }

    function createAnotherRecipe() {
        setRecipe("");
    }

    async function getRecipe() {
        setIsLoading(true)

        try{
            const recipeText = await getRecipeFromAI(ingredients);
            setRecipe({id: nanoid(), text: recipeText})
            setIngredients([])
            setError(null)
        }catch(error){
            setError("Something went wrong...")
        }finally{
            setIsLoading(false)
        }
    }

    useEffect(() =>{
        if (recipe && recipeSection.current){
            recipeSection.current.scrollIntoView({behavior: "smooth"})
        }
    }, [recipe])

    useEffect(() =>{
        if (error && errorSection.current){
            errorSection.current.scrollIntoView({behavior: "smooth"})
        }
    }, [error])

    const suggestedIngElem = suggestedIngredients.map((ing, i) => 
        <button 
            onClick={() => addSuggested(ing.name)}
            className="suggested-ingr"
            key={i}>
            <img src={ing.img} />
            + {ing.name}
        </button>
    )

    return (
        <main>
            <Nav link="/foodie-recipe/saved-recipes"
                text="Saved Recipes"
                icon={savedIcon}
            />

            <div className="background-image">
                <img src={backgroundImage} />
            </div>
            
            {isLoading && <>
                <LoadingAnimation />
                <p className="loading-text">Generating recipe please wait</p>
            </>}

            {!recipe ? <>
                    <p className="suggested-header">Suggested Ingredients:</p>
                    <div className="suggested-container">
                        {suggestedIngElem}
                    </div>
                
                <form action={addIngredient} className="add-ingredient-form">
                    <input
                        type="text"
                        placeholder="other ingredient e.g. carrots"
                        aria-label="Add ingredient"
                        name="ingredient"
                        required
                    />
                    <button>Add ingredient</button>
                </form>

                <section className="ingredients-on-hand">
                    {ingredients.length > 0 ? 
                    <IngredientsList 
                        ref={recipeSection}
                        ingredients={ingredients}
                        getRecipe={getRecipe}
                    /> : !recipe ? <>
                        <h2>Instructions:</h2>
                        <ol>
                            <li>Add an ingredients: i.e. pasta, potato...etc. Either choose from the suggested ingredients above or type another one.</li>
                            <li>Take note Mr. Foodie needs <strong>at least 4 ingredients.</strong></li>
                            <li>After adding at least 4 ingredients a <strong>"Get a Recipe" button</strong> will appear</li>
                            <li>Then click the button and wait for Mr. Foodie to generate your Recipe!</li>
                        </ol>
                    </> : null}
                </section>
            </> : null}

            { recipe && !error && <>
                <button 
                    className="create-another-button"
                    onClick={createAnotherRecipe}>
                        Create another recipe?
                </button>
                <FoodieRecipe recipe={recipe}/>
            </>}

            {error && <section 
                ref={errorSection}
                className="failed-message">
                    <h2>{error}</h2>
                    <p>Please try again later...</p>
            </section>}
        </main>
    )
}