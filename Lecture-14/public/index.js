let userContainer = document.querySelector(".user-container");
let registerForm = document.querySelector(".register");

let nameInput = document.querySelector(".name");
let usernameInput = document.querySelector(".username");
console.log(userContainer);

function getUsersData(URL){
    fetch(URL)
    .then((res)=>{
        console.log(res)
        return res.json()      // to convert to json & return promise
    })
    .then((data)=>{
        console.log(data);
        data.forEach(user=>{
            displayUsers(user);
        })
    })
    .catch((err)=>{
        console.log(err);
    })
}

function displayUsers(users){
    let li = document.createElement("li");
    li.setAttribute("class", "user-item");
    li.innerHTML = `<div class="userInfo">
                <h1> ${users.name}</h1>
                <p>${users.username}</p>
            </div>
            <div class="userButton">
                <button class="user-delete">Delete</button>
                <button class="user-edit">Edit</button>
            </div>`

            userContainer.appendChild(li);
}
getUsersData("http://localhost:3000/users");



function addUser(name, username, URL){
    let data = {
        name: name,
        username: username
    }
    fetch(URL,{          // by default get method is used
        method: "POST",  
        headers: {
            "Content-Type": "application/json"  // to send data in json format
        },
        body: JSON.stringify(data)
    })
    .then((res)=>{
        return res.json()
    })
    .then((data)=>{
        console.log(data);
       
    })

}
registerForm.addEventListener("submit", function(e){      // form's default behavior is to refresh page
    e.preventDefault();  // to prevent the default behavior of form submission
    let name = nameInput.value;
    let username = usernameInput.value;
    addUser(name, username, "http://localhost:3000/addusers");
})