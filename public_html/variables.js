

//traffics gameplay**
var i; //used for the multiply and stored arrays. also used in the betting.js class
var bankerfee = 0; // may not be used unless for statistical purposes or to limit the banker's payout amount during gameplay

var turn = 0; // the real game will recieve input from random order. this is just to prototype 
var firstprompt = 0; // makes sure an animal position is chosen first before a bet can be accepted
var amountofplayers = 0; //to help a for loop payout players want they deserve

// sidebet prototype
var sidebetIDcount = 0; //this is like the variable 'turn; but for the tracked sidebets
var sidebetArray = new Array(20); //stores the sidebets

var availplayers; //this shows the user who is able to be sidebetted throughout the overall game and gets updated into a scope variable

var validposchoice = -1; //used as a flag to make sure an available position offered was chosen 
var chosenplayer; //used as a flag to make sure a person was chosen to sidebet
var extractedflag = 0; //after money is extracted then the next function can be accessed

var availplayerindex = 0; //this aligns with player object position ex: 0 is Wing and 1 is Eric
var extractedamount = 0;


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
//make store and multiply arrays zero I don't know if this is necessary
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
node[0] = new Person("Wing", 5, 0);
node[1] = new Person("Eric", 4, 1);
node[2] = new Person("Banker", 0, 2);

amountofplayers++; //Wing - for the first new Person object
amountofplayers++; //Eric - for the second new Person object
// we don't include the banker because he doesn't bet
var dice = [5, 5, 5]; //dice could roll in the beginning of the game hehe

//angular.js without this the app doesn't work
angular.module('playerStatus', []);
