/**
 * Created by Administrator on 2/11/2015.
 */

var app = angular.module('myApp', ['firebase']);

app.controller('MainController', function($scope, $firebase) {


    var ref = new Firebase("https://angularprojectpos.firebaseio.com");
    // create an AngularFire reference to the data
    var sync = $firebase(ref);
    // download the data into a local object


    $scope.myGamesList = sync.$asArray();

    $scope.addGame=function(){
        $scope.myGamesList.$add($scope.newGame);

        $scope.newGame={};
    };




    $scope.nameSize = function(nameLength) {

        if (nameLength < 18) {
            return '18px';
        }
        else if (nameLength >= 18 && nameLength <= 20) {
            return '16px';
        }
        else if (nameLength >= 21 && nameLength <= 25) {
            return '14.5px';
        }
        else if (nameLength > 25 && nameLength <= 32) {
            return '13px';
        }
        else { //nameLength >32
            return '9px';
        }
    };

    $scope.salesNameSize = function(nameLength) {

        if (nameLength < 9) {
            return '18px';
        }
        else if (nameLength >= 9 && nameLength <= 13) {
            return '17px';
        }
        else if (nameLength >= 14 && nameLength <= 16) {
            return '16px';
        }
        else if (nameLength >= 17 && nameLength <= 18) {
            return '14.5px';
        }
        else if (nameLength >= 19 && nameLength <= 23) {
            return '12.5px';
        }
        else if (nameLength >= 24 && nameLength <= 38) {
            return '10px';
        }
        else { //nameLength >32
            return '8px';
        }
    };



    $scope.catSearch = function(category) {
        if (category || category != '') {
            return true;
        }
        return false;
    };


    $scope.random = function(){
        return 0.5 - Math.random();
    }


});




app.filter('removeSubName', function(){
    //Need at least one parameter
    return function(gameName){

        //Everything after is just logic for the filter

        var shortenedName= gameName.substr(0, gameName.indexOf(':'));

        //It needs to return something
        if (gameName.indexOf(':') == -1){
            return gameName;
        }
        else{
            return shortenedName;
        }
    }
});



app.filter('priceStringToFloat', function(){
    //Need at least one parameter
    return function(gamePrice){

        //Everything after is just logic for the filter

        var intStr = gamePrice.substr(1, gamePrice.length);

        return parseFloat(intStr);
    }
});



$(document).ready(function() {

    $("#featuredGamesDiv").show();
    $("#salesGames").show();
    $("#gameTiles").hide();
    $("#individualGame").hide();


    $("#TopNav").click(function() {
        $("#CategoryName").text(function () {
            return "Featured Games"
        });
        $("#featuredGamesDiv").show();
        $("#salesGames").show();
        $("#gameTiles").hide();
        $("#individualGame").hide();


    });

    $("#GameGenresSideNav").click(function() {
        $("#CategoryName").text(function () {
            return "All Games"
        });
        $("#featuredGamesDiv").hide();
        $("#salesGames").hide();
        $("#gameTiles").show();
        $("#individualGame").hide();
    });

    $("#MOBACategorySideNav").click(function() {
        $("#CategoryName").text(function () {
            return "MOBA Games"
        });
        $("#featuredGamesDiv").hide();
        $("#salesGames").hide();
        $("#gameTiles").show();
        $("#individualGame").hide();
    });

    $("#StrategyCategorySideNav").click(function() {
        $("#CategoryName").text(function () {
            return "Strategy Games"
        });
        $("#featuredGamesDiv").hide();
        $("#salesGames").hide();
        $("#gameTiles").show();
        $("#individualGame").hide();
    });

    $("#MMORPGCategorySideNav").click(function() {
        $("#CategoryName").text(function () {
            return "MMORPG Games"
        });
        $("#featuredGamesDiv").hide();
        $("#salesGames").hide();
        $("#gameTiles").show();
        $("#individualGame").hide();
    });

    $("#RPGCategorySideNav").click(function() {
        $("#CategoryName").text(function () {
            return "RPG Games"
        });
        $("#featuredGamesDiv").hide();
        $("#salesGames").hide();
        $("#gameTiles").show();
        $("#individualGame").hide();
    });

    $("#Action_AdventureCategorySideNav").click(function() {
        $("#CategoryName").text(function () {
            return "Action & Adventure Games"
        });
        $("#featuredGamesDiv").hide();
        $("#salesGames").hide();
        $("#gameTiles").show();
        $("#individualGame").hide();
    });

    $("#ShooterCategorySideNav").click(function() {
        $("#CategoryName").text(function () {
            return "Shooter Games"
        });
        $("#featuredGamesDiv").hide();
        $("#salesGames").hide();
        $("#gameTiles").show();
        $("#individualGame").hide();
    });

    $("#IndieCategorySideNav").click(function() {
        $("#CategoryName").text(function () {
            return "Indie Games"
        });
        $("#featuredGamesDiv").hide();
        $("#salesGames").hide();
        $("#gameTiles").show();
        $("#individualGame").hide();
    });

    $("#Sports_RacingCategorySideNav").click(function() {
        $("#CategoryName").text(function () {
            return "Sports & Racing Games"
        });
        $("#featuredGamesDiv").hide();
        $("#salesGames").hide();
        $("#gameTiles").show();
        $("#individualGame").hide();
    });

    $("#SimulationCategorySideNav").click(function() {
        $("#CategoryName").text(function () {
            return "Simulation Games"
        });
        $("#featuredGamesDiv").hide();
        $("#salesGames").hide();
        $("#gameTiles").show();
        $("#individualGame").hide();
    });

    /*$("#LoLSideNav").click(function(){
        $("#CategoryName").text(function () {
            return "League of Legends"
        });
        $("#featuredGamesDiv").hide();
        $("#salesGames").hide();
        $("#gameTiles").hide();
        $("#individualGame").show();

        $("#individualGameHeaderImage").html("<img src="{{myGamesList[0].banner}}">");
        $(".GameName").text(function () {
            return {{myGamesList[0].name}};
        });
        $("#GameCategory").text(function () {
            return Dota2.category;
        });
        $("#GameCompany").text(function () {
            return Dota2.company;
        });
        $("#GameMax_Local_Players").text(function () {
            return Dota2.max_local_players;
        });
        $("#GameCoOp").text(function () {
            return Dota2.coOp;
        });
        $("#GameOnline").text(function () {
            return Dota2.online;
        });
        $(".GamePrice").text(function () {
            return "$" + Dota2.price;
        });
        $("#GameF2P").text(function () {
            return Dota2.free_to_play;    //CHANGE TO NO SUBSCRIPTION OR SUBSCRIPTION PRICE
        });
        $("#GamePlatform").text(function () {
            return Dota2.platform;
        });
        $("#GameDescription").text(function () {
            return Dota2.description;
        });
    })*/





});
