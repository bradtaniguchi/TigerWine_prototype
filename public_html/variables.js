

//traffics gameplay
var i; //looping using same variables is iffy
var bankerfee = 0; // may not be used unless for statistical purposes
var turn = 0; // the real game will recieve input from random order
var firstprompt = 0; // makes sure animal is chosen first
var amountofplayers = 0;

// sidebet prototype
var sidebetID = 0;
var sidebetIDcount = 0;
var sidebetArray = []; //this is going to be recreatd and expanded

var availplayers;

// 2D Arrays
// array to track how many times someone gets paid
var multiply = new Array(6);
for (i = 0; i < 6; i++) {
    multiply[i] = new Array(2);
}
// array to track which player placed money where
var stored = new Array(6);
for (i = 0; i < 6; i++) {
    stored[i] = new Array(2);
}
//make store and multiply zero
for (i = 0; i < 6; i++) {
    for (j = 0; j < 2; j++) {
        stored[i][j] = 0;
        multiply[i][j] = 0;
        //console.log(stored[i][j]);
    }
}

// create players through the constructorOjects
var node = [0, 1, 2];
// player data
node[0] = new Person("Wing", 5);
node[1] = new Person("Eric", 4);
node[2] = new Person("Banker", 0); //easy to calculate and keep track
//for loops won't go up to the banker
amountofplayers++; //Wing - for the first new Person Object
amountofplayers++; //Eric - ...

var dice = [5, 5, 5]; //dice could roll in the beginning of the game hehe

//angular.js    
angular.module('playerStatus', []);
