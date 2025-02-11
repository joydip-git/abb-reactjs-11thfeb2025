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
window.addEventListener(
    'DOMContentLoaded',
    function () {
        var welcomeDesign = welcome()
        var footerDesign = footer()
        var mainDiv = document.getElementById('mainDiv')
        mainDiv.append(welcomeDesign, footerDesign)
    }
)
