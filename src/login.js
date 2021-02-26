import {onNavigate} from "./router.js"
import {iniciarSesion} from "./lib/aut.js"
export const login = (target) =>{
    const html= `
<h1>I am login Page</h1>


<input class="" type="text" name="nombre" id="emaillogin" placeholder="Ingrese Correo">
<input class="" type="password" name="nombre" id="passwordlogin" placeholder="Ingrese Contraseña">
<button class=" " type="button" id ="entrar"> Iniciar Sesión</button>


`
target.innerHTML = html


   const btnentrar=document.getElementById("entrar")
    btnentrar.addEventListener("click",(e) =>{
    const email=document.getElementById("emaillogin").value;
    const password=document.getElementById("passwordlogin").value;
    iniciarSesion(email,password)
})
document.getElementById("entrar").addEventListener('click', (e) => {
    e.preventDefault()
    onNavigate('/wall')
})
}


export default login;
