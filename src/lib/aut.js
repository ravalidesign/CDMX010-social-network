export function iniciarSesion(email, password, onNavigate) {
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((res) => {
      onNavigate('/wall');
      console.log(res);
    }).catch((error) => {
      alert('Inicia sesion bobo');
    });
}

export function createUser(email, password) {
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((res) => {
      alert('Se registro correctamente');

      const configuracion = {
        url: 'http:/localhost:5000/',
      };

      res.user.sendEmailVerification(configuracion)
        .catch((error) => {
          console.error(error);
        });
      firebase.auth().signOut();
      Materialize.toast(
        `Bienvenido ,debes realizar el proceso de verificación
    `,
      );
    })
    .catch((error) => {
      ver('Error ');
    });
}
// Cerrar sesión //
export function endSesion() {
  firebase.auth().signOut().then((res) => {
    document.location.href = '/';
  }).catch((error) => {
    alert(err);
  });
}

export function authGoogle() {
  const providerGoogle = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(providerGoogle).then((res) => {
    
  }).catch((err) => {

  });
}
