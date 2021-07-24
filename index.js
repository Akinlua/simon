gamePattern=[];
userPattern=[];
var gameColors=['green', 'blue','red','yellow'];
var started=false;

var level=0

$('.mybtn').click(function(){

    if(!started){
       
       nextSequence();

       started=true;
       $('.mybtn').hide();
}
      

});

$(document).keypress(function(){

    if(!started){
    
       nextSequence();

       started=true;
       $('.mybtn').hide(); 
}

});

$('.btn').click(function(){

    userChosenColor=$(this).attr('id');
    userPattern.push(userChosenColor);
    playSound(userChosenColor);
    animatePress(userChosenColor);
    
    startGame(userPattern.length-1);
});

 
function startGame(presentKey){

    if (gamePattern[presentKey]===userPattern[presentKey]){
       console.log('right');
       if (gamePattern.length===userPattern.length){
         setTimeout(function(){  
           nextSequence();
         },1000)
       }
    }  else { 
         console.log('wrong');
         $('body').addClass('game-over');
         setTimeout(function(){
           $('body').removeClass('game-over');
        },100);

        playSound('wrong');
        $('#level-title').text('Game over, click restart or press any key to start again');
        $('.mybtn').show();
        $('.mybtn').text('Restart');
        startOver();
      }
      
}


function nextSequence(){
      userPattern=[];
      level++;
      $('#level-title').text('Level '+ level);
      if (level===5){
         $('#level-title').text('Level 5, good job you earned ⭐');
      }
      else if (level===10){
         $('#level-title').text('Level 10, good job you earned ⭐⭐');
      }
      else if (level===15){
         $('#level-title').text('Level 15, good job you earned ⭐⭐⭐');
      }
      else if (level===20){
         $('#level-title').text('Level 20, good job you earned ⭐⭐⭐⭐');
      }
      else if (level===25){
         $('#level-title').text('Level 25, good job you earned 🌟');
      }
      else if (level===30){
         $('#level-title').text('Level 30, good job you earned 🌟🌟');
      }
      else if (level===35){
         $('#level-title').text('Level 35, good job you earned 🌟🌟🌟');
      }
      else if (level===40){
         $('#level-title').text('Level 40, good job you earned 🌟🌟🌟🌟');

      }
      else if (level===45){
         $('#level-title').text('Level 45, good job you earned 🌟🌟🌟🌟🌟');

      }
      else if (level===50){
         $('#level-title').text('Congratulations, you have completed the game. Press any key to restart');
         $('.mybtn').show();
         $('.mybtn').text('Restart');
         startOver();
      }
      var randomNumber= Math.floor(Math.random()*4);      
      randomChosenColor = gameColors[randomNumber];
      gamePattern.push(randomChosenColor);
      $("#"+randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
      playSound(randomChosenColor);
      
     
   
}

function playSound(currentKey){

    var audio =new Audio('sounds/'+currentKey+'.mp3');
    audio.play();
}


function animatePress(currentKey){

     $('#'+currentKey).addClass('pressed');

     setTimeout(function(){
     $('#'+currentKey).removeClass('pressed');
},100);
}

function startOver(){
    started=false;
    level=0;
    gamePattern=[];
}



