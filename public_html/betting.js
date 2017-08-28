
app.controller('myCtrl', function ($scope) {

    //scope variables 
    $scope.name = node[turn].name;
    $scope.money = node[turn].money;

    $scope.promptuser = function () {
        var x, text;
        x = document.getElementById("betposition").value;
        animalposition = parseInt(x);

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
            sidebetAvailableplayers();
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

    function sidebetAvailableplayers() {
        availplayers = "";
        var c, d;
        console.log("availplayers " + availplayers);

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

        var x, text, j;
        x = document.getElementById("personchoice").value;

        if (availplayers !== "") {

            if (availplayers.includes(x)) {
                for (i = 0; i < 2; i++) {
                    if (x === node[i].name) {
                        availplayercount = node[i].id;
                        chosenplayer = availplayercount; //used as a flag
                    }
                }  // use id of player

                availplayercount = availplayercount + " " + x;
                text = availplayercount;
                //since proper player was chosen display which positions are available
                for (i = 0; i < 6; i++) {
                    for (j = 0; j < amountofplayers; j++) {
                        if (stored[i][j] > 0) {
                            listthepositions += " " + i;
                        }
                    }
                }

            } else {
                chosenplayer = null; //used as a flag
                text = "Error ";
            }

            $scope.choice = text;
            $scope.availableposition = listthepositions; //will show the available positions for the chosen person
        }
    };

    //make sure that the position was offered from above to proceed
    $scope.chooseposition = function () {

        var x, text;
        x = document.getElementById("positionchoice").value
        console.log("choosepositionentered");
        console.log("positionchoice: " + x + " and listthepositions is: " + listthepositions);
        if (listthepositions.includes(x))//the includes may not work for a large list of persons
        {
            validposchoice = x; //will be used as a flag
            text = x;

        } else {
            validposchoice = -1; //will used as a flag
            text = "Error ";
        }

        $scope.choice2 = text;

    };

    $scope.promptuser3 = function () {
        var x, text;
        if (validposchoice !== -1 && chosenplayer !== null) {
            x = document.getElementById("sidebetamount").value;

            extractedamount = parseInt(x);
            console.log("vpc: " + validposchoice + " cp: " + chosenplayer);
            console.log("stored[vpc][cp] = " + stored[validposchoice][chosenplayer]);
            if (isNaN(x) || x < 0 || x > stored[validposchoice][chosenplayer] || x === "") {
                extractedflag = 0;
                text = "Error too high";
            } else {
                extractedflag = 1;
                //substract extracted amount
                stored[validposchoice][chosenplayer] -= extractedamount;
                text = "Extracted: " + extractedamount;
                //create sidebetobject to keep track of dues
                console.log(sidebetIDcount + " " + node[turn].id + " " + chosenplayer + " " + " " + validposchoice + " " + extractedamount)
                sidebetArray[sidebetIDcount] = new SideBetMachine(sidebetIDcount, node[turn].id, chosenplayer, validposchoice, extractedamount);
                sidebetIDcount++;
            }
            $scope.choice3 = text;
        }//end of if statement
    };

    $scope.promptuser4 = function () {
        var x, text;

        if (extractedflag === 1) {
            x = document.getElementById("sidebetplace").value;

            sidebetdeposit = parseInt(x);

            if (isNaN(x) || x < 0 || x > 5 || x === "") {
                text = "Error";
            } else {
                text = "Choice: " + sidebetdeposit;
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
            }

        }

    };

});//end of controller
