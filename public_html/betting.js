

app.controller('myCtrl', function ($scope) {

    //scope variables 
    $scope.name = node[turn].name;
    $scope.money = node[turn].money;

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
            //sidebetAvailableplayers();
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
    



});//end of controller
