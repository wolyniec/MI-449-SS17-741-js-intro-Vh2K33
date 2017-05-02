var bootsplay = document.getElementById("boots");
var andplay = document.getElementById("and");
var catsplay = document.getElementById("cats");
var aboots = new Audio('boots.wav');
var aand = new Audio('and.wav');
var acats = new Audio('cats.wav');
//  ALMOST DONE, JUST DROP THE AUDIO PLAY TAGS IN HERE I GUESS?
bootsplay.addEventListener('click',function(){
  // OR MAYBE IT COULD GO HERE? EXPLORE YOUR OPTIONS
  aboots.play();
})
andplay.addEventListener('click',function(){
  aand.play();
})
catsplay.addEventListener('click',function(){
  acats.play();
})
