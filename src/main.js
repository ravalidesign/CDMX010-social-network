// Este es el punto de entrada de tu aplicacion

//import { myFunction } from './lib/index.js';

//myFunction();

import  sign  from './sign.js';
import contact  from './contact.js';
import   login  from './login.js';


const routes = {
  '/sign' : sign,
  '/contact' : contact,
  '/login' : login,
};

const rootDiv = document.getElementById("root");

const onNavigate = (pathname) => {
  window.history.pushState(
    {},
    pathname,
    window.location.origin + pathname
  )
  rootDiv.innerHTML = routes[pathname]
  
}


window.onNavigate = onNavigate 
