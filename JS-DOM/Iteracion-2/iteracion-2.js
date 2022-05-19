
// 2.1 Inserta dinamicamente en un html un div vacio con javascript.

const myDiv$$ = document.createElement("div")
document.body.appendChild(myDiv$$)

// 2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.

const myDivP$$ = document.createElement("div")
const myP$$ = document.createElement("p")
document.body.appendChild(myDivP$$)
myDivP$$.appendChild(myP$$)


// 2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.

const divPadre$$ = document.createElement("div");
    document.body.appendChild(divPadre$$);

for (let step = 0; step < 6; step++) {
    
    
    
    const myP6$$ = document.createElement("p");
   
    
    divPadre$$.appendChild(myP6$$);
    
    
} 

// 2.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.

const myT$$ = document.createElement("p")
myT$$.innerText = 'Soy dinámico!'
document.body.appendChild(myT$$)


// 2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.

const myH2$$ = document.querySelector(".fn-insert-here")
myH2$$.innerText = 'Wubba Lubba dub dub'


// 2.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.
// const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

let myUl$$ = document.createElement("ul");

document.body.appendChild(myUl$$);


for (const app of apps) {
    let myLi$$ = document.createElement("li");
    myLi$$.innerText = app;
    myUl$$.appendChild(myLi$$);
 
}

// 2.7 Elimina todos los nodos que tengan la clase .fn-remove-me

let remove$$ = document.querySelectorAll(".fn-remove-me")
for (const element of remove$$) {
    element.remove();
}

// 2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. 
// 	Recuerda que no solo puedes insertar elementos con .appendChild.

let myPs$$ = document.createElement("p");
myDivs$$ = document.querySelectorAll("div");

myPs$$.innerText = "Voy en medio!";

document.body.insertBefore(myPs$$, myDivs$$[1]);

// 2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here    
    
const Voy$$ = document.querySelectorAll(".fn-insert-here")

for (const p of Voy$$) {
    const myP1$$ = document.createElement("p")
    myP1$$.innerText = "Voy dentro"

    p.appendChild(myP1$$)
}