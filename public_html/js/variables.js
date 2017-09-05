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
// make store and multiply arrays zero I don't know if this is necessary
for (i = 0; i < 6; i++) {
    for (j = 0; j < 2; j++) {
        stored[i][j] = 0;
        multiply[i][j] = 0;
        // console.log(stored[i][j]);
    }
}

// create players through the constructorOjects
var node = [0, 1, 2];

// player data
node[0] = new Person("Wing", 5, 0);
node[1] = new Person("Eric", 4, 1);
node[2] = new Person("Banker", 0, 2);

amountofplayers++; // Wing - for the first new Person object
amountofplayers++; // Eric - for the second new Person object
// we don't include the banker because he doesn't bet
var dice = [5, 5, 5]; // dice could roll in the beginning of the game hehe

// angular.js without this the app doesn't work
angular.module('playerStatus', []);
