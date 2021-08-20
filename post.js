
function getPostDetail(id){
    fetch("https://jsonplaceholder.typicode.com/posts/"+id)
    .then(response=>response.json())
    .then((post)=>{
        
var div= document.getElementById(post.id);
        
            div.innerHTML+=`    
            <p class="card-title"> TITLE:<br> ${post.title}</p>
            <p >BODY: ${post.body}</p>

                ` 
        
    })
    .catch((error)=>{
        console.log(error); 
    })

    
}

