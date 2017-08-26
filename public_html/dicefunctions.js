
var rollDice = function () {
    var m;
//return money
    for (m = 0; m < 3; m++) {
        console.log("the dice is : " + dice[m]);
        switch (dice[1]) {
            case 0:
                returnMoney(m, 0);
                break;
            case 1:
                returnMoney(m, 1);
                break;
            case 2:
                returnMoney(m, 2);
                break;
            case 3:
                returnMoney(m, 3);
                break;
            case 4:
                returnMoney(m, 4);
                break;
            case 5:
                returnMoney(m, 5);
                break;
            default:

        }

    }//end of for loop
}; // end of rollDice function

function returnMoney(n, k) {
    var j;
    console.log("entered returnMoney function");
    for (j = 0; j < 2; j++) {
        multiply[k][j]++;
        console.log("multiply array is type: " + typeof multiply[k][j] + multiply[k][j]);
    }
    if (n === 1) {
        if (dice[n] !== dice[0]) {
            allocateMoney(k);
        }
    } else if (n === 2) {
        if ((dice[n] !== dice[1]) && (dice[n] !== dice[0])) {
            allocateMoney(k);
        }
    } else {
        allocateMoney(k);

        console.log("*entered the else returMoney");
    }

} // returnedMoney function ended

function allocateMoney(k) {
    var z;
    for (z = 0; z < 2; z++) {
        //add money
        console.log("stored[kz] has value: " + stored[k][z]);
        node[z].money += stored[k][z];
        bankerfee += stored[k][z];
        console.log("the banker will pay : " + bankerfee);
    }
}


