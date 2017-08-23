/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


/*
var i, j; //looping
var bankerfee=0;

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
 for(i=0; i<6; i++){
     for(j=0; j<2; j++){
      stored[i][j]=0;
      multiply[i][j]=0;
      console.log(stored[i][j]);   
     }
 }
 
 

 
 //pretend the dice rolls 3 wines
 var dice = [1,1,1];

//return money
for(i=0; i<3; i++){
    switch (dice[i]){
        case 0:
            returnMoney(i, 0);
        break;
        case 1:
            returnMoney(i, 1);
        break;
        case 2:
            returnMoney(i, 2);
        break;
        case 3:
            returnMoney(i, 3);
        break;
        case 4:
            returnMoney(i, 4);
        break;
        case 5:
            returnMoney(i, 5);
        break;
        default:
            
    }
}//end of for loop

function returnMoney(i, k){
    for(j =0; j<2; j++){
        multiply[k][j]++;
        
    }
    if(i==1){
    if(dice[i]!=dice[0]){
        allocateMoney(k);
    }}else if(i == 2){
    if((dice[i]!=dice[1])&&(dice[i]!=dice[0])){
        allocateMoney(k);
    }}else{
        allocateMoney(k);
            
        
    }
       
}

function allocateMoney(k){
    for(j=0; j < 2; j++){
        //add money
        $scope.node1 += stored[k][j];
        bankerfee += stored[k][j];
    }for(i=0;i<2;i++){
        $scope.node1 += (store[0][i] * multiply[0][i]) + (store[1][i] * multiply[1][i]) + (store[2][i] * multiply[2][i]) + (store[3][i] * multiply[3][i])
					+ (store[4][i] * multiply[4][i]) + (store[5][i] * multiply[5][i]);
    }
   
}
*/

var app = angular.module('playerStatus', []);
app.controller('myCtrl', function ($scope) {

    $scope.bet;
    $scope.chosenanimal;
    $scope.turn = 0;
    $scope.amountofplayers = 0;
    $scope.i = 0; //increments for 'for' loops
    $scope.textfeed;


    // Person object constructer
    function Person(name, money) {
        this.name = name;
        this.money = money;
        this.changeMoney = function () {
            this.money;
            this.name;
        };
    }

    // player data
    var node1 = new Person("Wing", 5);
    //object variables
    $scope.name = node1.name;
    $scope.money = node1.money;
    $scope.amountofplayers++;

    $scope.promptuser = function () {
        var x, text;
        x = document.getElementById("betposition").value;

        if (isNaN(x) || x < 0 || x > 5) {
            text = "Error";
        } else {
            text = "Choice: ";
        }
        $scope.chosenanimal = (text + x);
    };
    //copy and pasted code, will attend to later
    $scope.promptuser2 = function () {
        var x, text;
        x = document.getElementById("betamount").value;

        if (isNaN(x) || x < 0 || x > $scope.money) {
            text = "Error";
        } else {
            text = "Choice: ";
            $scope.money -= x;
        }
        $scope.bet = (text + x);
    };


});//end of controller







