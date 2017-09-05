

angular.module('playerStatus')
.controller('myCtrl', function($scope) {
  var i; // looping using same variables is iffy
  var turn = 0; // the real game will recieve input from random order
  var firstprompt = 0; // makes sure animal is chosen first
  var players = []; // array of players
  var chosenplayer = 0;
  var validposchoice = -1;
  var extractedamount;


  // sidebet prototype
  var sidebetIDcount = 0;
  var sidebetArray = new Array(5); // this is going to be recreatd and expanded
  // scope variables 
  $scope.name = node[turn].name;
  $scope.money = node[turn].money;
  $scope.currentBet = 0; // the amount the user is currently betting
  $scope.chosenAnimal = ''; // the animal the player has chosen for their roll
  $scope.availablePosition = '';

  /**
   * Callback when the user hits the bet button.
   */
  $scope.bet = function() {
    if ($scope.chosenAnimal && $scope.currentBet) {
      // handle the bet logic here
      stored[$scope.chosenAnimal][turn] += $scope.currentBet;
      $scope.money -= $scope.$scope.currentBet;
      sidebetAvailableplayers();

      // clear first input fields
      $scope.currentBet = 0;
      $scope.chosenAnimal = undefined;

      // check if the user is the banker
      if ($scope.money === 0 && $scope.name !== 'Banker') {
        turn++;
        $scope.name = node[turn].name;
        $scope.money = node[turn].money;
      }
      if ($scope.name === 'Banker') {
        // rollDice(); not used correctly at the moment
        var f;
        for (f = 0; f < 2; f++) {
          for (i = 0; i < 6; i++) {
            node[f].money += (stored[i][f] * multiply[i][f]);
          }
          console.log('node[' + f + '] has : ' + node[f].money);
        }
      }

    } else {
      console.error('Error: User did not enter chosenAnimal, or bet');
      // display a legit error message here, or do nothing
    }
  };
  /**
   * Utility function that returns if the user can bet the given amount.
   * @param {number} usersMoney - the amount of money the current user has
   * @param {number} bet - the amount the user wants to bet
   */
  $scope.canBet = function(usersMoney, bet) {
    return usersMoney > bet;
  };

  function sidebetAvailableplayers() {
    availplayers = '';
    var c, d; // for the loops below

    for (c = 0; c < 6; c++) {
      for (d = 0; d < 2; d++) {
        if (stored[c][d] > 0) {
          if (availplayers.includes(node[d].name)) {


          } else {
            availplayers += (node[d].name + ' ');
          }
        }
      }
    }
    $scope.availableperson = availplayers;
  }
  $scope.chooseBetter = function() {
    var j;
    if (availplayers !== '') {
      // you shouldn't use includes, as it isn't supported AT ALL in Internet explorer
      // instead we will use indexOf, and check to make sure it is in the array
      // this gets the same results as the includes function
      // if (availplayers.includes($scope.choice)) {
      if (availplayers.indexOf($scope.choice) !== -1) {
        // I replaced the for loop with a forEach loop, which is cleaner
        node.forEach(function(player) {
          if ($scope.choice === player.name) {

          }
        });
      }
    }

  };

  $scope.chooseplayer = function() {
      let j;
      let availplayerindex = -1;
      $scope.availableposition = '';

      if (availplayers !== '') {
          if (availplayers.includes($scope.choice)) {
              for (i = 0; i < 2; i++) {
                  if ($scope.choice === node[i].name) {
                      availplayerindex = node[i].id;
                      chosenplayer = availplayerindex; // used as a flag
                  }
              } // use id of player

              availplayerindex = availplayerindex + ' ' + $scope.choice;
              $scope.choice = availplayerindex;
              // since proper player was chosen display which positions are available
              for (i = 0; i < 6; i++) {
                  for (j = 0; j < amountofplayers; j++) {
                      if (stored[i][j] > 0) {
                          $scope.availableposition += ' ' + i;
                          // will show the available positions for the chosen person
                      }
                  }
              }
          } else {
              chosenplayer = null; // used as a flag
              $scope.choice = 'Error ';
          }
      }
  };

  // make sure that the position was offered from above to proceed
  $scope.chooseposition = function() {
      console.log('positionchoice: ' + $scope.choice2 + ' and listthepositions is: ' + $scope.availableposition);
      if ($scope.availableposition.includes($scope.choice2))// the includes may not work for a large list of persons
      {
          validposchoice = $scope.choice2; // will be used as a flag
      } else {
          validposchoice = -1; // will used as a flag
          $scope.choice2 = 'Error ';
      }
  };

  $scope.promptuser3 = function() {
      if (validposchoice !== -1 && chosenplayer !== null) {
          extractedamount = parseInt($scope.choice3);
          console.log('vpc: ' + validposchoice + ' cp: ' + chosenplayer);
          console.log('stored[vpc][cp] = ' + stored[validposchoice][chosenplayer]);
          if (isNaN($scope.choice3) || $scope.choice3 < 0 || $scope.choice3 > stored[validposchoice][chosenplayer] || $scope.choice3 === '') {
              extractedflag = 0;
              $scope.choice3 = 'Error too high';
          } else {
              extractedflag = 1;
              // substract extracted amount
              stored[validposchoice][chosenplayer] -= extractedamount;
              $scope.choice3 = 'Extracted: ' + extractedamount;
              // create sidebetobject to keep track of dues
              console.log(sidebetIDcount + ' ' + node[turn].id + ' ' + chosenplayer + ' ' + ' ' + validposchoice + ' ' + extractedamount);
              sidebetArray[sidebetIDcount] = new SideBetMachine(sidebetIDcount, node[turn].id, chosenplayer, validposchoice, extractedamount);
              sidebetIDcount++;
          }
      }// end of if statement
  };

  $scope.promptuser4 = function() {
      if (extractedflag === 1) {
          sidebetdeposit = parseInt($scope.choice4);

          if (isNaN($scope.choice4) || $scope.choice4 < 0 || $scope.choice4 > 5 || $scope.choice4 === '') {
              $scope.choice4 = 'Error';
          } else {
              $scope.choice4 = 'Choice: ' + sidebetdeposit;
              stored[sidebetdeposit][turn] = extractedamount;
              // false all flags
              extractedflag = 0;
              validposchoice = -1;
              chosenplayer = null;
              $scope.availablepostions = '';
              $scope.choice2 = '';
              $scope.choice3 = '';
              $scope.choice = '';
              $scope.availableposition = '';
              $scope.choice4 = '';
          }
      }
  };
});// end of controller
