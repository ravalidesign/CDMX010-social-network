import about from "./about.js";
import contact from "./contact.js";
import login from "./login.js";
import signUp from "./signUp.js";
import home from "./home.js";

const rootDiv = document.getElementById("root");

export const routes = {
  '/': home,
  '/about' : about,
  '/contact' : contact,
  '/login' : login,
  '/signUp' : signUp,
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