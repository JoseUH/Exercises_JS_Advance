// 1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el 
// evento click que ejecute un console log con la información del evento del click
const click =() => {
    console.log(event)
}

const myBtn$$ = document.querySelector("#btnToClick");
myBtn$$.addEventListener("click", click)




// 1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.

const myIn$$ = document.querySelector(".focus")
const MyFocus = () => {
    
    console.log(myIn$$.value);
  };
  
myIn$$.addEventListener("focus",MyFocus)


// 1.3 Añade un evento 'input' que ejecute un console.log con el valor del input.

const myInp$$ = document.querySelector(".value")
const Myvalue = () => {
    
    console.log(myInp$$.value);
  };
  
myInp$$.addEventListener("input",Myvalue)
