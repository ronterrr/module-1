/*
Events -> If something happens I want to be notified.

-> Click, hover, type

Before attaching an event, you must be able to access the element.
*/

const myButton = document.getElementById("btn-event-checker");

const div1 = document.getElementById("div-1");

const axisDisplay = document.getElementById("axis-display");

function clickAlert(event){
    alert("Hi button was clicked");
}

let mouseOverAlert = (event) => {
    console.log("Mouse over", Date.now());
}


myButton.addEventListener('click', clickAlert);

myButton.addEventListener('mouseover', mouseOverAlert);

window.addEventListener("mousemove", (event) => {
    axisDisplay.innerHTML = `
    <h5>x: ${event.clientX}</h5>
    <h5>y: ${event.clientY}</h5>
    `;
})