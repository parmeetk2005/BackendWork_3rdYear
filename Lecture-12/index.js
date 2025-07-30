/* CLICK ON GENERATE BUTTON TO GENERATE RANDOM COLOR (METHOD-1) */

// const box = document.getElementById('box');
// const generateButton = document.getElementById('generate');

// const colors = ['#FF5733', '#33FF57', '#3357FF', '#F1C40F', '#9B59B6', '#1ABC9C', '#E74C3C'];

// generateButton.addEventListener('click', () => {
//     let randomColor = '';

//     for (let i = 0; i < colors.length; i++) {
//         const randomIndex = Math.floor(Math.random() * colors.length);
//         randomColor = colors[randomIndex];
//         break; 
//     }

//     box.style.backgroundColor = randomColor;
// });




/* CLICK ON GENERATE BUTTON TO GENERATE RANDOM COLOR (METHOD-2) */

// let box=document.querySelector('.box');
// let getbtn=document.querySelector('.btn');

// const colors = ["red", "blue", "green", "yellow", "purple", "orange", "pink", "grey", "brown", "black"];

// function randomColor(){
//     let index=Math.floor(Math.random()*10);
//     let color=colors[index];
//     return color;
// }

// getbtn.addEventListener('click',function(){
//     let color=randomColor();
//     box.style.backgroundColor=color;
// });





/* CLICK ON GENERATE BUTTON TO GENERATE RANDOM COLOR TILL WE PRESS STOP BUTTON AND THE COLORS WILL BE GENERATED RANDOMLY BY ITSELF (METHOD-1) */

// let box = document.querySelector('.box');
// let getbtn = document.querySelector('.btn');
// let stopbtn = document.querySelector('.stopbtn');
// const colors = ["red", "blue", "green", "yellow", "purple", "orange", "pink", "grey", "brown", "black"];
// let intervalId;
// function randomColor() {
//     let index = Math.floor(Math.random() * colors.length);
//     return colors[index];
// }
// getbtn.addEventListener('click', function() {
//     intervalId = setInterval(function() {
//         let color = randomColor();
//         box.style.backgroundColor = color;
//     }, 1000);
// });
// stopbtn.addEventListener('click', function() {
//     clearInterval(intervalId);
// });




/* CLICK ON GENERATE BUTTON TO GENERATE RANDOM COLOR TILL WE PRESS STOP BUTTON AND THE COLORS WILL BE GENERATED RANDOMLY BY ITSELF (METHOD-2) */

let box=document.querySelector('.box');
let getbtn=document.querySelector('.btn');
let stopbtn=document.querySelector('.stopbtn');
let intervalId = null;
const colors = ["red", "blue", "green", "yellow", "purple", "orange", "pink", "grey", "brown", "black"];

function randomColor(){
    let index=Math.floor(Math.random()*10);
    let color=colors[index];
    return color;
}

getbtn.addEventListener('click',function(){
    intervalId = setInterval(()=>{
        let color=randomColor();
        box.style.backgroundColor=color;

    },500)
});
stopbtn.addEventListener("click",function(){
    if(intervalId){
        clearInterval(intervalId);
    }
});