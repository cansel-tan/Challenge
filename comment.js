var btn= document.getElementById("btn").addEventListener("click",getComment);
var btn1= document.getElementById("btn-1").addEventListener("click",getIdwithComment);
var div= document.getElementById("commentDiv");


function getIdwithComment(){
    var postid= document.getElementById("numb").value;
    console.log(postid);
    fetch("https://jsonplaceholder.typicode.com/comments/?postId="+postid)
    .then(response=>response.json())
    .then((filteredComment)=>{

            div.innerHTML=`  

                `
                for(let index=0;index<filteredComment.length;index++){
                    div.innerHTML+=`
                    <tr>
                   
                        
                        
                        <td>${filteredComment[index].postId}</td>
                        <td>${filteredComment[index].name}</td>
                        <td>${filteredComment[index].email}</td>
                        <td>${filteredComment[index].body}</td>
            
                    </tr>  
                    `
                
                }
    })
    .catch((error)=>{
        console.log(error); 
    
    })
}
var con=0;

function getComment(){
fetch("https://jsonplaceholder.typicode.com/comments")
.then(response=>response.json())
.then((comment) =>{
    for(let index=0;index<comment.length;index++){
        div.innerHTML+=`
        <tr>
       
            <td>${comment[index].postId}</td>
           
            <td>${comment[index].name}</td>
            <td>${comment[index].email}</td>
            <td>${comment[index].body}</td>

        </tr>  
        `
    
    }
})
.catch((error)=>{
    console.log(error);

})


}