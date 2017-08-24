

var i, j, m; //looping using same variables is iffy
var bankerfee = 0; // may not be used unless for statistical purposes
var turn = 0; // the real game will recieve input from random order
var sidebetID = 0; 
var sidebetIDcount = 0;

var sidebetArray = []; //this is going to be recreatd and expanded

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


