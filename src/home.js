import { onNavigate } from './router.js'

export const home = (target) => {
    const html = `
    <header>
<<<<<<< HEAD
    
<nav class= "mainmenu" id= "topbar">
        <label for ="btnmenu"><img src="../assets/burgerbutton.png"></label>
=======

        <input type="checkbox" id="btnmenu">
        <label for ="btnmenu"><img src="../assets/burger.png"></label>
        
        <nav class="menu">
>>>>>>> 7f3ed8e0e40d23e75c62365c4d0573fcbee9e47a
        <ul>
        <li><a id="mainMenu" href="#">Home</a> </li>
        <li><a id="about" href="#">Acerca de</a> </li>
        <li><a id="login" href="#">Iniciar sesion</a></li>
        <li><a id="signUp" href="#">Registro</a></li>
        <li><a id="contact" href="#">Contacto</a> </li>
        </ul>
        </nav>
    
    </header>
    
    <div class="imgp" <img src="../Assets/backgroundtwo" width="100%" ></div>
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

