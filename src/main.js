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


let firebaseConfig = {
  apiKey: "AIzaSyBtuFkQEdDc6OUirj91Qi5bv4MRHI4Hv6w",
  authDomain: "red-social-5d8a5.firebaseapp.com",
  projectId: "red-social-5d8a5",
  storageBucket: "red-social-5d8a5.appspot.com",
  messagingSenderId: "386859626886",
  appId: "1:386859626886:web:171d0a199f7005a860bc07",
  measurementId: "G-KJH6MYBJ8C"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


const mail= document.getElementById("mail");

const password= document.getElementById("password")
//const btnRegister = document.getElementById("register")

function createUser(){

  
 firebase.auth().createUserwithEmailandPassword(mail,password)
  .then(res =>{
    alert("Lo hiciste bien, eres muy listo, bienvenido");
  
  }).catch(err =>{
    alert("Ocurrio un error,no seas tonto");
 })
}



