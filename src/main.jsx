import ReactDOM from 'react-dom/client';
import App from "./App"
import { BrowserRouter } from "react-router-dom";
import "./styles/general.css";
import { StrictMode } from "react";

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);