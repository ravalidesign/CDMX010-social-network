import {onNavigate} from './router.js'

export const home = (target) => {
const html = `
    <ul class="topbar">
        <li class="elm-topbar"><a id="login" href="#">Iniciar sesion</a></li>
        <li class="elm-topbar"><a id="contact" href="#">Contacto</a></li>
        <li class="elm-topbar"><a id="signUp" href="#">Registro</a></li>
        <li class="elm-topbar"><a id="about" href="#">Acerca de:</a></li>
        <li class="elm-topbar"><a id="mainMenu" href="#">menuPrincipal</a></li>
    </ul>
    `
    target.innerHTML = html

    document.getElementById('login').addEventListener('click', (e) => {
        e.preventDefault()
        onNavigate('/login')
    })

    document.getElementById('contact').addEventListener('click', (e) => {
        e.preventDefault()
        onNavigate('/contact')
    })

    document.getElementById('signUp').addEventListener('click', (e) => {
        e.preventDefault()
        onNavigate('/signUp')
    })

    /*document.getElementById('mainMenu').addEventListener('click', (e) => {
            e.preventDefault()
            onNavigate('/')
        })*/
    
    }       
     export default home;

