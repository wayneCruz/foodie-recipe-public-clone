import chefClaudeIcon from "../assets/foodie-logo.png";

export default function Header() {
  return <header>
    <img src={chefClaudeIcon}/>
    <h1 className="app-title">Mr. Foodie: Recipe Maker</h1>
  </header>
}