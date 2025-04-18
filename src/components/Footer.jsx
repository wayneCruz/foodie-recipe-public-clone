import "../styles/footer.css"
import { Link } from "react-router-dom"
import xIcon from "../assets/X-icon-white.svg"
import githubIcon from "../assets/github-icon-white.svg"
import linkedinIcon from "../assets/linkedin-icon-white.svg"

export default function Footer() {
  return <footer className="footer-container">
    <span className="credits-container">
      <p>Developed by: <strong>Dev Wayne</strong></p>
      <p>&#xa9;Mr. Foodie: Recipe Maker 2025 All rights Reserved</p>
    </span>

    <span className="account-links-container">
      <Link to="https://github.com/wayneCruz" target="_blank">
        <img src={githubIcon} alt="github account" />
      </Link>
      <Link to="https://www.linkedin.com/in/nylbert-wayne-cruz-128832339" target="_blank">
        <img src={linkedinIcon} alt="linkedin account" />  
      </Link>
      <Link to="https://x.com/@UzumakiWayney" target="_blank">
        <img src={xIcon} alt="X account" />
      </Link>
    </span>
  </footer>
}