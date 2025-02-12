import { createRoot } from "react-dom/client";
import { App } from "./components/app/App";
import { BrowserRouter } from "react-router-dom";
import './theme.css'

const root = document.getElementById('root') as HTMLElement;

createRoot(root)
    .render(
        <BrowserRouter>
            <App />
        </BrowserRouter>
    )
