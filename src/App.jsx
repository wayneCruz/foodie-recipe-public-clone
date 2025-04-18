import Header from "./components/Header.jsx";
import Home from "./pages/Home.jsx";
import SavedRecipes from "./pages/SavedRecipes.jsx"
import Footer from "./components/Footer.jsx"
import { Route, Routes } from "react-router-dom";
import { RecipeProvider } from "./context/recipeContext.jsx"

export default function App() {
  return (
    <RecipeProvider>
      <Header />
        <Routes>
          <Route path="/foodie-recipe/" element={<Home />}/>
          <Route path="/foodie-recipe/home" element={<Home />}/>
          <Route path="/foodie-recipe/saved-recipes" element={<SavedRecipes />}/>
        </Routes>
      <Footer />
    </RecipeProvider>
  )
}