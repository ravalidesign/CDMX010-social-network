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
    target.innerHTML = routes[pathname]

    document.getElementById('login').addEventListener('click', (e) => {
        e.preventDefault()
        onNavigate('/login')
    })

    document.getElementById('contacto').addEventListener('click', (e) => {
        e.preventDefault()
        onNavigate('/contacto')
    })

    document.getElementById('registro').addEventListener('click', (e) => {
        e.preventDefault()
        onNavigate('/registro')
    })

    document.getElementById('about').addEventListener('click', (e) => {
        e.preventDefault()
        onNavigate('/about')
    })
    document.getElementById('mainMenu').addEventListener('click', (e) => {
        e.preventDefault()
        onNavigate('/mainMenu')
    })

    
}

export default home