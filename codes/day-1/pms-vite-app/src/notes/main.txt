import { createRoot } from "react-dom/client";
import { App } from "./App";

const appReactElement = App()
const rootDiv = document.getElementById('root') as HTMLElement

//createRoot lets you create a root to display React components inside a browser DOM node.
const rootReactElement = createRoot(rootDiv)

//render method creates the desired HTML element from the React element as returned by the App component function and then pushes the same inside the root element
rootReactElement.render(appReactElement)
