var btn = document.getElementById("btn").addEventListener("click", getPost);
var con = 0;
var div = document.getElementById("postDiv");

function getPost() {
    //var feature = document.getElementById("postDiv");
    //postDiv.classList.add('container');

    fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        /*.then(data=>{
            data.forEach(function(row){
                console.log(row);
                var titleEl = document.createElement('h1');
                var bodyEl = document.createElement('div');
    
                titleEl.innerHTML = row.title;
                bodyEl.innerHTML = row.body;
    
                feature.appendChild(titleEl);
                feature.appendChild(bodyEl);
            })
        })*/
        .then((post) => {
            for (let index = 0; index < 1; index++) {
                div.innerHTML += `    
                <div class="col-4 text-white card bg-dark mx-auto border border-white">
                    <div onclick="getPostDetail(${post[con].id})" id="${post[con].id}" class="card-body">
                        
                        <p class="card-title"> ID: ${post[con].id}</p>


                    </div>
                </div>

                `
                con = con + 1;
            }
        })
        .catch((error) => {
            console.log(error);
        })

}

