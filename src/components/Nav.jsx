import "../styles/nav.css"
import { Link } from "react-router-dom"

export default function Nav(props) {
  return <nav className="nav-container">
    <Link className="nav-link"
    to={props.link}>
      <img src={props.icon} alt="saved"/>
      <p>{props.text}</p>
    </Link>
  </nav>
}