
$(document).ready(function() {

  /*
    Test code to generate a human player and an orc player
   */
  var warrior = new Human();
  warrior.setWeapon(new Dagger());
  warrior.setClass(new Shadow());
  console.log(warrior.toString());
  console.log('warrior', warrior);

  var orc = new Orc();
  orc.generateClass();
  orc.setWeapon(new BroadSword());
  console.log(orc.toString());
  console.log('orc', orc);

  /*
    Test code to generate a spell
   */
  var spell = new Sphere();
  console.log("spell: ", spell.toString());
  console.log('spell', spell);


  /*
    END OF TEST CODE
  
    Show the initial view that accepts player name
   */

  var kirk;
  var playerPath;
  
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
        var myPlayer = $("#player-name").val();
        myPlayer = new Human(myPlayer);
        moveAlong = (myPlayer !== "");
        break;
      case "card--weapon":
        $(".card__link").on("click", function(e) {
          playerPath = $(this).attr("playerPath");
        });
        console.log('playerPath', playerPath);
        // if ($(this).child().attr("playerPath") === "warrior") {
          // console.log('playerPath is warrior');
        // }
        moveAlong = (kirk.class !== null);
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