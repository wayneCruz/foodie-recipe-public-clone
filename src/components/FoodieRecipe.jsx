import ReactMarkdown from 'https://esm.sh/react-markdown@7'
import { useRecipeContext } from "../context/recipeContext.jsx"
import unsavedIcon from "../assets/unsaved.png"
import savedIcon from "../assets/saved.png"
import arrow from "../assets/arrow-right.svg"
import { clsx } from 'clsx';
import { useState } from 'react';

export default function FoodieRecipe(props) {
  const {isSaved, addToSaved, removeFromSaved} = useRecipeContext();
  const favorite = isSaved(props.recipe.id);
  const [firstFave, setFirstFave] = useState(true)

  function onFavoriteClick(e) {
    e.preventDefault();

    setFirstFave(false)

    if (favorite) {
      removeFromSaved(props.recipe.id)
    }
    else {
      addToSaved(props.recipe)
    }
  }

  const saveClass = clsx({
    ['save-tooltip']: true,
    ['save-tooltip-animate']: favorite
  })

  return <>
      <section ref={props.ref}
          className={"suggested-recipe-container"} aria-live="polite">
          <header className="suggested-recipe-header">
            <p className="recommend-header">Foodie Recommends:</p>
            <button className="save-button"
              onClick={onFavoriteClick}>
                <img src={favorite ? savedIcon : unsavedIcon} alt={favorite ? "saved" : "unsaved"}/>
                <span className={saveClass}>{favorite ? "saved" : ""}</span>
                { firstFave && !favorite? <span className="save-tooltip-floating">
                  Click to Save Recipe! 
                  <img src={arrow} alt='arrow'/>
                </span>: null}
            </button>
          </header>
          <ReactMarkdown>{props.recipe.text}</ReactMarkdown>
      </section>
  </>
}