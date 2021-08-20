var btn= document.getElementById("btn").addEventListener("click",getUser);
var con=0;
var div= document.getElementById("cardDiv");
function getUser(){
fetch("https://jsonplaceholder.typicode.com/users")
.then(response=>response.json())
.then((user) =>{
    for(let index=0;index<1;index++){
        div.innerHTML+=`
        <tr>
            <td>${user[con].id}</td>
            <td>${user[con].name}</td>
            <td>${user[con].username}</td>
            <td>${user[con].email}</td>
            <td>${user[con].address.street}<br>${user[con].address.suite}<br>${user[con].address.city}<br>${user[con].address.zipcode}<br>${user[con].address.geo.lat}<br>${user[con].address.geo.lng}</td>
            <td>${user[con].phone}</td>
            <td>${user[con].website}</td>
            <td>${user[con].company.name}<br>${user[con].company.catchPhrase}<br>${user[con].company.bs}</td>

        </tr>  
        `
        con=con+1;
    }
})
.catch((error)=>{
    console.log(error);

})

}