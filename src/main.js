// Este es el punto de entrada de tu aplicacion

//import { myFunction } from './lib/index.js';

//myFunction();

import {routes} from './router.js'

  const rootDiv = document.getElementById('root');
const homeViewFunction = routes[window.location.pathname];
homeViewFunction(rootDiv);

// const rootDiv = document.getElementById("root");
// rootDiv.innerHTML= routes[window.location.pathname]; 


// document.addEventListener('DOMContentLoaded', () => {
//     const home = routes[window.location.pathname]
//     home(rootDiv)
// })

