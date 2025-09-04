// Create a new input and button element on the page using JavaScript only.Set the text of button to“Clickme”.
let button=document.createElement("button");
let input=document.createElement("input");
button.innerText="clickme";
document.querySelector("body").append(button);
document.querySelector("body").append(input);
button.setAttribute("id","btn");
input.setAttribute("placeholder","username");
let btn =document.querySelector("#btn");
btn.classList.add("btnstyle");
