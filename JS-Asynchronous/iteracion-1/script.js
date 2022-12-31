// 1.1 Utiliza esta url de la api Agify 'https://api.agify.io?name=michael' para 
// hacer un .fetch() y recibir los datos que devuelve. Imprimelo mediante un 
// console.log(). Para ello, es necesario que crees un .html y un .js.

const michael = async () => {
    const mike = await fetch("https://api.agify.io?name=michael");
    const mikeJSON = await mike.json();
    console.log(mikeJSON)
}
michael()

// 2.1 Dado el siguiente javascript y html. Añade la funcionalidad necesaria usando 
// fetch() para hacer una consulta a la api cuando se haga click en el botón, 
// pasando como parametro de la api, el valor del input.
// const baseUrl = 'https://api.nationalize.io';
// const input$$ = document.querySelector("input")
// const buscar = async ()=> {
// const data = await fetch(baseUrl+"?name="+input$$.value)
// const dataJson = await data.json();
// console.log(dataJson);
// }
// const button$$ = document.querySelector("button").addEventListener("click",buscar)




// 2.3 En base al ejercicio anterior. Crea dinamicamente un elemento  por cada petición 
// a la api que diga...'El nombre X tiene un Y porciento de ser de Z' etc etc.
// EJ: El nombre Pepe tiene un 22 porciento de ser de ET y un 6 porciento de ser 
// de MZ.
// const baseUrl = 'https://api.nationalize.io';
// const input$$ = document.querySelector("input")
// const buscar = async ()=> {
// const data = await fetch(baseUrl+"?name="+input$$.value)
// const dataJson = await data.json();
// pintar(dataJson.country)
// }
// const pintar  = (countries)=> {
    
//    for (const country of countries) {
        // const percentage = Math.floor(country.probability * 100)

//     const p$$ = document.createElement("p")
//    p$$.innerText= `benito tiene un ${percentage}% de ser ${country.country_id}`
//      document.body.appendChild(p$$)
//    }
// }
// const button$$ = document.querySelector("button").addEventListener("click",buscar)
// 2.4 En base al ejercicio anterior, crea un botón con el texto 'X' para cada uno 
// de los p que hayas insertado y que si el usuario hace click en este botón 
// eliminemos el parrafo asociado.
const baseUrl = 'https://api.nationalize.io';
const input$$ = document.querySelector("input")
const buscar = async ()=> {
const data = await fetch(baseUrl+"?name="+input$$.value)
const dataJson = await data.json();
pintar(dataJson.country)
}
const pintar  = (countries)=> {
    
   for (const country of countries) {
     const percentage = Math.floor(country.probability * 100)
    const div$$ = document.createElement("div")
    const p$$ = document.createElement("p")
    const buttonErase$$ = document.createElement("button")
    buttonErase$$.innerText="x"
    buttonErase$$.addEventListener("click",() => { removeP(div$$) })
   p$$.innerText= `benito tiene un ${percentage}% de ser ${country.country_id}`
     div$$.appendChild(p$$)
     div$$.appendChild(buttonErase$$)

     document.body.appendChild(div$$)
   }
}
const removeP = (nodeEl$$) => {
    nodeEl$$.remove();
}
const button$$ = document.querySelector("button").addEventListener("click",buscar)





// 2.1 Convierte la siguiente promesa para esperar a ejecutar el console usando 
// async-await.
// const runTimeOut = () => {
//     const promise = new Promise((resolve) => {
//         setTimeout(function () {
//             resolve();
//         }, 2000);
//     })

//     promise.then(() => {console.log('Time out!')})
// };

// runTimeOut();

const runTimeOut = async () => {
    await new Promise((resolve) => {
        setTimeout(function () {
            resolve();
        }, 2000);
    })
    console.log('Time out!')
};

runTimeOut();

// 2.2 Convierte la siguiente función con un fetch utilizando async-await. 
// Recuerda que para usar .fetch() tendrás que probar el ejercicio en el navegador;
// function getCharacters () {
//     fetch('https://rickandmortyapi.com/api/character').then(res => res.json()).then(characters => console.log(characters));
// }

// getCharacters();

async function getCharacters () {
    const res = await fetch('https://rickandmortyapi.com/api/character');
    const characters = await res.json();
    console.log(characters);
}

getCharacters();