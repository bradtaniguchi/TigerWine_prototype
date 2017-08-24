
var app = angular.module('playerStatus', []);
app.controller('myCtrl', function ($scope) {

    $scope.bet;
    $scope.chosenanimal;
    var amountofplayers = 0;
    
    var node = [0, 1, 2];
    var firstprompt = 0; // makes sure animal is chosen first

    // Person object constructer
    function Person(name, money) {
        this.name = name;
        this.money = money;
    }

    // player data
    node[0] = new Person("Wing", 5);
    node[1] = new Person("Eric", 4);
    node[2] = new Person("Banker", 0); //easy to calculate and keep track
    //for loops won't go up to the banker

    //scope variables 
    $scope.name = node[turn].name;
    $scope.money = node[turn].money;
    amountofplayers++; //Wing
    amountofplayers++; //Eric

    $scope.promptuser = function () {
        var x, text;
        x = document.getElementById("betposition").value;
        animalposition = parseInt(x);
        console.log("The typeof animalposition is: " + typeof animalposition);
        if (isNaN(x) || x < 0 || x > 5 || x === "") {
            text = "Error";
        } else {
            text = "Choice: ";
            firstprompt = 1;
        }
        $scope.chosenanimal = (text + x);
    };
    //copy and pasted code, will attend to later
    $scope.promptuser2 = function () {
        var x, text;
        x = document.getElementById("betamount").value;

        if (isNaN(x) || x < 0 || x > $scope.money || x === "" || firstprompt === 0) {
            text = "Error";
        } else {
            text = "Choice: ";
            stored[animalposition][turn] += parseInt(x);
            $scope.money -= x;
            node[turn].money = $scope.money;
            firstprompt = 0;
            if ($scope.money === 0 && $scope.name !== "Banker") {
                turn++;
                $scope.name = node[turn].name;
                $scope.money = node[turn].money;
            }
            if ($scope.name === "Banker") {
                rollDice();
                var f;
                for (f = 0; f < 2; f++) {
                    node[f].money += (stored[0][f] * multiply[0][f]) + (stored[1][f] * multiply[1][f]) + (stored[2][f] * multiply[2][f]) + (stored[3][f] * multiply[3][f])
                            + (stored[4][f] * multiply[4][f]) + (stored[5][f] * multiply[5][f]);
                    console.log("node[f] has : " + node[f].money);
                }
            }
        }
        $scope.bet = (text + x);

    }; //end of prompt2
    var dice = [5, 5, 5]; //dice could roll in the beginning of the game hehe
    var rollDice = function () {

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
    
});//end of controller
