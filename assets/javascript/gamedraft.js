//word guess

//computer has choices to choose from (at random)
var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
//declare wins, losses, and ties and guesses
var wins;
var losses;
var ties;
var guesses;
//reset function to tag under either loss tie or win >>RESETTING GUESSING
function reset(x){
    x=0;
}



//user types letter, compuer recieves, compares and shows to user 

document.onkeyup= function(event){
    document.getElementById("letters").innerHTML= event.key +",";
    //userText + ",";
}


//guesses loop 
//compare user to computer

//if user is wrong, guesses increse by 1 and letter is displayed
//if user is right, reset guesses and win increaseby 1
//if tied, declare tie and reset guess tie go up by 1


//count your wins, losses, ties, 

//keep track of your guesses to prevent typing the same letter

//let user knowif they already pressed letter
