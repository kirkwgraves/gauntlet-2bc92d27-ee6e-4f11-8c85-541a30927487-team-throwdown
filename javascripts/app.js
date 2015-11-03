
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

    switch (nextCard) {
      case "card--class":
          var playerName = $("#player-name").val();
          moveAlong = ($("player-name").val() !== "");
          
          // Instantiate new Player (protagonist) object
          myPlayer = new Human(playerName);
          console.log('myPlayer', myPlayer);
          
          myEnemy = new Orc();
          // console.log('myEnemy', myEnemy);
          
          myEnemy.generateClass();
          myEnemy.generateWeapon();
          console.log('myEnemy with weapon', myEnemy);

          myEnemy.health += myEnemy.class.healthBonus;
          myEnemy.strength += myEnemy.class.strengthBonus;
          myEnemy.intelligence += myEnemy.class.intelligenceBonus;          
          console.log('myEnemy with updated stats', myEnemy);

        $(".class__link").on("click", function(e) {
          
          if ($.inArray($(this).attr("playerPath")), myPlayer.allowedClasses !== -1) {
            myPlayer.setClass($(this).attr("playerPath"));
          }

          myPlayer.health += myPlayer.class.healthBonus;
          myPlayer.strength += myPlayer.class.strengthBonus;
          myPlayer.intelligence += myPlayer.class.intelligenceBonus;
          
          console.log("myPlayer", myPlayer);
          console.log("myPlayer Updated Health", myPlayer.health);
          console.log('myPlayer Updated Intelligence', myPlayer.intelligence);  
          
        });
        break;
      
      case "card--weapon":
        
        $(".weapon__link").on("click", function(e) {
          if ($(this).attr("playerWeapon") === "dagger") {
            myPlayer.weapon = new Dagger();
          } else if ($(this).attr("playerWeapon") === "war_axe") {
            myPlayer.weapon = new WarAxe();
          } else {
            myPlayer.weapon = new BroadSword();
          }
            console.log('myPlayer', myPlayer);
        });
        break;

      case "card--battleground":
        
        $(".attack__link").on("click", function(e) {
          
          var win = function() {
            $("#playerWins").removeClass(".isHidden");
          }

          var lose = function() {
            $("#enemyWins").removeClass(".isHidden");
          }

          var tie = function() {
            $("#tie").removeClass(".isHidden");          
          }
          

            // Decrement myPlayer's health after attack
            myPlayer.health -= Math.round((myEnemy.weapon.damage + myPlayer.strength - 75) - (myPlayer.intelligence/6));
            // Decrement myEnemy's health after attack
            myEnemy.health -= Math.round((myPlayer.weapon.damage + myEnemy.strength - 65) - (myEnemy.intelligence/6));

          $("#playerDiv").text("YOUR HEALTH: " + myPlayer.health);
          $("#enemyDiv").text("YOUR ENEMY'S HEALTH: " + myEnemy.health);
           
        });
      } 
        
    });


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