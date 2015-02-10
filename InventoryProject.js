/**
 * Created by Marek on 1/30/2015.
 */




$(document).ready(function() {

    $("#StrategyCategorySideNav").click(function(e) {
        e.preventDefault();
        $("#CategoryName").text(function () {
            return "Strategy Games"
        });
        for(var i = 0; i < Strategy_Games.length; i++){
            $("#categoryGame" + i + "Image").html("<img src=" + Strategy_Games[i].thumbnail + ">");
            $("#categoryGame" + i + "Price").text(function (){
                return("$" + Strategy_Games[i].price);
            });
            $("#categoryGame" + i + "Name").text(function (){
                return(Strategy_Games[i].name);
            });
            var nameLength = $("#categoryGame" + i + "Name").text().length;
            if (nameLength < 18) {
                $("#categoryGame" + i + "Name").css('font-size', '18px');
            }
            else if(nameLength >=18 &&nameLength <= 25) {
                $("#categoryGame" + i + "Name").css('font-size', '14.5px');
            }

            else if (nameLength > 25 &&nameLength <=32) {
                $("#categoryGame" + i + "Name").css('font-size', '13px');
            }
            else { //nameLength >32
                $("#categoryGame" + i + "Name").css('font-size', '9px');
            }

            $("#categoryGame" + i + "Description").text(function (){
                var descriptionLength = Strategy_Games[i].description.length;
                if (descriptionLength < 125) {
                    return(Strategy_Games[i].description);
                }
                else if (descriptionLength >= 125) {
                    $("#categoryGame" + i + "Description").text(function(){
                        return (Strategy_Games[i].description).substr(0, 125) + "..."
                    });
                }
            });

        }

        for (var k = 0; k < Strategy_Games.length; k++){
            $("#categoryGame" + k).show();
        }

        for (var j = Strategy_Games.length; j < 6; j++){
            $("#categoryGame" + j).hide();
        }
    });

    $("#MMORPGCategorySideNav").click(function(e) {
        e.preventDefault();
        $("#CategoryName").text(function () {
            return "MMORPG Games"
        });
        for(var i = 0; i < MMORPG_Games.length; i++){
            $("#categoryGame" + i + "Image").html("<img src=" + MMORPG_Games[i].thumbnail + ">");
            $("#categoryGame" + i + "Price").text(function (){
                return("$" + MMORPG_Games[i].price);
            });
            $("#categoryGame" + i + "Name").text(function (){
                return(MMORPG_Games[i].name);
            });
            var nameLength = $("#categoryGame" + i + "Name").text().length;
            if (nameLength < 18) {
                $("#categoryGame" + i + "Name").css('font-size', '18px');
            }
            else if(nameLength >=18 &&nameLength <= 25) {
                $("#categoryGame" + i + "Name").css('font-size', '14.5px');
            }

            else if (nameLength > 25 &&nameLength <=32) {
                $("#categoryGame" + i + "Name").css('font-size', '13px');
            }
            else { //nameLength >32
                $("#categoryGame" + i + "Name").css('font-size', '9px');
            }

            $("#categoryGame" + i + "Description").text(function (){
                var descriptionLength = MMORPG_Games[i].description.length;
                if (descriptionLength < 125) {
                    return(MMORPG_Games[i].description);
                }
                else if (descriptionLength >= 125) {
                    $("#categoryGame" + i + "Description").text(function(){
                        return (MMORPG_Games[i].description).substr(0, 125) + "..."
                    });
                }
            });

        }

        for (var k = 0; k < MMORPG_Games.length; k++){
            $("#categoryGame" + k).show();
        }

        for (var j = MMORPG_Games.length; j < 6; j++){
            $("#categoryGame" + j).hide();
        }
    });

    $("#RPGCategorySideNav").click(function(e) {
        e.preventDefault();
        $("#CategoryName").text(function () {
            return "RPG Games"
        });
        for(var i = 0; i < RPG_Games.length; i++){
            $("#categoryGame" + i + "Image").html("<img src=" + RPG_Games[i].thumbnail + ">");
            $("#categoryGame" + i + "Price").text(function (){
                return("$" + RPG_Games[i].price);
            });
            $("#categoryGame" + i + "Name").text(function (){
                return(RPG_Games[i].name);
            });
            var nameLength = $("#categoryGame" + i + "Name").text().length;
            if (nameLength < 18) {
                $("#categoryGame" + i + "Name").css('font-size', '18px');
            }
            else if(nameLength >=18 &&nameLength <= 25) {
                $("#categoryGame" + i + "Name").css('font-size', '14.5px');
            }

            else if (nameLength > 25 &&nameLength <=32) {
                $("#categoryGame" + i + "Name").css('font-size', '13px');
            }
            else { //nameLength >32
                $("#categoryGame" + i + "Name").css('font-size', '9px');
            }

            $("#categoryGame" + i + "Description").text(function (){
                var descriptionLength = RPG_Games[i].description.length;
                if (descriptionLength < 125) {
                    return(RPG_Games[i].description);
                }
                else if (descriptionLength >= 125) {
                    $("#categoryGame" + i + "Description").text(function(){
                        return (RPG_Games[i].description).substr(0, 125) + "..."
                    });
                }
            });

        }

        for (var k = 0; k < RPG_Games.length; k++){
            $("#categoryGame" + k).show();
        }

        for (var j = RPG_Games.length; j < 6; j++){
            $("#categoryGame" + j).hide();
        }
    });

    $("#Action_AdventureCategorySideNav").click(function(e) {
        e.preventDefault();
        $("#CategoryName").text(function () {
            return "Action & Adventure Games"
        });
        for(var i = 0; i < Action_Adventure_Games.length; i++){
            $("#categoryGame" + i + "Image").html("<img src=" + Action_Adventure_Games[i].thumbnail + ">");
            $("#categoryGame" + i + "Price").text(function (){
                return("$" + Action_Adventure_Games[i].price);
            });
            $("#categoryGame" + i + "Name").text(function (){
                return(Action_Adventure_Games[i].name);
            });
            var nameLength = $("#categoryGame" + i + "Name").text().length;
            if (nameLength < 18) {
                $("#categoryGame" + i + "Name").css('font-size', '18px');
            }
            else if(nameLength >=18 &&nameLength <= 25) {
                $("#categoryGame" + i + "Name").css('font-size', '14.5px');
            }

            else if (nameLength > 25 &&nameLength <=32) {
                $("#categoryGame" + i + "Name").css('font-size', '13px');
            }
            else { //nameLength >32
                $("#categoryGame" + i + "Name").css('font-size', '9px');
            }

            $("#categoryGame" + i + "Description").text(function (){
                var descriptionLength = Action_Adventure_Games[i].description.length;
                if (descriptionLength < 125) {
                    return(Action_Adventure_Games[i].description);
                }
                else if (descriptionLength >= 125) {
                    $("#categoryGame" + i + "Description").text(function(){
                        return (Action_Adventure_Games[i].description).substr(0, 125) + "..."
                    });
                }
            });

        }

        for (var k = 0; k < Action_Adventure_Games.length; k++){
            $("#categoryGame" + k).show();
        }

        for (var j = Action_Adventure_Games.length; j < 6; j++){
            $("#categoryGame" + j).hide();
        }
    });

    $("#ShooterCategorySideNav").click(function(e) {
        e.preventDefault();
        $("#CategoryName").text(function () {
            return "Shooter Games"
        });
        for(var i = 0; i < Shooter_Games.length; i++){
            $("#categoryGame" + i + "Image").html("<img src=" + Shooter_Games[i].thumbnail + ">");
            $("#categoryGame" + i + "Price").text(function (){
                return("$" + Shooter_Games[i].price);
            });
            $("#categoryGame" + i + "Name").text(function (){
                return(Shooter_Games[i].name);
            });
            var nameLength = $("#categoryGame" + i + "Name").text().length;
            if (nameLength < 18) {
                $("#categoryGame" + i + "Name").css('font-size', '18px');
            }
            else if(nameLength >=18 &&nameLength <= 25) {
                $("#categoryGame" + i + "Name").css('font-size', '14.5px');
            }

            else if (nameLength > 25 &&nameLength <=32) {
                $("#categoryGame" + i + "Name").css('font-size', '13px');
            }
            else { //nameLength >32
                $("#categoryGame" + i + "Name").css('font-size', '9px');
            }

            $("#categoryGame" + i + "Description").text(function (){
                var descriptionLength = Shooter_Games[i].description.length;
                if (descriptionLength < 125) {
                    return(Shooter_Games[i].description);
                }
                else if (descriptionLength >= 125) {
                    $("#categoryGame" + i + "Description").text(function(){
                        return (Shooter_Games[i].description).substr(0, 125) + "..."
                    });
                }
            });

        }

        for (var k = 0; k < Shooter_Games.length; k++){
            $("#categoryGame" + k).show();
        }

        for (var j = Shooter_Games.length; j < 6; j++){
            $("#categoryGame" + j).hide();
        }
    });

    $("#IndieCategorySideNav").click(function(e) {
        e.preventDefault();
        $("#CategoryName").text(function () {
            return "Indie Games"
        });
        for(var i = 0; i < Indie_Games.length; i++){
            $("#categoryGame" + i + "Image").html("<img src=" + Indie_Games[i].thumbnail + ">");
            $("#categoryGame" + i + "Price").text(function (){
                return("$" + Indie_Games[i].price);
            });
            $("#categoryGame" + i + "Name").text(function (){
                return(Indie_Games[i].name);
            });
            var nameLength = $("#categoryGame" + i + "Name").text().length;
            if (nameLength < 18) {
                $("#categoryGame" + i + "Name").css('font-size', '18px');
            }
            else if(nameLength >=18 &&nameLength <= 25) {
                $("#categoryGame" + i + "Name").css('font-size', '14.5px');
            }

            else if (nameLength > 25 &&nameLength <=32) {
                $("#categoryGame" + i + "Name").css('font-size', '13px');
            }
            else { //nameLength >32
                $("#categoryGame" + i + "Name").css('font-size', '9px');
            }

            $("#categoryGame" + i + "Description").text(function (){
                var descriptionLength = Indie_Games[i].description.length;
                if (descriptionLength < 125) {
                    return(Indie_Games[i].description);
                }
                else if (descriptionLength >= 125) {
                    $("#categoryGame" + i + "Description").text(function(){
                        return (Indie_Games[i].description).substr(0, 125) + "..."
                    });
                }
            });

        }

        for (var k = 0; k < Indie_Games.length; k++){
            $("#categoryGame" + k).show();
        }

        for (var j = Indie_Games.length; j < 6; j++){
            $("#categoryGame" + j).hide();
        }
    });

    $("#Sports_RacingCategorySideNav").click(function(e) {
        e.preventDefault();
        $("#CategoryName").text(function () {
            return "Sports & Racing Games"
        });
        for(var i = 0; i < Sports_And_Racing_Games.length; i++){
            $("#categoryGame" + i + "Image").html("<img src=" + Sports_And_Racing_Games[i].thumbnail + ">");
            $("#categoryGame" + i + "Price").text(function (){
                return("$" + Sports_And_Racing_Games[i].price);
            });
            $("#categoryGame" + i + "Name").text(function (){
                return(Sports_And_Racing_Games[i].name);
            });
            var nameLength = $("#categoryGame" + i + "Name").text().length;
            if (nameLength < 18) {
                $("#categoryGame" + i + "Name").css('font-size', '18px');
            }
            else if(nameLength >=18 &&nameLength <= 25) {
                $("#categoryGame" + i + "Name").css('font-size', '14.5px');
            }

            else if (nameLength > 25 &&nameLength <=32) {
                $("#categoryGame" + i + "Name").css('font-size', '13px');
            }
            else { //nameLength >32
                $("#categoryGame" + i + "Name").css('font-size', '9px');
            }

            $("#categoryGame" + i + "Description").text(function (){
                var descriptionLength = Sports_And_Racing_Games[i].description.length;
                if (descriptionLength < 125) {
                    return(Sports_And_Racing_Games[i].description);
                }
                else if (descriptionLength >= 125) {
                    $("#categoryGame" + i + "Description").text(function(){
                        return (Sports_And_Racing_Games[i].description).substr(0, 125) + "..."
                    });
                }
            });

        }

        for (var k = 0; k < Sports_And_Racing_Games.length; k++){
            $("#categoryGame" + k).show();
        }

        for (var j = Sports_And_Racing_Games.length; j < 6; j++){
            $("#categoryGame" + j).hide();
        }
    });

    $("#SimulationCategorySideNav").click(function(e) {
        e.preventDefault();
        $("#CategoryName").text(function () {
            return "Simulation Games"
        });
        for(var i = 0; i < Simulation_Games.length; i++){
            $("#categoryGame" + i + "Image").html("<img src=" + Simulation_Games[i].thumbnail + ">");
            $("#categoryGame" + i + "Price").text(function (){
                return("$" + Simulation_Games[i].price);
            });
            $("#categoryGame" + i + "Name").text(function (){
                return(Simulation_Games[i].name);
            });
            var nameLength = $("#categoryGame" + i + "Name").text().length;
            if (nameLength < 18) {
                $("#categoryGame" + i + "Name").css('font-size', '18px');
            }
            else if(nameLength >=18 &&nameLength <= 25) {
                $("#categoryGame" + i + "Name").css('font-size', '14.5px');
            }

            else if (nameLength > 25 &&nameLength <=32) {
                $("#categoryGame" + i + "Name").css('font-size', '13px');
            }
            else { //nameLength >32
                $("#categoryGame" + i + "Name").css('font-size', '9px');
            }

            $("#categoryGame" + i + "Description").text(function (){
                var descriptionLength = Simulation_Games[i].description.length;
                if (descriptionLength < 125) {
                    return(Simulation_Games[i].description);
                }
                else if (descriptionLength >= 125) {
                    $("#categoryGame" + i + "Description").text(function(){
                        return (Simulation_Games[i].description).substr(0, 125) + "..."
                    });
                }
            });

        }

        for (var k = 0; k < Simulation_Games.length; k++){
            $("#categoryGame" + k).show();
        }

        for (var j = Simulation_Games.length; j < 6; j++){
            $("#categoryGame" + j).hide();
        }
    });








    $("#LoLSideNav").click(function () {     //NOT FUNCTIONING - temporarily acts as way to access all other games
        var container = document.querySelector('.container');

        container.ready().then(function () {
                alert("success");
                $("#individualGameHeaderImage").html("<img src=" + LoL.banner + ">");
                $(".GameName").text(function () {
                    return LoL.name;
                })

            },
            function () {
                alert("error");
            }
        );
    });





    $("#DOTA2SideNav").click(function (e) {
        e.preventDefault();
        $("#individualGameHeaderImage").html("<img src=" + Dota2.banner + ">");
        $(".GameName").text(function () {
            return Dota2.name;
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
    });


    /*$("#DOTA2ThumbNav").click(function (e) {
        e.preventDefault();
        $("#individualGameHeaderImage").html("<img src=" + Dota2.banner + ">");
        $(".GameName").text(function () {
            return Dota2.name;
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
    });*/





    $("#HoNSideNav").click(function (e) {
        e.preventDefault();
        $("#individualGameHeaderImage").html("<img src=" + HoN.banner + ">");
        $(".GameName").text(function () {
            return HoN.name;
        });
        $("#GameCategory").text(function () {
            return HoN.category;
        });
        $("#GameCompany").text(function () {
            return HoN.company;
        });
        $("#GameMax_Local_Players").text(function () {
            return HoN.max_local_players;
        });
        $("#GameCoOp").text(function () {
            return HoN.coOp;
        });
        $("#GameOnline").text(function () {
            return HoN.online;
        });
        $(".GamePrice").text(function () {
            return "$" + HoN.price;
        });
        $("#GameF2P").text(function () {
            return HoN.free_to_play;    //CHANGE TO NO SUBSCRIPTION OR SUBSCRIPTION PRICE
        });
        $("#GamePlatform").text(function () {
            return HoN.platform;
        });
        $("#GameDescription").text(function () {
            return HoN.description;
        });
    });

    $("#HotSSideNav").click(function (e) {
        e.preventDefault();
        $("#individualGameHeaderImage").html("<img src=" + HotS.banner + ">");
        $(".GameName").text(function () {
            return HotS.name;
        });
        $("#GameCategory").text(function () {
            return HotS.category;
        });
        $("#GameCompany").text(function () {
            return HotS.company;
        });
        $("#GameMax_Local_Players").text(function () {
            return HotS.max_local_players;
        });
        $("#GameCoOp").text(function () {
            return HotS.coOp;
        });
        $("#GameOnline").text(function () {
            return HotS.online;
        });
        $(".GamePrice").text(function () {
            return "$" + HotS.price;
        });
        $("#GameF2P").text(function () {
            return HotS.free_to_play;    //CHANGE TO NO SUBSCRIPTION OR SUBSCRIPTION PRICE
        });
        $("#GamePlatform").text(function () {
            return HotS.platform;
        });
        $("#GameDescription").text(function () {
            return HotS.description;
        });
    });


    $("#SCIISideNav").click(function(e) {
        e.preventDefault();
        $("#individualGameHeaderImage").html("<img src=" + starcraft.banner + ">");
        $(".GameName").text(function () {
            return starcraft.name;
        });
        $("#GameCategory").text(function () {
            return starcraft.category;
        });
        $("#GameCompany").text(function () {
            return starcraft.company;
        });
        $("#GameMax_Local_Players").text(function () {
            return starcraft.max_local_players;
        });
        $("#GameCoOp").text(function () {
            return starcraft.coOp;
        });
        $("#GameOnline").text(function () {
            return starcraft.online;
        });
        $(".GamePrice").text(function () {
            return "$" + starcraft.price;
        });
        $("#GameF2P").text(function () {
            return starcraft.free_to_play;    //CHANGE TO NO SUBSCRIPTION OR SUBSCRIPTION PRICE
        });
        $("#GamePlatform").text(function () {
            return starcraft.platform;
        });
        $("#GameDescription").text(function () {
            return starcraft.description;
        });
    });

    $("#WarcraftIIISideNav").click(function(e) {
        e.preventDefault();
        $("#individualGameHeaderImage").html("<img src=" + warcraft.banner + ">");
        $(".GameName").text(function () {
            return warcraft.name;
        });
        $("#GameCategory").text(function () {
            return warcraft.category;
        });
        $("#GameCompany").text(function () {
            return warcraft.company;
        });
        $("#GameMax_Local_Players").text(function () {
            return warcraft.max_local_players;
        });
        $("#GameCoOp").text(function () {
            return warcraft.coOp;
        });
        $("#GameOnline").text(function () {
            return warcraft.online;
        });
        $(".GamePrice").text(function () {
            return "$" + warcraft.price;
        });
        $("#GameF2P").text(function () {
            return warcraft.free_to_play;    //CHANGE TO NO SUBSCRIPTION OR SUBSCRIPTION PRICE
        });
        $("#GamePlatform").text(function () {
            return warcraft.platform;
        });
        $("#GameDescription").text(function () {
            return warcraft.description;
        });
    });

    $("#CnC4SideNav").click(function(e) {
        e.preventDefault();
        $("#individualGameHeaderImage").html("<img src=" + cnc.banner + ">");
        $(".GameName").text(function () {
            return cnc.name;
        });
        $("#GameCategory").text(function () {
            return cnc.category;
        });
        $("#GameCompany").text(function () {
            return cnc.company;
        });
        $("#GameMax_Local_Players").text(function () {
            return cnc.max_local_players;
        });
        $("#GameCoOp").text(function () {
            return cnc.coOp;
        });
        $("#GameOnline").text(function () {
            return cnc.online;
        });
        $(".GamePrice").text(function () {
            return "$" + cnc.price;
        });
        $("#GameF2P").text(function () {
            return cnc.free_to_play;    //CHANGE TO NO SUBSCRIPTION OR SUBSCRIPTION PRICE
        });
        $("#GamePlatform").text(function () {
            return cnc.platform;
        });
        $("#GameDescription").text(function () {
            return cnc.description;
        });
    });

    $("#WoWSideNav").click(function(e) {
        e.preventDefault();
        $("#individualGameHeaderImage").html("<img src=" + WoW.banner + ">");
        $(".GameName").text(function () {
            return WoW.name;
        });
        $("#GameCategory").text(function () {
            return WoW.category;
        });
        $("#GameCompany").text(function () {
            return WoW.company;
        });
        $("#GameMax_Local_Players").text(function () {
            return WoW.max_local_players;
        });
        $("#GameCoOp").text(function () {
            return WoW.coOp;
        });
        $("#GameOnline").text(function () {
            return WoW.online;
        });
        $(".GamePrice").text(function () {
            return "$" + WoW.price;
        });
        $("#GameF2P").text(function () {
            return WoW.free_to_play;    //CHANGE TO NO SUBSCRIPTION OR SUBSCRIPTION PRICE
        });
        $("#GamePlatform").text(function () {
            return WoW.platform;
        });
        $("#GameDescription").text(function () {
            return WoW.description;
        });
    });

    $("#RunescapeSideNav").click(function(e) {
        e.preventDefault();
        $("#individualGameHeaderImage").html("<img src=" + runescape.banner + ">");
        $(".GameName").text(function () {
            return runescape.name;
        });
        $("#GameCategory").text(function () {
            return runescape.category;
        });
        $("#GameCompany").text(function () {
            return runescape.company;
        });
        $("#GameMax_Local_Players").text(function () {
            return runescape.max_local_players;
        });
        $("#GameCoOp").text(function () {
            return runescape.coOp;
        });
        $("#GameOnline").text(function () {
            return runescape.online;
        });
        $(".GamePrice").text(function () {
            return "$" + runescape.price;
        });
        $("#GameF2P").text(function () {
            return runescape.free_to_play;    //CHANGE TO NO SUBSCRIPTION OR SUBSCRIPTION PRICE
        });
        $("#GamePlatform").text(function () {
            return runescape.platform;
        });
        $("#GameDescription").text(function () {
            return runescape.description;
        });
    });

    $("#WildStarSideNav").click(function(e) {
        e.preventDefault();
        $("#individualGameHeaderImage").html("<img src=" + wildstar.banner + ">");
        $(".GameName").text(function () {
            return wildstar.name;
        });
        $("#GameCategory").text(function () {
            return wildstar.category;
        });
        $("#GameCompany").text(function () {
            return wildstar.company;
        });
        $("#GameMax_Local_Players").text(function () {
            return wildstar.max_local_players;
        });
        $("#GameCoOp").text(function () {
            return wildstar.coOp;
        });
        $("#GameOnline").text(function () {
            return wildstar.online;
        });
        $(".GamePrice").text(function () {
            return "$" + wildstar.price;
        });
        $("#GameF2P").text(function () {
            return wildstar.free_to_play;    //CHANGE TO NO SUBSCRIPTION OR SUBSCRIPTION PRICE
        });
        $("#GamePlatform").text(function () {
            return wildstar.platform;
        });
        $("#GameDescription").text(function () {
            return wildstar.description;
        });
    });

    $("#ESOSideNav").click(function(e) {
        e.preventDefault();
        $("#individualGameHeaderImage").html("<img src=" + ESO.banner + ">");
        $(".GameName").text(function () {
            return ESO.name;
        });
        $("#GameCategory").text(function () {
            return ESO.category;
        });
        $("#GameCompany").text(function () {
            return ESO.company;
        });
        $("#GameMax_Local_Players").text(function () {
            return ESO.max_local_players;
        });
        $("#GameCoOp").text(function () {
            return ESO.coOp;
        });
        $("#GameOnline").text(function () {
            return ESO.online;
        });
        $(".GamePrice").text(function () {
            return "$" + ESO.price;
        });
        $("#GameF2P").text(function () {
            return ESO.free_to_play;    //CHANGE TO NO SUBSCRIPTION OR SUBSCRIPTION PRICE
        });
        $("#GamePlatform").text(function () {
            return ESO.platform;
        });
        $("#GameDescription").text(function () {
            return ESO.description;
        });
    });


    $("#SkyrimSideNav").click(function(e) {
        e.preventDefault();
        $("#individualGameHeaderImage").html("<img src=" + skyrim.banner + ">");
        $(".GameName").text(function () {
            return skyrim.name;
        });
        $("#GameCategory").text(function () {
            return skyrim.category;
        });
        $("#GameCompany").text(function () {
            return skyrim.company;
        });
        $("#GameMax_Local_Players").text(function () {
            return skyrim.max_local_players;
        });
        $("#GameCoOp").text(function () {
            return skyrim.coOp;
        });
        $("#GameOnline").text(function () {
            return skyrim.online;
        });
        $(".GamePrice").text(function () {
            return "$" + skyrim.price;
        });
        $("#GameF2P").text(function () {
            return skyrim.free_to_play;    //CHANGE TO NO SUBSCRIPTION OR SUBSCRIPTION PRICE
        });
        $("#GamePlatform").text(function () {
            return skyrim.platform;
        });
        $("#GameDescription").text(function () {
            return skyrim.description;
        });
    });

    $("#DAISideNav").click(function(e) {
        e.preventDefault();
        $("#individualGameHeaderImage").html("<img src=" + DAI.banner + ">");
        $(".GameName").text(function () {
            return DAI.name;
        });
        $("#GameCategory").text(function () {
            return DAI.category;
        });
        $("#GameCompany").text(function () {
            return DAI.company;
        });
        $("#GameMax_Local_Players").text(function () {
            return DAI.max_local_players;
        });
        $("#GameCoOp").text(function () {
            return DAI.coOp;
        });
        $("#GameOnline").text(function () {
            return DAI.online;
        });
        $(".GamePrice").text(function () {
            return "$" + DAI.price;
        });
        $("#GameF2P").text(function () {
            return DAI.free_to_play;    //CHANGE TO NO SUBSCRIPTION OR SUBSCRIPTION PRICE
        });
        $("#GamePlatform").text(function () {
            return DAI.platform;
        });
        $("#GameDescription").text(function () {
            return DAI.description;
        });
    });

    $("#DarkSoulsIISideNav").click(function(e) {
        e.preventDefault();
        $("#individualGameHeaderImage").html("<img src=" + darksouls.banner + ">");
        $(".GameName").text(function () {
            return darksouls.name;
        });
        $("#GameCategory").text(function () {
            return darksouls.category;
        });
        $("#GameCompany").text(function () {
            return darksouls.company;
        });
        $("#GameMax_Local_Players").text(function () {
            return darksouls.max_local_players;
        });
        $("#GameCoOp").text(function () {
            return darksouls.coOp;
        });
        $("#GameOnline").text(function () {
            return darksouls.online;
        });
        $(".GamePrice").text(function () {
            return "$" + darksouls.price;
        });
        $("#GameF2P").text(function () {
            return darksouls.free_to_play;    //CHANGE TO NO SUBSCRIPTION OR SUBSCRIPTION PRICE
        });
        $("#GamePlatform").text(function () {
            return darksouls.platform;
        });
        $("#GameDescription").text(function () {
            return darksouls.description;
        });

    });

    $("#DiabloIIISideNav").click(function(e) {
        e.preventDefault();
        $("#individualGameHeaderImage").html("<img src=" + d3.banner + ">");
        $(".GameName").text(function () {
            return d3.name;
        });
        $("#GameCategory").text(function () {
            return d3.category;
        });
        $("#GameCompany").text(function () {
            return d3.company;
        });
        $("#GameMax_Local_Players").text(function () {
            return d3.max_local_players;
        });
        $("#GameCoOp").text(function () {
            return d3.coOp;
        });
        $("#GameOnline").text(function () {
            return d3.online;
        });
        $(".GamePrice").text(function () {
            return "$" + d3.price;
        });
        $("#GameF2P").text(function () {
            return d3.free_to_play;    //CHANGE TO NO SUBSCRIPTION OR SUBSCRIPTION PRICE
        });
        $("#GamePlatform").text(function () {
            return d3.platform;
        });
        $("#GameDescription").text(function () {
            return d3.description;
        });
    });

    $("#ME3SideNav").click(function(e) {
        e.preventDefault();
        $("#individualGameHeaderImage").html("<img src=" + me3.banner + ">");
        $(".GameName").text(function () {
            return me3.name;
        });
        $("#GameCategory").text(function () {
            return me3.category;
        });
        $("#GameCompany").text(function () {
            return me3.company;
        });
        $("#GameMax_Local_Players").text(function () {
            return me3.max_local_players;
        });
        $("#GameCoOp").text(function () {
            return me3.coOp;
        });
        $("#GameOnline").text(function () {
            return me3.online;
        });
        $(".GamePrice").text(function () {
            return "$" + me3.price;
        });
        $("#GameF2P").text(function () {
            return me3.free_to_play;    //CHANGE TO NO SUBSCRIPTION OR SUBSCRIPTION PRICE
        });
        $("#GamePlatform").text(function () {
            return me3.platform;
        });
        $("#GameDescription").text(function () {
            return me3.description;
        });
    });


    $("#GTAVSideNav").click(function (e) {
        e.preventDefault();
        $("#individualGameHeaderImage").html("<img src=" + GTA5.banner + ">");
        $(".GameName").text(function () {
            return GTA5.name;
        });
        $("#GameCategory").text(function () {
            return GTA5.category;
        });
        $("#GameCompany").text(function () {
            return GTA5.company;
        });
        $("#GameMax_Local_Players").text(function () {
            return GTA5.max_local_players;
        });
        $("#GameCoOp").text(function () {
            return GTA5.coOp;
        });
        $("#GameOnline").text(function () {
            return GTA5.online;
        });
        $(".GamePrice").text(function () {
            return "$" + GTA5.price;
        });
        $("#GameF2P").text(function () {
            return GTA5.free_to_play;    //CHANGE TO NO SUBSCRIPTION OR SUBSCRIPTION PRICE
        });
        $("#GamePlatform").text(function () {
            return GTA5.platform;
        });
        $("#GameDescription").text(function () {
            return GTA5.description;
        });
    });

    $("#DayZSideNav").click(function(e) {
        e.preventDefault();
        $("#individualGameHeaderImage").html("<img src=" + dayz.banner + ">");
        $(".GameName").text(function () {
            return dayz.name;
        });
        $("#GameCategory").text(function () {
            return dayz.category;
        });
        $("#GameCompany").text(function () {
            return dayz.company;
        });
        $("#GameMax_Local_Players").text(function () {
            return dayz.max_local_players;
        });
        $("#GameCoOp").text(function () {
            return dayz.coOp;
        });
        $("#GameOnline").text(function () {
            return dayz.online;
        });
        $(".GamePrice").text(function () {
            return "$" + dayz.price;
        });
        $("#GameF2P").text(function () {
            return dayz.free_to_play;    //CHANGE TO NO SUBSCRIPTION OR SUBSCRIPTION PRICE
        });
        $("#GamePlatform").text(function () {
            return dayz.platform;
        });
        $("#GameDescription").text(function () {
            return dayz.description;
        });
    });

    $("#BioShockSideNav").click(function(e) {
        e.preventDefault();
        $("#individualGameHeaderImage").html("<img src=" + bioshock.banner + ">");
        $(".GameName").text(function () {
            return bioshock.name;
        });
        $("#GameCategory").text(function () {
            return bioshock.category;
        });
        $("#GameCompany").text(function () {
            return bioshock.company;
        });
        $("#GameMax_Local_Players").text(function () {
            return bioshock.max_local_players;
        });
        $("#GameCoOp").text(function () {
            return bioshock.coOp;
        });
        $("#GameOnline").text(function () {
            return bioshock.online;
        });
        $(".GamePrice").text(function () {
            return "$" + bioshock.price;
        });
        $("#GameF2P").text(function () {
            return bioshock.free_to_play;    //CHANGE TO NO SUBSCRIPTION OR SUBSCRIPTION PRICE
        });
        $("#GamePlatform").text(function () {
            return bioshock.platform;
        });
        $("#GameDescription").text(function () {
            return bioshock.description;
        });
    });

    $("#MagickaSideNav").click(function(e) {
        e.preventDefault();
        $("#individualGameHeaderImage").html("<img src=" + magicka.banner + ">");
        $(".GameName").text(function () {
            return magicka.name;
        });
        $("#GameCategory").text(function () {
            return magicka.category;
        });
        $("#GameCompany").text(function () {
            return magicka.company;
        });
        $("#GameMax_Local_Players").text(function () {
            return magicka.max_local_players;
        });
        $("#GameCoOp").text(function () {
            return magicka.coOp;
        });
        $("#GameOnline").text(function () {
            return magicka.online;
        });
        $(".GamePrice").text(function () {
            return "$" + magicka.price;
        });
        $("#GameF2P").text(function () {
            return magicka.free_to_play;    //CHANGE TO NO SUBSCRIPTION OR SUBSCRIPTION PRICE
        });
        $("#GamePlatform").text(function () {
            return magicka.platform;
        });
        $("#GameDescription").text(function () {
            return magicka.description;
        });
    });


    $("#TF2SideNav").click(function(e) {
        e.preventDefault();
        $("#individualGameHeaderImage").html("<img src=" + TF2.banner + ">");
        $(".GameName").text(function () {
            return TF2.name;
        });
        $("#GameCategory").text(function () {
            return TF2.category;
        });
        $("#GameCompany").text(function () {
            return TF2.company;
        });
        $("#GameMax_Local_Players").text(function () {
            return TF2.max_local_players;
        });
        $("#GameCoOp").text(function () {
            return TF2.coOp;
        });
        $("#GameOnline").text(function () {
            return TF2.online;
        });
        $(".GamePrice").text(function () {
            return "$" + TF2.price;
        });
        $("#GameF2P").text(function () {
            return TF2.free_to_play;    //CHANGE TO NO SUBSCRIPTION OR SUBSCRIPTION PRICE
        });
        $("#GamePlatform").text(function () {
            return TF2.platform;
        });
        $("#GameDescription").text(function () {
            return TF2.description;
        });
    });

    $("#CoDSideNav").click(function(e) {
        e.preventDefault();
        $("#individualGameHeaderImage").html("<img src=" + CoD.banner + ">");
        $(".GameName").text(function () {
            return CoD.name;
        });
        $("#GameCategory").text(function () {
            return CoD.category;
        });
        $("#GameCompany").text(function () {
            return CoD.company;
        });
        $("#GameMax_Local_Players").text(function () {
            return CoD.max_local_players;
        });
        $("#GameCoOp").text(function () {
            return CoD.coOp;
        });
        $("#GameOnline").text(function () {
            return CoD.online;
        });
        $(".GamePrice").text(function () {
            return "$" + CoD.price;
        });
        $("#GameF2P").text(function () {
            return CoD.free_to_play;    //CHANGE TO NO SUBSCRIPTION OR SUBSCRIPTION PRICE
        });
        $("#GamePlatform").text(function () {
            return CoD.platform;
        });
        $("#GameDescription").text(function () {
            return CoD.description;
        });
    });

    $("#BF4SideNav").click(function(e) {
        e.preventDefault();
        $("#individualGameHeaderImage").html("<img src=" + battlefield.banner + ">");
        $(".GameName").text(function () {
            return battlefield.name;
        });
        $("#GameCategory").text(function () {
            return battlefield.category;
        });
        $("#GameCompany").text(function () {
            return battlefield.company;
        });
        $("#GameMax_Local_Players").text(function () {
            return battlefield.max_local_players;
        });
        $("#GameCoOp").text(function () {
            return battlefield.coOp;
        });
        $("#GameOnline").text(function () {
            return battlefield.online;
        });
        $(".GamePrice").text(function () {
            return "$" + battlefield.price;
        });
        $("#GameF2P").text(function () {
            return battlefield.free_to_play;    //CHANGE TO NO SUBSCRIPTION OR SUBSCRIPTION PRICE
        });
        $("#GamePlatform").text(function () {
            return battlefield.platform;
        });
        $("#GameDescription").text(function () {
            return battlefield.description;
        });
    });


    $("#BroforceSideNav").click(function(e) {
        e.preventDefault();
        $("#individualGameHeaderImage").html("<img src=" + broforce.banner + ">");
        $(".GameName").text(function () {
            return broforce.name;
        });
        $("#GameCategory").text(function () {
            return broforce.category;
        });
        $("#GameCompany").text(function () {
            return broforce.company;
        });
        $("#GameMax_Local_Players").text(function () {
            return broforce.max_local_players;
        });
        $("#GameCoOp").text(function () {
            return broforce.coOp;
        });
        $("#GameOnline").text(function () {
            return broforce.online;
        });
        $(".GamePrice").text(function () {
            return "$" + broforce.price;
        });
        $("#GameF2P").text(function () {
            return broforce.free_to_play;    //CHANGE TO NO SUBSCRIPTION OR SUBSCRIPTION PRICE
        });
        $("#GamePlatform").text(function () {
            return broforce.platform;
        });
        $("#GameDescription").text(function () {
            return broforce.description;
        });
    });

    $("#HotlineMiamiSideNav").click(function (e) {
        e.preventDefault();
        $("#individualGameHeaderImage").html("<img src=" + hotlinemiami.banner + ">");
        $(".GameName").text(function () {
            return hotlinemiami.name;
        });
        $("#GameCategory").text(function () {
            return hotlinemiami.category;
        });
        $("#GameCompany").text(function () {
            return hotlinemiami.company;
        });
        $("#GameMax_Local_Players").text(function () {
            return hotlinemiami.max_local_players;
        });
        $("#GameCoOp").text(function () {
            return hotlinemiami.coOp;
        });
        $("#GameOnline").text(function () {
            return hotlinemiami.online;
        });
        $(".GamePrice").text(function () {
            return "$" + hotlinemiami.price;
        });
        $("#GameF2P").text(function () {
            return hotlinemiami.free_to_play;    //CHANGE TO NO SUBSCRIPTION OR SUBSCRIPTION PRICE
        });
        $("#GamePlatform").text(function () {
            return hotlinemiami.platform;
        });
        $("#GameDescription").text(function () {
            return hotlinemiami.description;
        });
    });

    $("#DivekickSideNav").click(function(e) {
        e.preventDefault();
        $("#individualGameHeaderImage").html("<img src=" + divekick.banner + ">");
        $(".GameName").text(function () {
            return divekick.name;
        });
        $("#GameCategory").text(function () {
            return divekick.category;
        });
        $("#GameCompany").text(function () {
            return divekick.company;
        });
        $("#GameMax_Local_Players").text(function () {
            return divekick.max_local_players;
        });
        $("#GameCoOp").text(function () {
            return divekick.coOp;
        });
        $("#GameOnline").text(function () {
            return divekick.online;
        });
        $(".GamePrice").text(function () {
            return "$" + divekick.price;
        });
        $("#GameF2P").text(function () {
            return divekick.free_to_play;    //CHANGE TO NO SUBSCRIPTION OR SUBSCRIPTION PRICE
        });
        $("#GamePlatform").text(function () {
            return divekick.platform;
        });
        $("#GameDescription").text(function () {
            return divekick.description;
        });
    });


    $("#FIFA15SideNav").click(function(e) {
        e.preventDefault();
        $("#individualGameHeaderImage").html("<img src=" + fifa.banner + ">");
        $(".GameName").text(function () {
            return fifa.name;
        });
        $("#GameCategory").text(function () {
            return fifa.category;
        });
        $("#GameCompany").text(function () {
            return fifa.company;
        });
        $("#GameMax_Local_Players").text(function () {
            return fifa.max_local_players;
        });
        $("#GameCoOp").text(function () {
            return fifa.coOp;
        });
        $("#GameOnline").text(function () {
            return fifa.online;
        });
        $(".GamePrice").text(function () {
            return "$" + fifa.price;
        });
        $("#GameF2P").text(function () {
            return fifa.free_to_play;    //CHANGE TO NO SUBSCRIPTION OR SUBSCRIPTION PRICE
        });
        $("#GamePlatform").text(function () {
            return fifa.platform;
        });
        $("#GameDescription").text(function () {
            return fifa.description;
        });
    });

    $("#SpeedRunnersSideNav").click(function(e) {
        e.preventDefault();
        $("#individualGameHeaderImage").html("<img src=" + speedrunners.banner + ">");
        $(".GameName").text(function () {
            return speedrunners.name;
        });
        $("#GameCategory").text(function () {
            return speedrunners.category;
        });
        $("#GameCompany").text(function () {
            return speedrunners.company;
        });
        $("#GameMax_Local_Players").text(function () {
            return speedrunners.max_local_players;
        });
        $("#GameCoOp").text(function () {
            return speedrunners.coOp;
        });
        $("#GameOnline").text(function () {
            return speedrunners.online;
        });
        $(".GamePrice").text(function () {
            return "$" + speedrunners.price;
        });
        $("#GameF2P").text(function () {
            return speedrunners.free_to_play;    //CHANGE TO NO SUBSCRIPTION OR SUBSCRIPTION PRICE
        });
        $("#GamePlatform").text(function () {
            return speedrunners.platform;
        });
        $("#GameDescription").text(function () {
            return speedrunners.description;
        });
    });

    $("#F12013SideNav").click(function(e) {
        e.preventDefault();
        $("#individualGameHeaderImage").html("<img src=" + f12013.banner + ">");
        $(".GameName").text(function () {
            return f12013.name;
        });
        $("#GameCategory").text(function () {
            return f12013.category;
        });
        $("#GameCompany").text(function () {
            return f12013.company;
        });
        $("#GameMax_Local_Players").text(function () {
            return f12013.max_local_players;
        });
        $("#GameCoOp").text(function () {
            return f12013.coOp;
        });
        $("#GameOnline").text(function () {
            return f12013.online;
        });
        $(".GamePrice").text(function () {
            return "$" + f12013.price;
        });
        $("#GameF2P").text(function () {
            return f12013.free_to_play;    //CHANGE TO NO SUBSCRIPTION OR SUBSCRIPTION PRICE
        });
        $("#GamePlatform").text(function () {
            return f12013.platform;
        });
        $("#GameDescription").text(function () {
            return f12013.description;
        });
    });

    $("#NBA2K15SideNav").click(function(e) {
        e.preventDefault();
        $("#individualGameHeaderImage").html("<img src=" + nba2k15.banner + ">");
        $(".GameName").text(function () {
            return nba2k15.name;
        });
        $("#GameCategory").text(function () {
            return nba2k15.category;
        });
        $("#GameCompany").text(function () {
            return nba2k15.company;
        });
        $("#GameMax_Local_Players").text(function () {
            return nba2k15.max_local_players;
        });
        $("#GameCoOp").text(function () {
            return nba2k15.coOp;
        });
        $("#GameOnline").text(function () {
            return nba2k15.online;
        });
        $(".GamePrice").text(function () {
            return "$" + nba2k15.price;
        });
        $("#GameF2P").text(function () {
            return nba2k15.free_to_play;    //CHANGE TO NO SUBSCRIPTION OR SUBSCRIPTION PRICE
        });
        $("#GamePlatform").text(function () {
            return nba2k15.platform;
        });
        $("#GameDescription").text(function () {
            return nba2k15.description;
        });
    });


    $("#Arma3SideNav").click(function(e) {
        e.preventDefault();
        $("#individualGameHeaderImage").html("<img src=" + arma3.banner + ">");
        $(".GameName").text(function () {
            return arma3.name;
        });
        $("#GameCategory").text(function () {
            return arma3.category;
        });
        $("#GameCompany").text(function () {
            return arma3.company;
        });
        $("#GameMax_Local_Players").text(function () {
            return arma3.max_local_players;
        });
        $("#GameCoOp").text(function () {
            return arma3.coOp;
        });
        $("#GameOnline").text(function () {
            return arma3.online;
        });
        $(".GamePrice").text(function () {
            return "$" + arma3.price;
        });
        $("#GameF2P").text(function () {
            return arma3.free_to_play;    //CHANGE TO NO SUBSCRIPTION OR SUBSCRIPTION PRICE
        });
        $("#GamePlatform").text(function () {
            return arma3.platform;
        });
        $("#GameDescription").text(function () {
            return arma3.description;
        });
    });

    $("#RCT3SideNav").click(function(e) {
        e.preventDefault();
        $("#individualGameHeaderImage").html("<img src=" + rct3.banner + ">");
        $(".GameName").text(function () {
            return rct3.name;
        });
        $("#GameCategory").text(function () {
            return rct3.category;
        });
        $("#GameCompany").text(function () {
            return rct3.company;
        });
        $("#GameMax_Local_Players").text(function () {
            return rct3.max_local_players;
        });
        $("#GameCoOp").text(function () {
            return rct3.coOp;
        });
        $("#GameOnline").text(function () {
            return rct3.online;
        });
        $(".GamePrice").text(function () {
            return "$" + rct3.price;
        });
        $("#GameF2P").text(function () {
            return rct3.free_to_play;    //CHANGE TO NO SUBSCRIPTION OR SUBSCRIPTION PRICE
        });
        $("#GamePlatform").text(function () {
            return rct3.platform;
        });
        $("#GameDescription").text(function () {
            return rct3.description;
        });
    });

    $("#GoatSimulatorSideNav").click(function(e) {
        e.preventDefault();
        $("#individualGameHeaderImage").html("<img src=" + goatsimulator.banner + ">");
        $(".GameName").text(function () {
            return goatsimulator.name;
        });
        $("#GameCategory").text(function () {
            return goatsimulator.category;
        });
        $("#GameCompany").text(function () {
            return goatsimulator.company;
        });
        $("#GameMax_Local_Players").text(function () {
            return goatsimulator.max_local_players;
        });
        $("#GameCoOp").text(function () {
            return goatsimulator.coOp;
        });
        $("#GameOnline").text(function () {
            return goatsimulator.online;
        });
        $(".GamePrice").text(function () {
            return "$" + goatsimulator.price;
        });
        $("#GameF2P").text(function () {
            return goatsimulator.free_to_play;    //CHANGE TO NO SUBSCRIPTION OR SUBSCRIPTION PRICE
        });
        $("#GamePlatform").text(function () {
            return goatsimulator.platform;
        });
        $("#GameDescription").text(function () {
            return goatsimulator.description;
        });
    });
});







function extend(Child, Parent) {
    Child.prototype = (Parent.prototype);
    Child.prototype.constructor = Child;
    Child.parent = Parent.prototype;
}


extend(MOBA, Game);
extend(Strategy, Game);
extend(MMORPG, Game);
extend(RPG, Game);
extend(Action_Adventure, Game);
extend(Shooter, Game);
extend(Indie, Game);
extend(Sports_And_Racing, Game);
extend(Simulation, Game);


var Inventory = [];
var MOBA_Games = [];
var Strategy_Games = [];
var MMORPG_Games = [];
var RPG_Games = [];
var Action_Adventure_Games = [];
var Shooter_Games =[];
var Indie_Games = [];
var Sports_And_Racing_Games = [];
var Simulation_Games = [];



var currentdDiscountCode = 'TwentyPercent0ff';
var currentDiscountPercent = 20;



function Game(){
    this.name = 'Unknown'; // name of game
    this.price = 'Unknown'; // price of game
    this.category ='Unknown'; // category of game (MOBA, Strategy, etc)
    this.company = 'Unknown'; // company that makes the game
    this.max_local_players = 'Unknown'; // local players
    this.coOp = 'Unknown'; // true or false
    this.online = 'Unknown'; // true or false
    this.free_to_play = 'Unknown'; // true or false
    this.availableOnWindows = 'Unknown'; // true or false
    this.availableOnMac = 'Unknown'; //true of false
    this.platform = 'Unknown'
    this.description ='';
    this.thumbnail ='';
    this.banner ='';
}


Game.prototype.arrayNameString = function(){
    return this.category + '_Games';
};

Game.prototype.addGameToCategory = function(){
    eval(this.arrayNameString()).push(this);
};


function MOBA(name, company, available_on_windows_TF, available_on_mac_TF){
    this.name = name;
    this.price = 0.00;
    this.category = 'MOBA';
    this.company = company;
    this.max_local_players = 1;
    this.coOp = false;
    this.online = true;
    this.free_to_play = true;
    var availableOnWindows = available_on_windows_TF;
    var availableOnMac = available_on_mac_TF;
    this.platform = (function(){
        if(availableOnWindows == true && availableOnMac == true){
            return 'Available on Windows and Mac OS X';
        }
        else if (availableOnWindows == true && availableOnMac != true){
            return 'Only Available on Windows';
        }
        else if (availableOnWindows != true && availableOnMac == true){
            return 'Only Available on Mac OS X';
        }
        else{
            return 'Unknown';
        }})();
    this.description = '';
    this.thumbnail ='';
    this.banner ='';
}


function Strategy(name, price, company, coOp_TF, available_on_windows_TF, available_on_mac_TF){
    this.name = name;
    this.price = price;
    this.category = 'Strategy';
    this.company = company;
    this.max_local_players = 1;
    this.coOp = coOp_TF;
    this.online = true;
    this.free_to_play = true;
    var availableOnWindows = available_on_windows_TF;
    var availableOnMac = available_on_mac_TF;
    this.platform = (function(){
        if(availableOnWindows == true && availableOnMac == true){
            return 'Available on Windows and Mac OS X';
        }
        else if (availableOnWindows == true && availableOnMac != true){
            return 'Only Available on Windows';
        }
        else if (availableOnWindows != true && availableOnMac == true){
            return 'Only Available on Mac OS X';
        }
        else{
            return 'Unknown';
        }})();
    this.description = '';
    this.thumbnail ='';
    this.banner ='';
}


function MMORPG(name, price, company, free_to_play_TF, available_on_windows_TF, available_on_mac_TF){
    this.name = name;
    this.price = price;
    this.category = 'MMORPG';
    this.company = company;
    this.max_local_players = 1;
    this.coOp = false;
    this.online = true;
    this.free_to_play = free_to_play_TF;
    var availableOnWindows = available_on_windows_TF;
    var availableOnMac = available_on_mac_TF;
    this.platform = (function(){
        if(availableOnWindows == true && availableOnMac == true){
            return 'Available on Windows and Mac OS X';
        }
        else if (availableOnWindows == true && availableOnMac != true){
            return 'Only Available on Windows';
        }
        else if (availableOnWindows != true && availableOnMac == true){
            return 'Only Available on Mac OS X';
        }
        else{
            return 'Unknown';
        }})();
    this.description = '';
    this.thumbnail ='';
    this.banner ='';
}

function RPG(name, price, company, coOp_TF, online_TF, available_on_windows_TF, available_on_mac_TF){
    this.name = name;
    this.price = price;
    this.category = 'RPG';
    this.company = company;
    this.max_local_players = 1;
    this.coOp = coOp_TF;
    this.online = online_TF;
    this.free_to_play = true;
    var availableOnWindows = available_on_windows_TF;
    var availableOnMac = available_on_mac_TF;
    this.platform = (function(){
        if(availableOnWindows == true && availableOnMac == true){
            return 'Available on Windows and Mac OS X';
        }
        else if (availableOnWindows == true && availableOnMac != true){
            return 'Only Available on Windows';
        }
        else if (availableOnWindows != true && availableOnMac == true){
            return 'Only Available on Mac OS X';
        }
        else{
            return 'Unknown';
        }})();
    this.description = '';
    this.thumbnail ='';
    this.banner ='';
}

function Action_Adventure(name, price, company, max_local_players, coOp_TF, online_TF, available_on_windows_TF, available_on_mac_TF){
    this.name = name;
    this.price = price;
    this.category = 'Action_Adventure';
    this.company = company;
    this.max_local_players = max_local_players;
    this.coOp = coOp_TF;
    this.online = online_TF;
    this.free_to_play = true;
    var availableOnWindows = available_on_windows_TF;
    var availableOnMac = available_on_mac_TF;
    this.platform = (function(){
        if(availableOnWindows == true && availableOnMac == true){
            return 'Available on Windows and Mac OS X';
        }
        else if (availableOnWindows == true && availableOnMac != true){
            return 'Only Available on Windows';
        }
        else if (availableOnWindows != true && availableOnMac == true){
            return 'Only Available on Mac OS X';
        }
        else{
            return 'Unknown';
        }})();
    this.description = '';
    this.thumbnail ='';
    this.banner ='';
}

function Shooter(name, price, company, coOp_TF, online_TF, available_on_windows_TF, available_on_mac_TF){
    this.name = name;
    this.price = price;
    this.category = 'Shooter';
    this.company = company;
    this.max_local_players = 1;
    this.coOp = coOp_TF;
    this.online = online_TF;
    this.free_to_play = true;
    var availableOnWindows = available_on_windows_TF;
    var availableOnMac = available_on_mac_TF;
    this.platform = (function(){
        if(availableOnWindows == true && availableOnMac == true){
            return 'Available on Windows and Mac OS X';
        }
        else if (availableOnWindows == true && availableOnMac != true){
            return 'Only Available on Windows';
        }
        else if (availableOnWindows != true && availableOnMac == true){
            return 'Only Available on Mac OS X';
        }
        else{
            return 'Unknown';
        }})();
    this.description = '';
    this.thumbnail ='';
    this.banner ='';
}

function Indie(name, price, company, max_local_players, coOp_TF, online_TF, available_on_windows_TF, available_on_mac_TF){
    this.name = name;
    this.price = price;
    this.category = 'Indie';
    this.company = company;
    this.max_local_players = max_local_players;
    this.coOp = coOp_TF;
    this.online = online_TF;
    this.free_to_play = true;
    var availableOnWindows = available_on_windows_TF;
    var availableOnMac = available_on_mac_TF;
    this.platform = (function(){
        if(availableOnWindows == true && availableOnMac == true){
            return 'Available on Windows and Mac OS X';
        }
        else if (availableOnWindows == true && availableOnMac != true){
            return 'Only Available on Windows';
        }
        else if (availableOnWindows != true && availableOnMac == true){
            return 'Only Available on Mac OS X';
        }
        else{
            return 'Unknown';
        }})();
    this.description = '';
    this.thumbnail ='';
    this.banner ='';
}

function Sports_And_Racing(name, price, company, max_local_players, coOp_TF, online_TF, available_on_windows_TF, available_on_mac_TF){
    this.name = name;
    this.price = price;
    this.category = 'Sports_And_Racing';
    this.company = company;
    this.max_local_players = max_local_players;
    this.coOp = coOp_TF;
    this.online = online_TF;
    this.free_to_play = true;
    var availableOnWindows = available_on_windows_TF;
    var availableOnMac = available_on_mac_TF;
    this.platform = (function(){
        if(availableOnWindows == true && availableOnMac == true){
            return 'Available on Windows and Mac OS X';
        }
        else if (availableOnWindows == true && availableOnMac != true){
            return 'Only Available on Windows';
        }
        else if (availableOnWindows != true && availableOnMac == true){
            return 'Only Available on Mac OS X';
        }
        else{
            return 'Unknown';
        }})();
    this.description = '';
    this.thumbnail ='';
    this.banner ='';
}

function Simulation(name, price, company, coOp_TF, online_TF, available_on_windows_TF, available_on_mac_TF){
    this.name = name;
    this.price = price;
    this.category = 'Simulation';
    this.company = company;
    this.max_local_players = 1;
    this.coOp = coOp_TF;
    this.online = online_TF;
    this.free_to_play = true;
    var availableOnWindows = available_on_windows_TF;
    var availableOnMac = available_on_mac_TF;
    this.platform = (function(){
        if(availableOnWindows == true && availableOnMac == true){
            return 'Available on Windows and Mac OS X';
        }
        else if (availableOnWindows == true && availableOnMac != true){
            return 'Only Available on Windows';
        }
        else if (availableOnWindows != true && availableOnMac == true){
            return 'Only Available on Mac OS X';
        }
        else{
            return 'Unknown';
        }})();
    this.description = '';
    this.thumbnail ='';
    this.banner ='';
}




//MOBA
var LoL = new MOBA('League of Legends', 'Riot Games', true, true);
LoL.description = 'League of Legends is a fast-paced, competitive online game that blends the speed and intensity of an RTS with RPG elements. Two teams of powerful champions, each with a unique design and playstyle, battle head-to-head across multiple battlefields and game modes. With an ever-expanding roster of champions, frequent updates and a thriving tournament scene, League of Legends offers endless replayability for players of every skill level.';
LoL.thumbnail ='images/leagueoflegendssmall.jpg';
LoL.banner = 'images/leagueoflegendslarge.png';
LoL.addGameToCategory();
var Dota2 = new MOBA('DOTA 2', 'Valve', true, true);
Dota2.description = 'Dota is a competitive game of action and strategy, played both professionally and casually by millions of passionate fans worldwide. Players pick from a pool of over a hundred heroes, forming two teams of five players.';
Dota2.thumbnail ='images/dota2small.jpg';
Dota2.banner = 'images/dota2large.jpg';
Dota2.addGameToCategory();
var HoN = new MOBA('Heroes of Newerth', 'S2 Games', true, true);
HoN.description = 'Heroes of Newerth pits two teams of players against each other: the Legion and the Hellbourne. Both teams are based at opposite corners of the map in their respective bases. Bases consist of buildings, creep spawn points, towers, a hero spawning pool, and a central structure. The goal of the game is to either destroy the central structure, the World Tree (Legion) or Sacrificial Shrine (Hellbourne), of the opposite base or force the other team to concede. Players achieve this by selecting heroes with unique skills to combat the other team.';
HoN.thumbnail = 'images/honsmall.jpg';
HoN.banner = 'images/honlarge.jpg';
HoN.addGameToCategory();
var HotS = new MOBA('Heroes of the Storm', 'Blizzard Entertainment', true, true);
HotS.description = 'Heroes of the Storm is a raucous online team brawler starring your favorite Blizzard characters. Build and customize heroes from across every Blizzard universe to suit your play style. Team up with your friends and engage in fast-paced mayhem across varied battlegrounds that impact strategy and change the way you play the game.';
HotS.thumbnail ='images/hotssmall.jpg';
HotS.banner = 'images/hotslarge.jpg';
HotS.addGameToCategory();

//Strategy
var starcraft = new Strategy('StarCraft II: Heart of the Swarm', 19.99, 'Blizzard Entertainment', false, true, true);
starcraft.description = 'You are Sarah Kerrigan, former Queen of Blades. Once the most feared entity in the galaxy, you now wait in a cell in the depths of a high-security research laboratory. Before the murderous forces of the Terran Dominion close in, you must plot your escape to the dark reaches of space… and reclaim your living empire at the Heart of the Swarm.';
starcraft.thumbnail ='images/starcraftsmall.jpg';
starcraft.banner = 'images/starcraftlarge.jpg';
starcraft.addGameToCategory();
var warcraft = new Strategy('Warcraft III : The Frozen Throne', 9.99, 'Blizzard Entertainment', false, true, true);
warcraft.description = 'The Frozen Throne provides gamers with a vast new chapter in the epic Warcraft saga. In the single-player campaign, players revisit the war-torn world of Azeroth. Several months have passed since Archimonde and the Burning Legion were defeated at the battle of Mount Hyjal, yet a new threat has arisen throughout the land. One new Hero per race, each possessing powerful spells and magical abilities. A host of new units, each equipped with new abilities and spells, giving players the opportunity to create diverse strategic and tactical forms of combat. Player-built shops, unique for each race, equipped with items carefully designed to improve and aid the units of every race. Neutral Heroes, available for recruitment by all players, that can supplement and strengthen a player\'s army with all new spells and abilities. Expanded multiplayer options over Battle.net including multiple new game types, clan and tournament support.';
warcraft.thumbnail ='images/warcraft3small.jpg';
warcraft.banner = 'images/warcraft3large.jpg';
warcraft.addGameToCategory();
var cnc = new Strategy('Command and Conquer 4: Tiberian Twilight', 19.99,'Electronic Arts', true, true, true);
cnc.description = 'The story of Command & Conquer 4 Tiberian Twilight takes place after the events of the critically acclaimed Command & Conquer 3: Tiberium Wars. The year is 2062 and humanity is at the brink of extinction. With only six years left until the mysterious crystalline structure Tiberium renders the earth entirely uninhabitable, the two opposing factions - Global Defense Initiative (GDI) and the Brotherhood of Nod - inevitably find themselves in desperation for the same cause: to stop Tiberium from extinguishing mankind. The unthinkable becomes reality and Nod’s enigmatic leader Kane takes off for GDI headquarters. What is Kane planning in the heart of his enemies’ base? Command & Conquer 4 draws the epic conclusion to the beloved Tiberium universe, where fans learn the fate of Earth, Nod, Tiberium, GDI and most importantly, Kane’s motivations behind his decade-long plan. In addition to the two campaigns on the epic battles of GDI and Nod, which players will get to conquer alone or in a cooperative mode, Command & Conquer 4 also features a new 5v5 objective-based multiplayer mode, promoting teamwork and cooperation and delivering a social real-time-strategy experience never seen before in a Command & Conquer game.';
cnc.thumbnail ='images/cnc4small.jpg';
cnc.banner = 'images/cnc4large.jpg';
cnc.addGameToCategory();

//MMORPG
var WoW = new MMORPG('World of Warcraft: Warlords of Draenor', 49.99, 'Blizzard Entertainment', false, true, true);
WoW.description = 'It is the era of an Old Horde, forged with steel rather than fel blood. A union of great orc clans, the Iron Horde, tramples the planet Draenor beneath terrifying war machines. Azeroth falls next. Worlds uncounted will follow. \n You must mount a desperate charge on Draenor – savage home of orcs and adopted bastion of stoic draenei – at this pivotal moment. Your allies are legends from across time; your fortress a foothold in an alien land. Lead the armies of one world against another…before the future itself is unmade.';
WoW.thumbnail ='images/wowsmall.jpg';
WoW.banner = 'images/wowlarge.jpg';
WoW.addGameToCategory();
var runescape = new MMORPG('RuneScape', 0, 'Jagex Games', true, true, true);
runescape.description = 'In a fantasy realm of magic and adventure, battle gods, slay dragons, and defeat mythical creatures as you advance through story-driven quests, master skills and make new friends.';
runescape.thumbnail ='images/runescapesmall.jpg';
runescape.banner = 'images/runescapelarge.jpg';
runescape.addGameToCategory();
var wildstar = new MMORPG('WildStar', 39.99, 'Carbine Studios', false, true, true);
wildstar.description = 'Blast off for an epic adventure of galactic proportions! Choose a side and fight for control of Nexus, while uncovering the secrets of the hyper-advanced Eldan that disappeared from the planet long ago.';
wildstar.thumbnail ='images/wildstarsmall.jpg';
wildstar.banner = 'images/wildstarlarge.jpg';
wildstar.addGameToCategory();
var ESO = new MMORPG('Elder Scrolls Online', 24.99, 'ZeniMax Online Studios', false, true, true);
ESO.description = 'It is a time of strife and unrest. Armies of revenants and dark spirits manifest in every corner of Tamriel. Winters grow colder and crops fail. Mystics are plagued by nightmares and portents of doom. \n Four years ago, in 2E 578, an arcane explosion of energy in the Imperial City set off mystical aftershocks that swept across Nirn. Mages died or went mad. Supernatural abominations from the plane of Oblivion, the Daedra, appeared in greater numbers than ever before. The constellation of the Serpent grew so large that it dominated the night sky. \n So began the grand scheme of Molag Bal, Daedric Prince of domination and enslavement. His Dark Anchors, vortexes of evil magic, weaken the barrier between worlds, threatening to merge Nirn and Oblivion into a single, nightmarish hellscape. \n In the midst of this chaos, three alliances vie for control of the Imperial City and the White-Gold Tower. High Rock, Sentinel, and Orsinium stand as one, united under the rule of the High King in Wayrest. Valenwood and Elsweyr have forged an alliance of their own with Summerset, while Black Marsh, Morrowind, and Skyrim have formed a third, uneasy pact. \n The Daggerfall Covenant. The Aldmeri Dominion. The Ebonheart Pact. \n Three armies will take up arms against the Empire, and against each other, to wrest control of the Imperial City and White-Gold Tower from the dark forces of Oblivion itself. \n Where do your loyalties lie?';
ESO.thumbnail ='images/esosmall.jpg';
ESO.banner = 'images/esolarge.jpg';
ESO.addGameToCategory();

//RPG
var skyrim = new RPG('The Elder Scrolls V: Skyrim', 25.00,'Bethesda Game Studios', false, false, true, false);
skyrim.description = 'The next chapter in the Elder Scrolls saga arrives from the Bethesda Game Studios. Skyrim reimagines the open-world fantasy epic, bringing to life a complete virtual world open for you to explore any way you choose. Play any type of character you can imagine, and do whatever you want; the legendary freedom of choice, storytelling, and adventure of The Elder Scrolls is realized like never before. Skyrim\'s new game engine brings to life a complete virtual world with rolling clouds, rugged mountains, bustling cities, lush fields, and ancient dungeons. Choose from hundreds of weapons, spells, and abilities. The new character system allows you to play any way you want and define yourself through your actions. Battle ancient dragons like you\'ve never seen. As Dragonborn, learn their secrets and harness their power for yourself.';
skyrim.thumbnail ='images/skyrimsmall.jpg';
skyrim.banner = 'images/skyrimlarge.jpg';
skyrim.addGameToCategory();
var DAI = new RPG('Dragon Age: Inquisition', 59.99, 'BioWare', false, true, true, false);
DAI.description = 'A cataclysmic event plunges the land of Thedas into turmoil. Dragons darken the sky, casting a shadow over lands on the brink of chaos. Mages break into all-out war against the oppressive templars. Nations rise against one another. It falls to you and your allies to restore order as you lead the Inquisition and hunt down the agents of chaos. \n Explore, lead, and battle: Tough choices define your experience, and even one decision can change the course of what\'s to come.';
DAI.thumbnail ='images/daismall.jpg';
DAI.banner = 'images/dailarge.jpg';
DAI.addGameToCategory();
var darksouls = new RPG('Dark Souls II', 46.97, 'From Software', true, true, true, false);
darksouls.description = 'Dark Souls II brings the franchise’s renowned difficulty & gripping gameplay innovations to both single and multiplayer experiences.';
darksouls.thumbnail ='images/darksouls2small.png';
darksouls.banner = 'images/darksouls2large.jpg';
darksouls.addGameToCategory();
var d3 = new RPG('Diablo III', 39.99, 'Blizzard Entertainment', true, true, true, true);
d3.description = 'No One Can Stop Death...The lords of hell rage within the Black Soulstone, their souls screaming for vengeance and release. Before the artifact can be sealed away forever, Malthael-Angel of Deathmanifests in the mortal realms with a deadly new purpose: to steal the ';
d3.thumbnail ='images/diablo3small.jpg';
d3.banner = 'images/diablo3large.jpg';
d3.addGameToCategory();
var me3 = new RPG('Mass Effect 3', 29.99, 'BioWare & Straight Right', true, true, true, false);
me3.description = 'Take Earth Back! \n Interactive storytelling, build a customizable arsenal, ardenaline-pumping game play, integrated co-op multiplayer, ruthless and intelligent enemies.';
me3.thumbnail ='images/me3small.jpg';
me3.banner = 'images/me3large.jpg';
me3.addGameToCategory();

//Action_Adventure
var GTA5 = new Action_Adventure('Grand Theft Auto V', 59.99, 'Rockstar Games', 1, true, true, true, false);
GTA5.description = 'The sprawling sun-soaked metropolis of Los Santos is chock full of self-help coaches, starlets and C-List celebrities, once on top of the media world, now struggling to stay relevant in time of economic malaise and lowest-common-denominator reality TV. Amidst this madness, three unique criminals plan their own chances of survival and success: Franklin, a street-level hustler in search of opportunities for serious money; Michael, an ex-con whose "retirement" is a less rosy than he hoped it would be; and Trevor, a violent dude driven by the chance for a quick high and the next big score. Nearly out of options, the crew risks it all in a series of daring and dangerous heists that could set them up for life - one way or the other.';
GTA5.thumbnail ='images/gta5small.jpg';
GTA5.banner = 'images/gta5large.jpg';
GTA5.addGameToCategory();
var dayz = new Action_Adventure('DayZ', 34.99, 'Bohemia Interactive', 1, false, true, true, false);
dayz.description = 'Welcome to the world of DayZ, hit by a new and presently unknown infection which has wiped out most of the world\'s population. You are one of the few that have survived and now you must search this new wasteland in order to fight for your life against what is left of the indigenous population now infected with the disease. Go solo, team up with friends or take on the world, as you choose your path in this brutal and chilling landscape using whatever means you stumble upon to survive.';
dayz.thumbnail ='images/dayzsmall.jpg';
dayz.banner = 'images/dayzlarge.jpg';
dayz.addGameToCategory();
var bioshock = new Action_Adventure('BioShock Infinite', 59.99, '2K Games', 1, false, false, true, true);
bioshock.description = ' Initially conceived as a floating symbol of American ideals at a time when the United States was emerging as a world power, Columbia is sent to distant shores with great fanfare by a captivated public. What begins as a fresh new endeavor of hope turns drastically wrong as the city soon disappears into the clouds to whereabouts unknown. The player takes on the role of former Pinkerton agent Booker DeWitt, sent to the lost city to rescue Elizabeth, a young lady imprisoned there since her childhood. He develops a relationship with Elizabeth, enhancing his abilities with hers so the pair may escape from a city that is literally falling from the sky. DeWitt has to learn to fight foes in high-speed Sky-Line battles, engage in combat both indoors and amongst the clouds, and harness the power of a myriad of new weapons and abilities.';
bioshock.thumbnail ='images/bioshocksmall.jpg';
bioshock.banner = 'images/bioshocklarge.jpg';
bioshock.addGameToCategory();
var magicka = new Action_Adventure('Magicka', 9.99, 'Arrowhead Game Studios', 4, true, true, true, false);
magicka.description = 'Magicka is an action-adventure game set in a rich fantasy world based on Norse mythology. The player assumes the role of a wizard from a sacred order tasked with the ultimate goal of stopping an evil sorcerer who has thrown the world into turmoil, his evil creations besieging the forces of good.';
magicka.thumbnail ='images/magickasmall.jpg';
magicka.banner = 'images/magickalarge.jpg';
magicka.addGameToCategory();

//Shooter
var TF2 = new Shooter('Team Fortress 2', 0, 'Valve', false, true, true, true);
TF2.description = 'Team Fortress 2 (TF2) is the sequel to the game that put class-based, multiplayer team warfare on the map. TF2 delivers new gametypes, a signature art style powered by Valve’s next generation animation technology, persistent player statistics, and more. Unlike other "class-based" games that offer a variety of combat classes only, Team Fortress 2 packs a wild variety of classes which provide a broad range of tactical abilities and personalities, and lend themselves to a variety of player skills. Play as the flame-throwing Pyro, the room clearing Heavy, or the Spy, a master of disguises. Other classes include: Scout, Sniper, Medic, Engineer, Demoman, or Soldier. TF2 features the most advanced graphics of any Source-based game released to date – and the most exciting class-based action ever created.';
TF2.thumbnail ='images/tf2small.jpg';
TF2.banner = 'images/tf2large.jpg';
TF2.addGameToCategory();
var CoD = new Shooter('Call of Duty: Advanced Warfare', 59.99, 'Sledgehammer Games, Raven Software, High Moon Studios', true, true, true, false);
CoD.description = 'Call of Duty: Advanced Warfare predicts the powerful battlegrounds of the future, where both technology and tactics have taken steps to usher in a new era of combat for the franchise. Kevin Spacey is Jonathan Irons -- one of the most notorious men in the world -- shaping this chilling vision of the future of war. The game unfolds in a plausible future in which technological, telesis and today\'s military practices have converged with real world consequences. In this image of the future, Private Military Corporations have become the dominant armed forces for many countries who must outsource their military needs, redrawing borders and rewriting international law. Irons, the founder and president of the world\'s largest PMC, Atlas Corporation, is at the vortex of these tectonic plates. \n Suit up for combat in exoskeletons that advance every facet of a soldier\'s battle readiness, enabling combatants to deploy with an advanced lethality and eliminating the need for specialization. Players tout enhanced player movement and verticality through boost jumps and grappling, covert cloaking abilities, and biomechanics that provide keen strength, awareness, endurance, and speed. With the advent of the exoskeleton and newly advanced armor and weaponry, every soldier commands tactical freedom in any terrain unlike ever before.';
CoD.thumbnail ='images/codsmall.jpg';
CoD.banner = 'images/codlarge.jpg';
CoD.addGameToCategory();
var battlefield = new Shooter('Battlefield 4', 29.99, 'EA Digital Illusions CE', false, true, true, true);
battlefield.description = 'Battlefield 4 is an action blockbuster that aims for unrivaled destruction. Fueled by Frostbite 3, Battlefield 4 allows you to demolish the buildings shielding your enemy. You will lead an assault from the back of a gun boat. Battlefield grants you the freedom to do more and be more while playing to your strengths and carving your own path to victory. Beyond its hallmark multiplayer, Battlefield 4 features an intense, dramatic character-driven campaign that starts with the evacuation of American VIPs from Shanghai and follows your squad\'s struggle to find its way home. Change the landscape in real-time with interactive environments that react to your every move. Dominate land, air and sea with all-new, intense water-based vehicular combat.';
battlefield.thumbnail ='images/bf4small.jpg';
battlefield.banner = 'images/bf4large.png';
battlefield.addGameToCategory();

//Indie
var broforce = new Indie('Broforce', 14.99, 'Free Lives', 4, true, true, true, true);
broforce.description = 'When evil threatens the world, the world calls on Broforce - an under-funded, over-powered paramilitary organization dealing exclusively in excessive force. Brace your loins with up to four players to run ‘n’ gun as dozens of different bros and eliminate the opposing terrorist forces that threaten ';
broforce.thumbnail ='images/broforcesmall.png';
broforce.banner = 'images/broforcelarge.jpg';
broforce.addGameToCategory();
var hotlinemiami = new Indie('Hotline Miami', 9.99, 'Dennaton Games', 1, false, false, true, true);
hotlinemiami.description = 'Step into the neon-soaked underground of 1980s Miami as bizarre messages on your answering machine seem to be urging you to commit terrible acts of violence - but will you obey? Hotline Miami overflows with raw brutality and skull crushing close combat as you find yourself outgunned and using your wits to choreograph your way through impossible situations. An unmistakable visual style, a driving soundtrack, and a surreal plot that will have you question your own thirst for blood. Bash and blast through over 20 multiscreen levels with 35 unique weapons and collect 25 game-altering masks in one of the darkest and most unusual independent games on the scene.';
hotlinemiami.thumbnail ='images/hotlinemiamismall.jpg';
hotlinemiami.banner = 'images/hotlinemiamilarge.jpg';
hotlinemiami.addGameToCategory();
var divekick = new Indie('Divekick', 9.99, 'Iron Galaxy Studios', 2, false, true, true, false);
divekick.description = 'DIVEKICK is a game of intense depth, strategy, and action have all been packed into just two buttons.';
divekick.thumbnail ='images/divekicksmall.jpg';
divekick.banner = 'images/divekicklarge.png';
divekick.addGameToCategory();


//Sports_And_Racing
var fifa = new Sports_And_Racing('FIFA 15', 59.99, 'EA Sports', 2, false, true, true, false);
fifa.description = 'New to this year\'s installment, players have memories and will show emotion based on the context of the match. With over 600 new emotional reactions, players now respond to pivotal moments on the pitch – bad tackles, missed chances, epic goals - as they would in real life. Refined commentary highlights unique fan reactions, while chants and behaviors will be relevant to country or even your club. New bench reactions, side line character animations, 10-man goal celebrations, and more will strive to keep you engaged in the story of the match. Your teammates and opponents now recognize what’s happening in the match and will adjust their tactics just like real players.';
fifa.thumbnail ='images/fifasmall.jpg';
fifa.banner = 'images/fifalarge.png';
fifa.addGameToCategory();
var speedrunners = new Sports_And_Racing('SpeedRunners', 9.99, 'DoubleDutch Games', 4, false, true, true, false);
speedrunners.description = 'Cut-throat multiplayer running game that pits 4 players against each other, locally and/or online. Run, jump, swing around, and use devious weapons and pick-ups to knock opponents off-screen!';
speedrunners.thumbnail ='images/speedrunnerssmall.jpg';
speedrunners.banner = 'images/speedrunnerslarge.jpg';
speedrunners.addGameToCategory();
var f12013 = new Sports_And_Racing('F1 2013', 29.99, 'Codemasters Birmingham , Feral Interactive', 2, false, true, true, true);
f12013.description = 'Make history in FORMULA ONE! F1 2013 features all the cars, stars and circuits from the 2013 FIA FORMULA ONE WORLD CHAMPIONSHIP plus, for the first time, classic content. F1 Classics is an expansive new game mode, introduced by legendary broadcaster Murray Walker, in which you’ll race legendary drivers in famous cars on iconic circuits from the 1980s. This classic content can be played in a range of modes including split-screen and online multiplayer. \n F1 2013 also features all of the new drivers, team moves, tyre changes and remodelled handling to recreate the thrill of racing 2013’s stunning roster of FORMULA ONE cars. New enhancements, improvements plus new, expanded and returning game modes combine to deliver the most complete simulation of a FORMULA ONE season in videogame history.';
f12013.thumbnail ='images/f12013small.png';
f12013.banner = 'images/f12013large.jpg';
f12013.addGameToCategory();
var nba2k15 = new Sports_And_Racing('NBA 2K15', 59.99, 'Visual Concepts', 3, true, true, true, false);
nba2k15.description = 'Nominated for 70 \'Game of the Year\' Awards, the NBA 2K franchise returns with NBA 2K15, our most true-to-life NBA experience yet. Now, for the first time in franchise history, the PC version of NBA 2K15 will be a fully featured Next-Gen experience. Featuring NBA MVP Kevin Durant on the cover and an eclectic soundtrack curated by internationally-renowned artist and producer, Pharrell Williams, NBA 2K15 hits the court with unprecedented life-like graphics, ultra-realistic NBA gameplay, and more. It’s up to you to claim your destiny. \n With full controller support on PC, NBA 2K15 features a number of significant gameplay improvements, including approximately 5,000 new animations, all-new defensive AI, shooting systems, new team-specific play sets, and more control over rebounding, steals, and blocks, making players feel engaged in every basketball decision and action. An upgraded broadcast-style presentation hosted by Ernie Johnson and Shaq delivers authentic commentary and analysis to the action.';
nba2k15.thumbnail ='images/nba2k15small.jpg';
nba2k15.banner = 'images/nba2k15large.jpg';
nba2k15.addGameToCategory();

//Simulation
var arma3 = new Simulation('Arma 3', 12.99, 'Bohemia Interactive', true, true, true, false);
arma3.description = 'Experience true combat gameplay in a massive military sandbox. Deploying a wide variety of single- and multiplayer content, over 20 vehicles and 40 weapons, and limitless opportunities for content creation, this is the PC’s premier military game. Authentic, diverse, open - Arma 3 sends you to war.';
arma3.thumbnail ='images/arma3small.jpg';
arma3.banner = 'images/arma3large.jpg';
arma3.addGameToCategory();
var rct3 = new Simulation('RollerCoaster Tycoon 3', 19.99, 'Chris Sawyer, MicroProse, Frontier Developments', false, false, true, true);
rct3.description = 'Rollercoaster Tycoon 3 Platinum combines the excitement of rollercoasters with the fun of great strategy sim. RCT3 Platinum combines the roller coaster theme park fun of the Roller Coaster Tycoon 3 with included expansion packs Soaked! and Wild! Now enjoy more options than ever.';
rct3.thumbnail ='images/rct3small.png';
rct3.banner = 'images/rct3large.jpg';
rct3.addGameToCategory();
var goatsimulator = new Simulation('Goat Simulator', 9.99, 'Coffee Stain Studios', false, false, true, true);
goatsimulator.description = 'Goat Simulator is the latest in goat simulation technology, bringing next-gen goat simulation to YOU. You no longer have to fantasize about being a goat, your dreams have finally come true! WASD to write history. \n Gameplay-wise, Goat Simulator is all about causing as much destruction as you possibly can as a goat. It has been compared to an old-school skating game, except instead of being a skater, you\'re a goat, and instead of doing tricks, you wreck stuff. Destroy things with style, such as doing a backflip while headbutting a bucket through a window, and you\'ll earn even more points! Or you could just give Steam Workshop a spin and create your own goats, levels, missions, and more! When it comes to goats, not even the sky is the limit, as you can probably just bug through it and crash the game.';
goatsimulator.thumbnail ='images/goatsimulatorsmall.jpg';
goatsimulator.banner = 'images/goatsimulatorlarge.jpg';
goatsimulator.addGameToCategory();


Inventory.push(MOBA_Games, Strategy_Games, MMORPG_Games, RPG_Games, Action_Adventure_Games, Shooter_Games, Indie_Games, Sports_And_Racing_Games, Simulation_Games);
/*console.log('------------- Inventory -------------');
console.log(Inventory);*/

/*console.log('-----MOBA Games-----');
console.log(MOBA_Games);
console.log('-----Strategy Games-----');
console.log(Strategy_Games);
console.log('-----MMORPG Games-----');
console.log(MMORPG_Games);
console.log('-----RPG Games-----');
console.log(RPG_Games);
console.log('-----Action_Adventure Games-----');
console.log(Action_Adventure_Games);
console.log('-----Shooter Games-----');
console.log(Shooter_Games);
console.log('-----Indie Games-----');
console.log(Indie_Games);
console.log('-----Sports Games-----');
console.log(Sports_And_Racing_Games);
console.log('-----Simulation Games-----');
console.log(Simulation_Games);*/



function Admin (){
    this.updateDiscountCode = function(newCode){
        currentdDiscountCode = newCode;
    };
    this.updateDiscountPercent = function(newPercent){
        currentDiscountPercent = newPercent;
    };
    this.addNewGame = function(name, price, category, company, max_local_players, coOp_TF, online_TF, available_on_windows_TF, available_on_mac_TF){
        newGame = new Game();
        newGame.name = name;
        newGame.price = price;
        newGame.category = category;
        newGame.company = company;
        newGame.max_local_players = max_local_players;
        newGame.coOp = coOp_TF;
        newGame.online = online_TF;
        var availableOnWindows = available_on_windows_TF;
        var availableOnMac = available_on_mac_TF;
        newGame.platform = (function(){
            if(availableOnWindows == true && availableOnMac == true){
                return 'Available on Windows and Mac OS X';
            }
            else if (availableOnWindows == true && availableOnMac != true){
                return 'Only Available on Windows';
            }
            else if (availableOnWindows != true && availableOnMac == true){
                return 'Only Available on Mac OS X';
            }
            else{
                return 'Unknown';
            }})();
        newGame.addGameToCategory();
    };
    this.removeGame = function(gameName){
        for (var i in Inventory){
            for (var j in Inventory[i]) {
                if (Inventory[i][j]['name'].toLowerCase() == gameName.toLowerCase()) {
                    Inventory[i].splice(j, 1);
                }
            }
        }
        return Inventory;
    };
    this.updateGameInfo = function(gameName, propertyToUpdate, newPropertyValue){   //use for adding descriptions
        for (var i in Inventory){
            for (var j in Inventory[i]) {
                if (Inventory[i][j]['name'].toLocaleLowerCase() == gameName.toLowerCase()) {
                    Inventory[i][j][propertyToUpdate] = newPropertyValue;
                }
            }
        }
    }
}



function User (username){
    this.name = username;
    var myCart = [];
    var tempSearchArray = [];
    var DiscountMultiplier = 1;
    this.displayCart = function(){
        return myCart;
    };
    this.searchInventory = function(property, value){
        tempSearchArray = [];
        for (var i in Inventory){
            for (var j in Inventory[i])
            if(Inventory[i][j][property] == value){
                tempSearchArray.push(Inventory[i][j]);
            }
        }
        return tempSearchArray;
    };
    this.addToCart = function(gameName){
        for (var i in Inventory){
            for (var j in Inventory[i]) {
                if (Inventory[i][j]['name'] == gameName) {
                    myCart.push(Inventory[i][j]);
                }
            }
        }
        return myCart;
    };
    this.removeFromCart = function(gameName){
        for (var i in myCart){
            if (myCart[i]['name'] == gameName)
            myCart.splice(i, 1);
        }
        return myCart;
    };
    this.calcTotals = function(){
        var Sub_Total = 0;
        var tax = 0;
        var Grand_Total = 0;
        var Discounted_Sub_Total = 0;
        var Ammount_Saved = 0;
        for (var i in myCart){
            Sub_Total += myCart[i]['price'];
        }
        Discounted_Sub_Total = Sub_Total*DiscountMultiplier;
        Discounted_Sub_Total = Math.round(Discounted_Sub_Total * 100)/100;
        Ammount_Saved = Sub_Total - Discounted_Sub_Total;
        Ammount_Saved = Math.round(Ammount_Saved * 100)/100;
        tax = (Discounted_Sub_Total*0.075);
        tax = Math.round(tax * 100)/100;
        Grand_Total = Discounted_Sub_Total + tax;
        Grand_Total = Math.round(Grand_Total * 100)/100;
        console.log('Sub_Total = $' + Sub_Total.toFixed(2));
        console.log('Discounted_Sub_Total = $' + Discounted_Sub_Total.toFixed(2));
        console.log('Ammount Saved = $' + Ammount_Saved.toFixed(2));
        console.log('Sales Tax = $' + tax.toFixed(2));
        console.log('Grand_Total = $' + Grand_Total.toFixed(2));
    };
    this.applyDiscountCode = function(discountCode){
        if (discountCode == currentdDiscountCode){
            DiscountMultiplier = ((100 - currentDiscountPercent)/100);
        }
        else DiscountMultiplier = 1;
    };
}

var Marek = new User('Marek');
var admin1 = new Admin();

/*Marek.addToCart('SpeedRunners');
Marek.addToCart('Hotline Miami');
Marek.addToCart('Grand Theft Auto V');
console.log(Marek.displayCart());
Marek.calcTotals();

Marek.removeFromCart('Hotline Miami');
console.log(Marek.displayCart());
Marek.calcTotals();

Marek.applyDiscountCode('TwentyPercent0ff');
Marek.calcTotals();


admin1.updateDiscountCode('I<3Bronies');
admin1.updateDiscountPercent(50);

Marek.applyDiscountCode('TwentyPercent0ff');
Marek.calcTotals();

Marek.applyDiscountCode('I<3Bronies');
Marek.calcTotals();*/

/*console.log(Marek.searchInventory('price', 0.00));*/





/*console.log(Inventory);


admin1.addNewGame('Tetris', 4.99, 'Indie', 'Some Company', 1, false, false, true, true);
admin1.removeGame('SpeedRunners');
admin1.updateGameInfo('Wildstar', 'price', 99999.99);
admin1.updateGameInfo('grand theft auto V', 'company', 'MarekSchmidtGames')

console.log(Inventory);*/







