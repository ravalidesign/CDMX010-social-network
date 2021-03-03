export function iniciarSesion(email,password){


firebase.auth().signInWithEmailAndPassword(email,password)
.then(res =>{
console.log(res)

}).catch(error =>{

})

}


export function createUser(email,password){
firebase.auth().createUserWithEmailAndPassword(email,password)
.then (res =>{
    alert("Se registro correctamente");
  
  const configuracion={
      url:"http:/localhost:5000/"
  }
  
    res.user.sendEmailVerification (configuracion)
     .catch(error=>{
      console.error(error)
  })
   firebase.auth().signOut()
   Materialize.toast(
    `Bienvenido ,debes realizar el proceso de verificación
    `
   )
})
.catch(error=>{
    alert("Ocurrio un error");
})
}








