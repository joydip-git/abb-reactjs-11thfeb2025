export function welcome(): HTMLElement {

    //data
    var welcomeMessage: string = "Welcome to JS";

    //event handler
    function buttonClicked(): void {
        window.alert('hello to everyone...')
        var headerElement: HTMLElement | null = document.getElementById('mainHeader')
        if (headerElement)
            headerElement.innerText = 'Welcome to Components'
    }

    //design
    var headerElement: HTMLElement = document.createElement('h2')
    headerElement.setAttribute('id', 'mainHeader')
    headerElement.innerText = welcomeMessage;

    var breakElement: HTMLElement = document.createElement('br')

    var buttonElement: HTMLButtonElement = document.createElement('button')
    buttonElement.setAttribute('type', 'button')
    buttonElement.setAttribute('id', 'btnClick')
    buttonElement.innerText = "Click Me!!!"
    buttonElement.addEventListener('click', buttonClicked)

    var divElement: HTMLDivElement = document.createElement('div')
    divElement.append(headerElement, breakElement, buttonElement)

    return divElement
}