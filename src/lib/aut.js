//const email=document.getElementById("email")
//const password=document.getElementById("password")
//const btnRegistro=document.getElementById("register")

export function createUser(email,password){
firebase.auth().createUserWithEmailAndPassword(email,password)
.then (res =>{
    alert("Se registro correctamente");

}).catch(error=>{
    alert("Ocurrio un error");
})
}








