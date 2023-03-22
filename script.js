window.addEventListener('load', () => {
    const keyButtons = document.getElementsByClassName ('keypard-button')
    const display = document.querySelector ('.calculator-display')

    const keyButtonsArray = Array.from(keyButtons);

    keyButtonsArray.forEach( (button) => {
        
        button.addEventListener('click', () => {
            //console.log(button)
          calculadora(button, display)

        });
    });
});

function calculadora (button, display){
    switch (button.innerHTML){
        case 'C':
            borrar(display);
        break;
        case '=':
        resultado(display);
        break;
        default:
            actualizar(display,button)
            break;
        }
    

}

function resultado(display){
   display.innerHTML=eval(display.innerHTML)
}

function actualizar(display,button){
   if(display.innerHTML == 0){
    display.innerHTML = '';
   }
   display.innerHTML += button.innerHTML;
}

function borrar(display){
    if(display.innerHTML != 0){
        display.innerHTML = 0;
    }
}