import { endSesion } from "./lib/aut.js"

export const wall = (target) => {
  const html = `
<head>
<div class= "headpost">
<h1></h1>
<img class="imghead" src="../Assets/logo.png">

<button class="btnEnd" id="btnEnd"><img src="../Assets/iconologout.png"></button>

</div>
</head>

<div class="postContainer">
<div class="post-card">
<form id="post-form">
<input autofocus type="text" id="post-title" class="form-control"
placeholder="titulo de tu post">
<textarea id="post-description" row="10" class="form-control"
placeholder="Escribe un post"></textarea>
<button class="btnpost" id="btnpost" > Comparte! </button>
</div> 

<div class= "post">

</div>


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

  //Utilizado para funcion/evento editado
  const db = firebase.firestore();
  const getPost= (id) => db.collection('posts').doc(id).get();
  const form = document.getElementById('post-form');
  let editStatus= false;



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
  db.collection('posts').onSnapshot((querySnapshot) => {
    titleDos.innerHTML = '';
    querySnapshot.forEach((doc) => {
      const post = doc.data();
      console.log(post);

      post.id = doc.id
      console.log(post.id);
      //(`${doc.id} => ${doc.data()}`);
      titleDos.innerHTML += `
     <div class="postContainer2"
   
       <h4></h4>

       <h4>${post.title}</h4>

       <h1></h1>

       <h4>${post.posted}</h4>
       
       <button class="btnDelete" data-id="${post.id}">Eliminar</button>
       <button class="btnEdit" data-id="${post.id}">Edita</button>
       </div>
       `;

      //Función editado
      const editBtns = document.querySelectorAll('.btnEdit');
       editBtns.forEach(btn => {
         btn.addEventListener('click', async (e) => { 
           const doc= await getPost(e.target.dataset.id);
           console.log(doc.data());
           const postToEdit= doc.data();
           form['post-title'].value = postToEdit.title;
           form['post-description'].value = postToEdit.posted;


           })
          })








       function deletePost(id) {

        return db.collection('posts').doc(id).delete();
      }

       const deleteB = document.querySelectorAll('.btnDelete');
       deleteB.forEach(btn => {
         btn.addEventListener('click', async (e) => {
           const id = e.target.dataset.id;
           console.log(e.target.dataset);
            try { await deletePost(id);
             console.log("se elimino correctamente");
           }
           catch (error) {
             console.error('No estoy borrando', error);
     
           }
          
         }) 
         
       })
    });
  });


  //funcion para borrar post//

  
    /*.then(() => {

   
   console.log("Document successfully deleted!");
 }).catch((error) => {
   console.error("Error removing document: ", error);
 });*/


  ///}

 
}
export default wall;