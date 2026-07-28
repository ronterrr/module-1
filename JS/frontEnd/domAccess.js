/*
DOM Access using
1. querySelector
2. document.get<...>

1. getElementByID:
    Create a variable and assign it the DOM element with the id div-1
    Console.log this element and view in your browser
    In the browser console you should be able to hover over the element


2. getElementByClassName:
    Create a variable and assign it the DOM element with the class list-item
    Console.log this element and view in your browser
    In the browser console you should be able to hover over the element

3. querySelector:
    1. For the ID: 
        Create a variable and assign it the DOM element with the id div-1
        Console.log this element and view in your browser
        In the browser console you should be able to hover over the element

    2. For the class:
        Create a variable and assign it the DOM element with the class list-item
        Console.log this element and view in your browser
        In the browser console you should be able to hover over the element

    3. For the class (using querySelectorAll):
        Create a variable and assign it the DOM element with the class list-item
        Console.log this element and view in your browser
        In the browser console you should be able to hover over the element
        Use a for or while loop to go through the array elements

*/

let div1 = document.getElementById("div-1");
console.log(div1);

let listItem = document.getElementsByClassName("list-item");
console.log(listItem);

let queryDiv1 = document.querySelector("#div-1");
console.log(queryDiv1);

let queryListItem = document.querySelector(".list-item");
console.log(queryListItem);

let queryAllListItem = document.querySelectorAll(".list-item");
console.log(queryAllListItem);

for(let i = 0; i!=queryAllListItem.length; i++){
    console.log(queryAllListItem[i]);
}

const otherFruits = ["Kiwi", "Pineapple", "Dragon Fruit"];
const originalDiv = document.getElementById("div-1").innerHTML;

function original(){
    console.log("Original clicked");
    document.querySelector("#div-1").innerHTML = originalDiv;

}

function replace(){
    console.log("Replace clicked");
    const newHtml = `
    <h3>List Chores</h3>
    <ul>
        <li class="list-item">Clean Bathroom</li>
        <li class="list-item">Clean Kitchen</li>
        <li class="list-item">Fetch Water</li>
        `
    document.querySelector("#div-1").innerHTML = newHtml;

}

function updateFruits(){
    console.log("Update Fruits clicked");

    const fruitElements = document
    .querySelector("#div-1")
    .querySelectorAll(".list-item");

    console.log(fruitElements);
    for(let i = 0; i!=fruitElements.length; i++){
        const singleFruitElement = fruitElements[i];
        singleFruitElement.innerText = otherFruits[i];

    }

}