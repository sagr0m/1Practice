"use strict";

let product = [
  ["nike.png","Nike",100],
  ["puma.png","Adidas",200]
];

let block_product = document.querySelector(".product");


for (let i = 0; i < product.length; i++){
  const element = product[i];
  block_product.innerHTML += `
  <div class="card">
    <img class="pictureproduct" src="images/${element[0]}">
    <p>${element[1]}</p>
    <p>${element[2]}</p>
  </div>
  `;
}