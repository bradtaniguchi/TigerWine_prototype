
angular.module()
.factory('DiceService', function() {
  // reference the functions as an object(the DiceService object) and return it
  // So we can use this object, and its functions, elsewhere in the project
  return {
    rollDice: rollDice,
    returnMoney: returnMoney,
    allocateMoney: allocateMoney,
    sideBettingfinale: sideBettingfinale
  };
  /**
   * Roles the dice
   */
  function rollDice() {
    var i;
    for(i=0; i < 3; i++) {
      returnMoney(i, dice[1]);
    }
    sideBettingFinale();
  }
  /**
   * Returns the money to the given user node
   */
  function returnMoney(n, k) {
    var j;
    console.log("entered returnMoney function");
    for (j = 0; j < 2; j++) {
        multiply[k][j]++;

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
  }
  /**
   * Put money in places(?)
   */
  function allocateMoney(k) {
    var z;
    for (z = 0; z < 2; z++) {
        //add money
        console.log("stored[kz] has value: " + stored[k][z]);
        node[z].money += stored[k][z];
    }
  }
  /**
   * Calculate sidebet(?)
   */
  function sideBettingfinale() {
    var count = 0, r, temp, temp2;

    while (count < sidebetIDcount) {
        for (i = 0, r = 0; i < 3; i++) {
            temp = sidebetArray[count].better;
            temp2 = sidebetArray[count].cutter;

            console.log("sidebetIDcount is " + sidebetIDcount);
            console.log("sidebetArray[c].pos: " + sidebetArray[count].position);
            console.log("dice[i]: " + dice[i]);
            console.log("node[sbA[c].better] " + node[temp].money);
            console.log("node[sbA[c].cutter] " + node[temp2].money);
            console.log("sidebetArray[c].ext: " + sidebetArray[count].amount);


            if (sidebetArray[count].position == dice[i]) {
                node[temp].money += sidebetArray[count].amount;
                node[temp2].money -= sidebetArray[count].amount;
                r++;
                if (r === 1) {
                    node[temp].money += sidebetArray[count].amount;
                    node[sidebetArray[count].cutter].money -= sidebetArray[count].amount;
                }
            }
        }
        count++;
    }

}
;

});



