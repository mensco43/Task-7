" use strict";
let postTitle= document.getElementById('post-title');
let postBody= document.getElementById('post-body');
let postForm= document.getElementById('#post-form');
//postForm.addEventListener('submit', createpost);

function getPosts(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then((data)=>{
        console.log (data)
        let postlayout =document. getElementById('post-layout')
        let html = "";
        data .forEach(e => {
           //console.log (element)
           html += `
           <div class=" col-md-4">
            <div class="card">
                <div class="card-body">
                <div class="d-flex justify-content-end">
                <h6>${e.id}</h6>
                </div>
                   <h5 class="post-title mb-4">${e.title}</h5>
                   <p class="post-body">${e.body}</p>
               </div>
           </div>
           </div>
       `
            postlayout.innerHTML = html
        });
    })
}
getPosts();

function createpost(e) {
    e.preventDefault ();
     let pTitle = postTitle.value;
     let pBody = postBody.value;
     //console.log('Post Title', pTitle)
     //fetch ('https://jsonplaceholder.typicode.com/posts'{

     //})

}