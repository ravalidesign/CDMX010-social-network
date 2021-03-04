import { onNavigate } from './router.js'

export const home = (target) => {
    const html = `
    <header>
    
<nav class= "mainmenu" id= "topbar">
        <label for ="btnmenu"><img src="../assets/burgerbutton.png"></label>
        <ul>
        <li><a id="mainMenu" href="#">Home</a> </li>
        <li><a id="about" href="#">Acerca de</a> </li>
        <li><a id="login" href="#">Iniciar sesion</a></li>
        <li><a id="signUp" href="#">Registro</a></li>
        <li><a id="contact" href="#">Contacto</a> </li>
        </ul>
        
    </nav>
    </header>
    
    <div><img class="imgp" src="../Assets/backgroundtwo.jpg"></div>
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

    /*document.getElementById('mainMenu').addEventListener('click', (e) => {
            e.preventDefault()
            onNavigate('/')
        })*/

}
export default home;

