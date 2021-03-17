import { createUser, authGoogle } from './lib/aut.js';
import {onNavigate} from './router.js';

export const sign = (target) => {
  const html = `
<h1 id="title">¡A Pueblear!</h1>
<section class="form-register">
<h4> Regístrate </h4>
<input class="controls" type="text" name="nombre" id="name" placeholder="Ingrese su Nombre Completo">
<input class="controls" type="text" name="nombre" id='email' placeholder="Ingrese su Correo">
<span id ='verifyMail'></span>
<input class="controls" type="date" name="date of birth" id="date" placeholder="Ingrese su fecha de nacimiento">
<input class="controls" type="password" name="nombre" id="password" placeholder="Escriba una Contraseña">
<button class=" buttonSignUp" type="button" id ="register"> Ingresar</button>
<p id="pRegistro">ó registrate con<p>

<div id="socialIcons">
<button class="btn-r" id="facebook-btn"><img src="../Assets/facebook.png.png"></button>
<button class="btn-r" id="google-btn"><img src="../Assets/google.png.png"></button>
<button class="btn-r" id="Twitter-btn"><img src="../Assets/twittericon.png.png"></button>
</div>
<p id="volverLogin">¿Ya tengo una cuenta?<p>
</section>

`
target.innerHTML = html;


// if (/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(valor)){
//   alert("La dirección de email " + valor + " es correcta!.");
//    }else {
//      alert("Escribe bien tu correo, por favor!.");

// }
//Función que revisa si el correo está bien escrito//
  const btnRegistro = document.getElementById('register');

  btnRegistro.addEventListener('click', (e) => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    createUser(email, password);
  });
  const btnGoogle = document.getElementById('google-btn');
  btnGoogle.addEventListener('click', (e) => {
    authGoogle();
    onNavigate('/wall');
  });
};

export default sign;


//Función revisa correo válido
function validMail (email){
  var container= document.getElementById()
  var regExp= /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
  var valid= regExp.test(correo); 
  if (valid==true){
    //Si es válido que lo escriba en el span id= verifyMail
   alert('Correo válido');
  }
  else {
    alert ('Revisa tu correo');
  }


}




//evento de validar correo

// function validation(){
//   var mail = document.getElementById("email").value;
//   var alert= document.getElementById('verifyMail');
//   var pattern= /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
// }



