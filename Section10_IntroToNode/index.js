// console.log("Hello World!");

// jshint esversion:6

// const fs=require('fs');

// fs.copyFileSync("file1.txt","file2.txt");  // Copy the content of file 1 to file 2

var superheroes = require("superheroes");

var mysuperhero = superheroes.random();
console.log(mysuperhero);

var supervillain = require("supervillains");
console.log(supervillain.random()); 