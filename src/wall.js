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
<form id="task-form">
<input autofocus type="text" id="post-title" class="form-control"
placeholder="titulo de tu post">
</div> 

<div class= "post">
<textarea id="post-description" row="10" class="form-control"
placeholder="Escribe un post"></textarea>
</div>

<button class="btnpost" id="btnpost" > Comparte! </button>

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
  db.collection('posts').onSnapshot((querySnapshot) => {
    titleDos.innerHTML = '';
    querySnapshot.forEach((doc) => {
      let post = doc.data();
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
       <button class="btnEdit" data-id=${post.id}" >Editar</button>
       </div>
       `;
     
     
     
     
     

     // botones para editar con id//
     
     const btnsEdit = document.querySelectorAll('.btnEdit');
     btnsEdit.forEach( btn => {
      const edit = (id) => db.collection('posts').doc(id).get();
       btn.addEventListener("click", async (e) => {
         const doc = await edit(e.target.dataset.id);
           console.log(doc.data());
       })
     })

     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     // Funcion Delete//
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

// Función de editar//











// function edit(id){
//  db.collection("posts").doc(id).get().then(res =>{
//    document.getElementById("post-title").value= res.data().title;
//    document.getElementById("post-description").value= res.data().description;

//  }).catch(error =>{
//    alert(err)

//  })
// }

// const editPost = document.querySelectorAll('.btnEdit');
// editPost.forEach(item =>{
//   item.addEventListener("click",()=>{
//     const id = e.target.dataset.id;
//            console.log("si funciono");
//            edit(id)

//   })
// })

 
}
export default wall;