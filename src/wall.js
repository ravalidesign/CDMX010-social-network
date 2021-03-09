import { endSesion } from "./lib/aut.js"

export const wall = (target) => {
  const html = `
<h1>POSTS</h1>
<button class="end" id="btnEnd">Cerrar sesión</button>
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
</form>
</div>

<h3 id="title"></h3>


`;

  target.innerHTML = html;


  // función cerrar sesión//


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


        export default wall;






























// console.log(title, posted)
// });

    }
