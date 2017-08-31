// calculates after the dice has been ruled
var rollDice = function () {
    var m;
//return money according to the winning dice states
    for (m = 0; m < 3; m++) {
        console.log("the dice is : " + dice[m]);
        if (dice[m] === 0) {
            returnMoney(m, 0);
        } else if (dice[m] === 1) {
            returnMoney(m, 1);
        } else if (dice[m] === 2) {
            returnMoney(m, 2);
        } else if (dice[m] === 3) {
            returnMoney(m, 3);
        } else if (dice[m] === 4) {
            returnMoney(m, 4);
        } else if (dice[m] === 5) {
            returnMoney(m, 5);
        } else {
        }

    }//end of for loop

    //this will loop through all the sidebetting objects
    sideBettingfinale();

}; // end of rollDice function

function returnMoney(n, k) {
    var j;
    console.log("entered returnMoney function");
    //this for loop will track how much credits should be returned to the user including double or triple wins
    for (j = 0; j < 2; j++) {
        multiply[k][j]++;
    }
    //the dice are bound to fall into an if statement. something will happen or nothing will happen according to the "if"
    //if the second dice doesn't equal the first dice return the money the winning better betted
    if (n === 1) {
        if (dice[n] !== dice[0]) {
            allocateMoney(k);
        }
        // if the third dice doesn't equal the previous two dice then return the money the winning better betted
    } else if (n === 2) {
        if ((dice[n] !== dice[1]) && (dice[n] !== dice[0])) {
            allocateMoney(k);
        }
        //it must be the first dice
    } else {
        allocateMoney(k);

        console.log("*entered the else returMoney");
    }
} // returnedMoney function ended

//return the money the winning better betted
function allocateMoney(k) {
    var z;
    for (z = 0; z < 2; z++) {

        node[z].money += stored[k][z];
        bankerfee += stored[k][z]; // if we were to limit how much the banker would lose in a game then we would use the 'bankerfee' variable
        console.log("the banker will pay : " + bankerfee);
        console.log("stored[kz] has value: " + stored[k][z]);
    }
}

function sideBettingfinale() {
    var count = 0; // sidebet information is stored as an object; we check each object if a person owes anyone anything after sidebetting
    var r; // side better has to give back what was burrowed

    while (count < sidebetIDcount) {
        for (i = 0, r = 0; i < 3; i++) {

            //test to see if the variables store the correct value in the console
            console.log("sidebetIDcount is " + sidebetIDcount);
            console.log("sidebetArray[c].pos: " + sidebetArray[count].position);
            console.log("dice[i]: " + dice[i]);
            console.log("node[sbA[c].better] " + node[sidebetArray[count].better].money);
            console.log("node[sbA[c].cutter] " + node[sidebetArray[count].cutter].money);
            console.log("sidebetArray[c].ext: " + sidebetArray[count].amount);
            //


            if (sidebetArray[count].position == dice[i]) {
                node[sidebetArray[count].better].money += sidebetArray[count].amount;
                node[sidebetArray[count].cutter].money -= sidebetArray[count].amount;
                r++;
                if (r === 1) {
                    node[sidebetArray[count].better].money += sidebetArray[count].amount;
                    node[sidebetArray[count].cutter].money -= sidebetArray[count].amount;
                }
            }
        }
        count++;
    }

}
;

