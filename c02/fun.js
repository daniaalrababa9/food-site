'use strict'

var foodpicture = function() {
  // input
  var choice = prompt('What is the type of food that you are eating most? is it junk food or healthy food');
  var picture; 
  while (choice !== 'junk food' && choice !== 'healthy food'){
   choice = prompt( 'please enter that again' )
   }
  // processing
  if (choice === 'junk food') {
    picture = '<img src="https://www.livetradingnews.com/wp-content/uploads/2016/06/junk-food1-701x419.jpg">'
  } else if (choice === 'healthy food') {
    picture = '<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb1b4aUkeDLpqVONYk2mC2NyDkCHHY_gGu9DopVujRIXQshhCv">'
  }


  
  // output
  return picture;
}