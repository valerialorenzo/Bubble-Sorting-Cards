/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  var button = document.getElementById("draw");
  button.addEventListener("click", function() {
    cardsArr = [];
    randomCard();
  });
  console.log("Hello Rigo from the console!");
  var sortBtn = document.getElementById("sort");
  sortBtn.addEventListener("click", function() {
    letrasANumeros();
    bubbleSort(cardsArr);
    numerosALetras();
    displaySortCards();
  });
};
var amount = document.getElementById("amount");
var cardsArr = [];

function randomCard() {
  var palos = ["♥", "♠", "♣", "♦"];
  var numero = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
  //2. manipular
  document.getElementById("tablero").innerHTML = "";
  for (let i = 1; i <= amount.value; i++) {
    var indexPalo = Math.floor(Math.random() * palos.length);
    var indexNumero = Math.floor(Math.random() * numero.length);
    if (palos[indexPalo] == "♥" || palos[indexPalo] == "♦") {
      document.getElementById(
        "tablero"
      ).innerHTML += `<div class="card d-flex p-1 m-3" style="width: 190px; height: 15rem; justify-content: space-between; border-radius: 15px;  font-size: 40px; margin: 5px;">
  <div class="topIcon text-start text-danger ms-2">${palos[indexPalo]}
  </div>
  <div class="number text-center" style="font-family: Georgia, Times New Roman, Times, serif;">${numero[indexNumero]}
  </div>
  <div class="bottomIcon text-start text-danger mx-2" style="transform:rotate(180deg);">${palos[indexPalo]}
  </div>
  </div>`;
      cardsArr.push({
        numero: numero[indexNumero],
        palo: palos[indexPalo]
      });
    } else {
      document.getElementById(
        "tablero"
      ).innerHTML += `<div class="card d-flex p-1 m-3" style="width: 190px; height: 15rem; justify-content: space-between; border-radius: 15px;  font-size: 40px; margin: 5px;">
      <div class="topIcon text-start ms-2">${palos[indexPalo]}
      </div>
      <div class="number text-center" style="font-family: Georgia, Times New Roman, Times, serif;">${numero[indexNumero]}
      </div>
      <div class="bottomIcon text-start mx-2" style="transform:rotate(180deg);">${palos[indexPalo]}
      </div>
      </div>`;
      cardsArr.push({
        numero: numero[indexNumero],
        palo: palos[indexPalo]
      });
    }
  }
  return cardsArr;
}

function letrasANumeros() {
  console.log(cardsArr);
  console.log(cardsArr[0].numero);
  for (let i = 0; i <= cardsArr.length - 1; i++) {
    if (cardsArr[i].numero == "A") {
      cardsArr[i].numero = 14;
      console.log(cardsArr[i].numero);
    }
    if (cardsArr[i].numero == "K") {
      cardsArr[i].numero = 13;
      console.log(cardsArr[i].numero);
    }
    if (cardsArr[i].numero == "Q") {
      cardsArr[i].numero = 12;
      console.log(cardsArr[i].numero);
    }
    if (cardsArr[i].numero == "J") {
      cardsArr[i].numero = 11;
      console.log(cardsArr[i].numero);
    }
  }
  console.log(cardsArr[0].numero);
}

const bubbleSort = arr => {
  let wall = arr.length - 1; //we start the wall at the end of the array
  while (wall > 0) {
    let index = 0;
    while (index < wall) {
      //compare the adjacent positions, if the right one is bigger, we have to swap
      if (arr[index].numero > arr[index + 1].numero) {
        let aux = arr[index];
        arr[index] = arr[index + 1];
        arr[index + 1] = aux;
      }
      index++;
    }
    wall--; //decrease the wall for optimization
  }
  return arr;
};

function numerosALetras() {
  for (let i = 0; i <= cardsArr.length - 1; i++) {
    if (cardsArr[i].numero == 14) {
      cardsArr[i].numero = "A";
    } else if (cardsArr[i].numero == 13) {
      cardsArr[i].numero = "K";
    } else if (cardsArr[i].numero == 12) {
      cardsArr[i].numero = "Q";
    }
    if (cardsArr[i].numero == 11) {
      cardsArr[i].numero = "J";
    }
  }
}

function displaySortCards() {
  document.getElementById("tablero").innerHTML = "";
  for (let i = 0; i <= cardsArr.length - 1; i++) {
    var indexPalo = cardsArr[i].palo;
    var indexNumero = cardsArr[i].numero;
    if (indexPalo == "♥" || indexPalo == "♦") {
      document.getElementById(
        "tablero"
      ).innerHTML += `<div class="card d-flex p-1 m-3" style="width: 190px; height: 15rem; justify-content: space-between; border-radius: 15px;  font-size: 40px; margin: 5px;">
  <div class="topIcon text-start text-danger ms-2">${indexPalo}
  </div>
  <div class="number text-center" style="font-family: Georgia, Times New Roman, Times, serif;">${indexNumero}
  </div>
  <div class="bottomIcon text-start text-danger mx-2" style="transform:rotate(180deg);">${indexPalo}
  </div>
  </div>`;
    } else {
      document.getElementById(
        "tablero"
      ).innerHTML += `<div class="card d-flex p-1 m-3" style="width: 190px; height: 15rem; justify-content: space-between; border-radius: 15px;  font-size: 40px; margin: 5px;">
      <div class="topIcon text-start ms-2">${indexPalo}
      </div>
      <div class="number text-center" style="font-family: Georgia, Times New Roman, Times, serif;">${indexNumero}
      </div>
      <div class="bottomIcon text-start mx-2" style="transform:rotate(180deg);">${indexPalo}
      </div>
      </div>`;
    }
  }
  cardsArr = [];
}
