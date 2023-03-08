import React from 'react';
import ReactDOM from 'react-dom/client';


class Header {
  constructor() {
    this.color = "Red";
  }

  changeColor = function() {
    document.getElementById("demo").innerHTML += this;
  }
}

const myheader = new Header();

//The window object calls the function:
window.addEventListener("load", myheader.changeColor);

//A button object calls the function:
document.getElementById("btn").addEventListener("click", myheader.changeColor);