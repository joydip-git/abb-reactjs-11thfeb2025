// function sayHello() {
//     window.alert('hello to everyone...')
//     var headerElement = document.getElementById('mainHeader')
//     headerElement.innerText = 'Welcome to JS'
// }

// function executeWhenDOMIsLoaded() {
//     var buttonElement = document.getElementById('btnClick')
//     buttonElement.addEventListener('click', sayHello)
// }
// window.addEventListener(
//     'DOMContentLoaded',
//     executeWhenDOMIsLoaded
// )

import { footer } from "./footer/footer";
import { welcome } from './welcome/welcome'

// window.addEventListener(
//     'DOMContentLoaded',
//     function () {
var welcomeDesign: HTMLElement = welcome()
var footerDesign: HTMLElement = footer()
var mainDiv: HTMLDivElement | null = document.getElementById('mainDiv') as HTMLDivElement
mainDiv?.append(welcomeDesign, footerDesign)
//     }
// )
