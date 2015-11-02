
$(document).ready(function() {

"use strict"; 
 //   Show the initial view that accepts player name
  
  var playerPath;
  var myPlayer;
  var myEnemy;
  
  $("#player-setup").show();

  /*
    When any button with card__link class is clicked,
    move on to the next view.
   */

  $(".card__link").click(function(e) {
    var nextCard = $(this).attr("next");
    var moveAlong = false;

    switch (nextCard) {
      case "card--class":
        var playerName = $("#player-name").val();
        moveAlong = ($("player-name").val() !== "");
        
        $(".class__link").on("click", function(e) {
          myPlayer = new Human(playerName);
          console.log('myPlayer', myPlayer);
          if ($.inArray($(this).attr("playerPath"), myPlayer.allowedClasses) !== -1) {
            myPlayer.setClass($(this).attr("playerPath"));
          }

          myPlayer.health += myPlayer.class.healthBonus;
          myPlayer.strength += myPlayer.class.strengthBonus;
          myPlayer.intelligence += myPlayer.class.intelligenceBonus;
          
          console.log("myPlayer with class", myPlayer);
          console.log("new Health", myPlayer.health);  
          
          if ($(this).attr("playerPath") === "surprise") {
            myPlayer.generateClass();
          }
        });
        break;
      
      case "card--weapon":
        
        $(".weapon__link").on("click", function(e) {
          if ($(this).attr("playerWeapon") === "dagger") {
            myPlayer.setWeapon("Dagger");
          } else if ($(this).attr("playerWeapon") === "war_axe") {
            myPlayer.setWeapon("WarAxe");
          } else { 
            myPlayer.setWeapon("BroadSword");
          }
            console.log('myPlayer', myPlayer);
        });
        break;
    }


    if (moveAlong) {
      $(".card").hide();
      $("." + nextCard).show();
    }
  });

  /*
    When the back button clicked, move back a view
   */
  $(".card__back").click(function(e) {
    var previousCard = $(this).attr("previous");
    $(".card").hide();
    $("." + previousCard).show();
  });

});