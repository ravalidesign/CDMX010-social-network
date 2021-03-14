import { endSesion } from "./lib/aut.js"

export const wall = (target) => {
  const html = `
<head>
<div class= "headpost">
<h1> PUBLICACIONES</h1>
<img class="imghead" src="../Assets/logo.png">
</div>
</head>
<button  id="btnEnd">Cerrar sesión</button>
<div class="postContainer">
<div class="post-card">
<form id="task-form">
<input autofocus type="text" id="post-title" class="form-control"
placeholder="titulo de tu post">
</div> 

<div class= "post">
<textarea id="post-description" row="10" class="form-control"
placeholder="Escribe un post :D"></textarea>
</div>

<button class="btnpost" id="btnpost"> Comparte! </button>
<button class="btnEditPost" id="btnEditPost"> Editar </button>
<button class="btnDeletePost" id="btnDeletePost"> Eliminar </button>
</form>
</div>

<h3 id="title"></h3>


`;

  target.innerHTML = html;

  // función cerrar sesión//

  const btnEnd = document.getElementById("btnEnd");
  btnEnd.addEventListener('click', (e) => {
    e.preventDefault();
    endSesion();
  });


  const db = firebase.firestore();

  function save() {
    const title = document.getElementById('post-title').value;
    const posted = document.getElementById('post-description').value;

    db.collection('posts').add({
      title,
      posted,
    })
      .then((docRef) => {
        console.log(docRef.id);
        const title = document.getElementById('post-title').value = '';
        const posted = document.getElementById('post-description').value = '';
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const btnpost = document.getElementById('btnpost');
  btnpost.addEventListener('click', (e) => {
    e.preventDefault();
    save();
  });

  // leyendo datos//
  const titleDos = document.getElementById('title');
  db.collection('posts').get().then((querySnapshot) => {
    titleDos.innerHTML = '';
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data()}`);
      titleDos.innerHTML += `
     <div class="postContainer2"
       <h2>Titulo</h2>
       <h4>${doc.data().title}</h4>
       <h2>publicación</h2>
       <h4>${doc.data().posted}</h4>
       
       <button class="btnEditPost" id="btnEditPost"> Editar </button>
       <button class="btnDeletePost" id="btnDeletePost"> Eliminar </button>
       </div>
       `;

    });
  });

  //funcion para borrar post//


  const deletePost = (id) => {

    db.collection("post").doc("id").delete().then(() => {
      console.log("Document successfully deleted!");
    }).catch((error) => {
      console.error("Error removing document: ", error);
    });

  }
  const btnDeletePost = document.getElementById('btnDeletePost');
  btnDeletePost.addEventListener('click', (e) => {

    deletePost('${doc.id}');
  });

  //fin de borrar post ^//

  //inicio editar post//

  db.collection("users").doc("id").set({
    title,
    posted,
  })
    .then(() => {
      console.log("Document successfully written!");
    })
    .catch((error) => {
      console.error("Error writing document: ", error);
    });


  const editPost = (id, post - title, post - description) => { //esta funcion trae elementos de la funcion save//
  document.getElementById('post-title').value = post - title;
  document.getElementById('post-description').value = post - description;
  //var delete = //

  //esta funcion actualiza la informacion de los elementos editados//
  boton.onclick = function () { //este boton va a guardar//

    var post = db.collection("users").doc("id").set({
      title,
      posted,
    })
    var titleNew = document.getElementById('post-title').value;
    var descriptionNew = document.getElementById('post-description').value;

    return post.update({
      title,
      posted,
    })
  }
    .then(() => {
      console.log("Document successfully written!");
    })
    .catch((error) => {
      console.error("Error writing document: ", error);
    });

}
const btnEditPost = document.getElementById('btnEditPost');
btnEditPost.addEventListener('click', (e) => {

  editPost('${doc.id}');
});
};
















//funcion para editar post//

export default wall;

// const db = firebase.firestore();
// const btnpost=document.getElementById("btnpost");
// btnpost.addEventListener("click", async (e) =>{

// e.preventDefault();

// const title = document.getElementById("post-title").value;
// const posted = document.getElementById("post-description").value;
// const response = await db.collection("posts").doc().set({
//     title: title,
//     posted: posted,
// })
// console.log(response)

// console.log(title, posted)
// });

// }


























// console.log(title, posted)
// });


