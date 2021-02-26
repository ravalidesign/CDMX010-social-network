import { onNavigate } from './router.js'

export const home = (target) => {
    const html = `
<nav class= "mainmenu" id= "topbar">
        <a id="mainMenu" href="#">Home</a>
        <a id="about" href="#">Acerca de</a> 
        <a id="login" href="#">Iniciar sesion</a>
        <a id="signUp" href="#">Registro</a>
        <a id="contact" href="#">Contacto</a> 

        
    </nav>
    <img class= "imagenPortada" src = "Assets/backgroundoimg.jpg">
    `
    /*"Acerca de" será pantalla de publicacion*/
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

    document.getElementById('about').addEventListener('click', (e) => {
        e.preventDefault()
        onNavigate('/about')
    })

    /*document.getElementById('mainMenu').addEventListener('click', (e) => {
            e.preventDefault()
            onNavigate('/')
        })*/

}
export default home;

