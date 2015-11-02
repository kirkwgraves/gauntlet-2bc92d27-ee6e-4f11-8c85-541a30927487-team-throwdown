
$(document).ready(function() {

 
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
    var moveAlong = true;
    var playerName = $("#player-name").val();

    switch (nextCard) {
      case "card--class":
        
        
        $(".class__link").on("click", function(e) {
          myPlayer = new Human(playerName);
          if ($.inArray($(this).attr("playerPath"), myPlayer.allowedClasses) !== -1) {
            myPlayer.setClass($(this).attr("playerPath"));
          }  
            console.log('myPlayer', myPlayer);
          if ($(this).attr("playerPath") === "surprise") {
            myPlayer.generateClass();
            console.log('myPlayer', myPlayer);
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