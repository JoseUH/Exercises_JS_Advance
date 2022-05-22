// 1.1 Basandote en el array siguiente, crea una lista ul > li 
// dinámicamente en el html que imprima cada uno de los paises.
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

const myUl$$ = document.createElement("ul")
document.body.appendChild(myUl$$)


for (const countrie of countries) {
    const myLi$$ = document.createElement("li");
    myLi$$.innerText = countrie
    
    myUl$$.appendChild(myLi$$); 
}


// 1.2 Elimina el elemento que tenga la clase .fn-remove-me.

const remove$$ = document.querySelectorAll(".fn-remove-me");
for (let step = 0; step < remove$$.length; step++) {
    remove$$[step].remove();
    
}

// 1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos 
// en el div de html con el atributo data-function="printHere".
// const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];

const cars = ["Mazda 6", "Ford fiesta", "Audi A4", "Toyota corola"];

for (const car of cars) {
  const myUl$$ = document.createElement("ul");
  const myLi$$ = document.createElement("li");
  myLi$$.innerText = car;
  myLi$$.setAttribute("data-function", "printhere");
  document.body.appendChild(myUl$$);
  myUl$$.appendChild(myLi$$);
}


// 1.4 Crea dinamicamente en el html una lista de div que contenga un elemento 
// h4 para el titulo y otro elemento img para la imagen.
// const countries = [
// 	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
// 	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
// 	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
// 	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
// 	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
// ];

const countries1 = [
    { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=1" },
    { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=2" },
    { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=3" },
    { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=4" },
    { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=5" },
  ];
  
  const divPadre$$ = document.createElement("div");
  document.body.appendChild(divPadre$$);
  
  for (const countrie of countries1) {
    const myDivH$$= document.createElement("div")
    const myH4$$ = document.createElement("h4");
    const myImg$$ = document.createElement("img");
    myH4$$.innerText = countrie.title;
    myImg$$.setAttribute("src", countrie.imgUrl);
    divPadre$$.appendChild(myDivH$$);
    myDivH$$.appendChild(myH4$$);
  
    myDivH$$.appendChild(myImg$$);
  }
  

// 1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último 
// elemento de la lista.

const lastElementButton = document.querySelector("#delete-last-element");
lastElementButton.addEventListener("click", function () {
  const selectDivs = document.querySelectorAll("div");
  selectDivs[selectDivs.length - 1].remove();
});


  

// 1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los 
// elementos de las listas que elimine ese mismo elemento del html.


const countries2 = [
    { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=1" },
    { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=2" },
    { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=3" },
    { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=4" },
    { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=5" },
  ];
  
  const divPadre1$$ = document.createElement("div");
  document.body.appendChild(divPadre1$$);
  
  const remove = (elemento) => {
    console.log(elemento);
    elemento.remove();
  };
  
  for (const countrie of countries2) {
    const myDivH1$$ = document.createElement("div");
    const myH41$$ = document.createElement("h4");
    const myImg1$$ = document.createElement("img");
    const myBtn1$$ = document.createElement("button");
  
    
    myBtn1$$.innerText = "Eliminar";
    myBtn1$$.addEventListener("click", () => remove(myDivH1$$))
  
    myH41$$.innerText = countrie.title;
    myImg1$$.setAttribute("src", countrie.imgUrl);
  
    
    divPadre1$$.appendChild(myDivH1$$);
    myDivH1$$.appendChild(myH41$$);
    myDivH1$$.appendChild(myBtn1$$);
    myDivH1$$.appendChild(myImg1$$);
  }
  
