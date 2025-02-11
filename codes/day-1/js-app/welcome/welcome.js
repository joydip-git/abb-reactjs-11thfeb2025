function welcome() {

    //data
    var welcomeMessage = "Welcome to JS";

    //event handler
    function buttonClicked() {
        window.alert('hello to everyone...')
        var headerElement = document.getElementById('mainHeader')
        headerElement.innerText = 'Welcome to Components'
    }

    //design
    var headerElement = document.createElement('h2')
    headerElement.setAttribute('id', 'mainHeader')
    headerElement.innerText = welcomeMessage;

    var breakElement = document.createElement('br')

    var buttonElement = document.createElement('button')
    buttonElement.setAttribute('type', 'button')
    buttonElement.setAttribute('id', 'btnClick')
    buttonElement.innerText = "Click Me!!!"
    buttonElement.addEventListener('click', buttonClicked)

    var divElement = document.createElement('div')
    divElement.append(headerElement, breakElement, buttonElement)

    return divElement
}