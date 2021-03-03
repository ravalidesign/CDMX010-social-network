export const wall = (target) =>{
    const html= `
<h1>POSTS</h1>

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
`


target.innerHTML = html

const db = firebase.firestore();
const btnpost=document.getElementById("btnpost");
btnpost.addEventListener("click", async (e) =>{
 
e.preventDefault();

const title = document.getElementById("post-title").value;
const posted = document.getElementById("post-description").value;
const response = await db.collection("posts").doc().set({
    title: title,
    posted: posted, 
}) 
console.log(response)


console.log(title, posted)
});

}


export default wall;