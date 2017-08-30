
app.controller('myCtrl', function ($scope) {

    //scope variables 
    $scope.name = node[turn].name;
    $scope.money = node[turn].money;

    //where the user wants to bet
    $scope.promptuser = function () {

        $scope.chosenanimal = parseInt($scope.chosenanimal);

        if (isNaN($scope.chosenanimal) || $scope.chosenanimal < 0 || $scope.chosenanimal > 5 || $scope.chosenanimal === "") {
            $scope.chosenanimal = "Error";
        } else {
            firstprompt = 1;
        }
    };

    //copy and pasted code, will attend to later
    $scope.promptuser2 = function () {

        $scope.bet = parseInt($scope.bet);

        if (isNaN($scope.bet) || $scope.bet < 0 || $scope.bet > $scope.money || $scope.bet === "" || firstprompt === 0) {
            $scope.bet = "Error";
        } else {

            stored[$scope.chosenanimal][turn] += $scope.bet;
            $scope.money -= $scope.bet;
            node[turn].money = $scope.money;
            sidebetAvailableplayers();
            firstprompt = 0;
            $scope.bet = ""; //clear input fields
            $scope.chosenanimal = ""; //clear input fields
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
                    console.log("node[" + f + "] has : " + node[f].money);
                }
            }
        }


    }; //end of prompt2

    function sidebetAvailableplayers() {
        availplayers = "";
        var c, d; // for the loops below

        for (c = 0; c < 6; c++) {
            for (d = 0; d < 2; d++) {
                if (stored[c][d] > 0) {

                    if (availplayers.includes(node[d].name)) {


                    } else {
                        availplayers += (node[d].name + " ");

                    }

                }
            }
        }
        $scope.availableperson = availplayers;

    }

    $scope.chooseplayer = function () {

        var j;
        $scope.availableposition = "";

        if (availplayers !== "") {

            if (availplayers.includes($scope.choice)) {
                for (i = 0; i < 2; i++) {
                    if ($scope.choice === node[i].name) {
                        availplayerindex = node[i].id;
                        chosenplayer = availplayerindex; //used as a flag
                    }
                }  // use id of player

                availplayerindex = availplayerindex + " " + $scope.choice;
                $scope.choice = availplayerindex;
                //since proper player was chosen display which positions are available
                for (i = 0; i < 6; i++) {
                    for (j = 0; j < amountofplayers; j++) {
                        if (stored[i][j] > 0) {
                            $scope.availableposition += " " + i;
                            //will show the available positions for the chosen person
                        }
                    }
                }

            } else {
                chosenplayer = null; //used as a flag
                $scope.choice = "Error ";
            }



        }
    };

    //make sure that the position was offered from above to proceed
    $scope.chooseposition = function () {



        
        console.log("positionchoice: " + $scope.choice2 + " and listthepositions is: " + $scope.availableposition);
        if ($scope.availableposition.includes($scope.choice2))//the includes may not work for a large list of persons
        {
            validposchoice = $scope.choice2; //will be used as a flag


        } else {
            validposchoice = -1; //will used as a flag
            $scope.choice2 = "Error ";
        }



    };

    $scope.promptuser3 = function () {

        if (validposchoice !== -1 && chosenplayer !== null) {


            extractedamount = parseInt($scope.choice3);
            console.log("vpc: " + validposchoice + " cp: " + chosenplayer);
            console.log("stored[vpc][cp] = " + stored[validposchoice][chosenplayer]);
            if (isNaN($scope.choice3) || $scope.choice3 < 0 || $scope.choice3 > stored[validposchoice][chosenplayer] || $scope.choice3 === "") {
                extractedflag = 0;
                $scope.choice3 = "Error too high";
            } else {
                extractedflag = 1;
                //substract extracted amount
                stored[validposchoice][chosenplayer] -= extractedamount;
                $scope.choice3 = "Extracted: " + extractedamount;
                //create sidebetobject to keep track of dues
                console.log(sidebetIDcount + " " + node[turn].id + " " + chosenplayer + " " + " " + validposchoice + " " + extractedamount)
                sidebetArray[sidebetIDcount] = new SideBetMachine(sidebetIDcount, node[turn].id, chosenplayer, validposchoice, extractedamount);
                sidebetIDcount++;
            }

        }//end of if statement
    };

    $scope.promptuser4 = function () {

        if (extractedflag === 1) {

            sidebetdeposit = parseInt($scope.choice4);

            if (isNaN($scope.choice4) || $scope.choice4 < 0 || $scope.choice4 > 5 || $scope.choice4 === "") {
                $scope.choice4 = "Error";
            } else {
                $scope.choice4 = "Choice: " + sidebetdeposit;
                stored[sidebetdeposit][turn] = extractedamount;
                //false all flags
                extractedflag = 0;
                validposchoice = -1;
                chosenplayer = null;
                $scope.availablepostions = "";
                $scope.choice2 = "";
                $scope.choice3 = "";
                $scope.choice = "";
                $scope.availableposition = "";
                $scope.choice4 = "";
            }

        }

    };

});//end of controller
