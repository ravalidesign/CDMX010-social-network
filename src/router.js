import about from "./about.js";
import contact from "./contact.js";
import login from "./login.js";
import signUp from "./signUp.js";
import home from "./home.js";

const rootDiv = document.getElementById("root");

export const routes = {
  '/': home,
  '/acercaDe' : about,
  '/contacto' : contact,
  '/iniciarSesion' : login,
  '/registro' : signUp,
}

export const onNavigate = (pathname) => { 
  window.history.pushState( {}, pathname, window.location.origin + pathname) 
  const component = routes[pathname]
  component(rootDiv)
} 

window.onpopstate = () => {
  const component = routes[window.location.pathname]
  component(rootDiv)
}