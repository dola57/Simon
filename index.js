var array = [];
var click = [];
var count = 0;
var c = 0;

$("body").keypress(function(){
  // var len = array.length+1;
  // for (var i = 0; i < len; i++) {
    $("#level-title").html("Press A Key to Start");
    $(".btn").removeClass("disabledbutton");
    start();
    console.log(click);
  // }
});


$(".btn").click(function() {
    var id = $(this).attr('id');
    var s = "#"+id;
    $(s).animate({
      opacity: '0.5',
    });
    setTimeout(function(){
      $(s).animate({
        opacity: '1',
      });
    }, 200);
    var audpath = "sounds/"+id+".mp3";
    var clicksound = new Audio(audpath);
    clicksound.play();
    click.push(id);
    // setTimeout(function(){
      compareBox();
    // }, 1000);

});


function start(){
  // $("#level-title").html("Press A Key to Start.");
  var random = Math.floor(Math.random()*4)+1;
  switch (random) {
    case 1:
      $("#red").animate({
        opacity: '0.5',
      });
      setTimeout(function(){
        $("#red").animate({
          opacity: '1',
        });
      }, 200);
      var redsound = new Audio("sounds/red.mp3");
      redsound.play();
      array.push("red");
      break;
    case 2:

      $("#yellow").animate({
        opacity: '0.5',
      });
      setTimeout(function(){
        $("#yellow").animate({
          opacity: '1',
        });
      }, 200);
      var yellowsound = new Audio("sounds/yellow.mp3");
      yellowsound.play();
      array.push("yellow");
      break;
    case 3:

      $("#green").animate({
        opacity: '0.5',
      });
      setTimeout(function(){
        $("#green").animate({
          opacity: '1',
        });
      }, 200);
      var greensound = new Audio("sounds/green.mp3");
      greensound.play();
      array.push("green");
      break;
    case 4:

      $("#blue").animate({
        opacity: '0.5',
      });
      setTimeout(function(){
        $("#blue").animate({
          opacity: '1',
        });
      }, 200);
      var bluesound = new Audio("sounds/blue.mp3");
      bluesound.play();
      array.push("blue");
      break;
    default:
  }
  // getClicked();
}


function compareBox(){
      if (array[count]!=click[count]){
        array = [];
        click = [];
        $("body").addClass("wrongeffect");
        setTimeout(function(){
          $("body").removeClass("wrongeffect");
        }, 90);
        var wrong = new Audio("sounds/wrong.mp3");
        wrong.play();
        $("#level-title").html("Game Over! Press A Key to Start again.");
        $(".btn").addClass("disabledbutton");
        c = 0;
      }else if (array[count]==click[count]){
        count++;
        if (array.length == click.length){
          if (array.every((val, index) => val === click[index])){
            count=0;
            click = [];
            // start();
            setTimeout(function(){
              $("#level-title").html("Level " + (++c));
              start();
            }, 1000);
          }
        }
      }

}
