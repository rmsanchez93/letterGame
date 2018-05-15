//3. Guess what letter I'm thinking of
var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var comGuess= computerChoices[Math.floor(Math.random() *26)];

var list = [];



console.log(comGuess);

//4. Wins: (# of times the user has guessed the letter correctly)
var wins=0; 
//5. Losses: (# of times the user has failed to guess the letter correctly after exhausting all guesses)
var losses=0;
//6. Guesses Left: (# of guesses left. This will update)
var guesses=10;
//7. Your Guesses So Far: (the specific letters that the user typed. Display these until the user either wins or loses.)
document.onkeyup = function(event){
    var userGuess= event.key;
    //console.log(computerChoices.indexOf(userGuess,0));

    
    
   
  


    if(userGuess === comGuess){
        // When the player wins, increase the Wins counter and start the game over again (without refreshing the page).
        alert("YOU WIN!!");
        wins++;
        guesses=10;
        list.length=0;
        var newGuess= computerChoices[Math.floor(Math.random()*26)];
        comGuess=newGuess;
        console.log("new guess is :" + newGuess);
               

    }else{
        //if you don't guess correctly, guesses drop by 1, display letter you guessed, if guesses left are more than 0, i want to add to the list of letters guessed.
        guesses--;
        document.getElementById("letters").innerHTML= "Letters Guessed : " +userGuess;
       if(guesses>0){
           list.push(userGuess);
           document.getElementById("letters").innerHTML="Letters Guessed : " + list.toString() +" ";
           
                  }
        
    }
    if(guesses === 0){
        alert("sorry bud the letter I was looking for was: "+ comGuess);
        losses++;
        guesses=10;
        list.length=0;
        var newGuess= computerChoices[Math.floor(Math.random()*26)];
        comGuess=newGuess;
        console.log("new guess is :" + newGuess);

    }
    document.getElementById("wins").innerHTML= "Wins : " + wins;
    document.getElementById("losses").innerHTML= "Losses: " + losses;
    document.getElementById("guessesLeft").innerHTML= "Guesses Left : " +guesses;

   // var node = document.createElement("LI");                 // Create a <li> node
   // var textnode = document.createTextNode("Water");         // Create a text node
   // node.appendChild(textnode);                              // Append the text to <li>
   // document.getElementById("myList").appendChild(node);     // Append <li> to <ul> with id="myList"
   
}


//9. When the player loses, increase the Losses counter and restart the game without a page refresh (just like when the user wins).






