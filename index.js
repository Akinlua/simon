gamePattern=[];
userPattern=[];
userScores=[];
userHighScores=[];
starEarned=[];

var gameColors=['green', 'blue','red','yellow'];
var started=false;

var level=0;

$('.stop').hide();
$('.b').hide();
$('.score').hide();
$('.box').hide();
$('.box2').hide();
$('.sett').hide();
$('.threebtn').hide();
$('.highscore').hide();
$('.starearned').hide();

$('.mybtn').click(function(){

    if(!started){
       
       nextSequence();

       started=true;
       $('.stop').show();
      $('.mybtn').hide();
      $('.b').show();
       $('.score').hide();
   

}
      
});


$('.b').click(function(){
         startOver();
            if(!started){
       
       nextSequence();

       started=true;
       $('.stop').show();
      $('.mybtn').hide();
       $('.score').hide();   
      }
 
});








$(document).keypress(function(){

    if(!started){
    
       nextSequence();

       started=true;
          $('.stop').show();
         $('.mybtn').hide();
      $('.b').show();
       $('.score').hide();
}

});

$('.stop').click(function(){
    startOver();
   $('.mybtn').show();
   $('#level-title').text('press any key Restart');
   $('.stop').hide();
   $('.b').hide();   
})

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
        

        $('.b').show();
        $('.stop').hide();
        var lastLevelPlayed=gamePattern.length;
        userScores.push(lastLevelPlayed);
        var highestScore=Math.max(...userScores);
        userHighScores.push(highestScore);        
        $('#level-title').text('Game over, press any key Restart');
        $('.score').show();
        $('.score').text('Your Score is level  '+ lastLevelPlayed);
        $('.highscore').text('High score: Level ' + highestScore);
        $('.highscore').show();
        $('.starearned').show();
        var highestStarEarned= starEarned[starEarned.length-1]
        $('.starearned').text('Highest Star Earned: ' + highestStarEarned);
        if (userScores[userScores.length-1]===userHighScores[userHighScores.length-1]){
             $('.score').text('New High Score: level  '+ lastLevelPlayed);
        }
        
        startOver();
        
      }
      
}


function nextSequence(){
      userPattern=[];
      level++;
      $('#level-title').text('Level '+ level);
      if (level===5){
         $('#level-title').text('Level 5, good job you earned ⭐');
         starEarned.push('⭐');
         
      }
      else if (level===10){
         $('#level-title').text('Level 10, good job you earned ⭐⭐');
         starEarned.push('⭐⭐');
      }
      else if (level===15){
         $('#level-title').text('Level 15, good job you earned ⭐⭐⭐');
         starEarned.push('⭐⭐⭐');
      }
      else if (level===20){
         $('#level-title').text('Level 20, good job you earned ⭐⭐⭐⭐');
         starEarned.push('⭐⭐⭐⭐');
      }
      else if (level===25){
         $('#level-title').text('Level 25, good job you earned 🌟');
         starEarned.push('🌟');
      }
      else if (level===30){
         $('#level-title').text('Level 30, good job you earned 🌟🌟');
         starEarned.push('🌟🌟');
      }
      else if (level===35){
         $('#level-title').text('Level 35, good job you earned 🌟🌟🌟');
         starEarned.push('🌟🌟🌟');
      }
      else if (level===40){
         $('#level-title').text('Level 40, good job you earned 🌟🌟🌟🌟');
         starEarned.push('🌟🌟🌟🌟');

      }
      else if (level===45){
         $('#level-title').text('Level 45, good job you earned 🌟🌟🌟🌟🌟');
         starEarned.push('🌟🌟🌟🌟🌟');

      }
      else if (level===50){
         $('#level-title').text('Congratulations, you have completed the game. Press any key to restart');
         starEarned.push('🌟🌟🌟🌟🌟');
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



