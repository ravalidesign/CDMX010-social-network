export const wall = (target) => {
    const html = `
<h1>Soy tu muro</h1>

<div class="post-card">
<form id="task-form">
<input autofocus type="text" id="post-title" class="form-control"
placeholder="titulo de tu post">

</div> 
<div class= "post">
<textarea id="post-description" row="10" class="form-control"
placeholder="Escribe un post :D"></textarea>
</div>
<button class="btnpost" id="btnpost"> ¡Comparte! </button>
</form>
`


    target.innerHTML = html

    const db = firebase.firestore();
    function savePost(){
        const title = document.getElementById("post-title").value;
        const posted = document.getElementById("post-description").value;
        db.collection("posts").add({
            title: title,
            posted: posted,
        })
            .then(function (docRef) {
                console.log(docRef.id);

            })
            .catch(function(error){
                console.log(error);
            })
        }


const btnpost = document.getElementById("btnpost");
btnpost.addEventListener("click", e=>{
e.preventDefault();
savePost();
})
}


export default wall;