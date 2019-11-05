var first = document.querySelector("h1#first");
var second = document.querySelector("h1#second");
var img = document.querySelector("img");
var carousel = document.querySelector("div#carousel");
var body = document.querySelector("body");
var coverimg = document.querySelector("img.coverimg");






// aboutme button function
document.querySelector("#aboutme").addEventListener("click", function(){

  (carousel).classList.toggle("aboutafter");
  (coverimg).classList.toggle("coverimg1");
  (opbutton).classList.toggle("visible");
});






// H1 animation
setInterval(function(){
  (first).classList.toggle("goaway"); }, 6000);
setInterval(function(){(second).classList.toggle("hm"); }, 6000);
setInterval(function(){(second).classList.toggle("hm2"); }, 6000);



// // Background image animation
// setInterval(function(){
//   (coverimg).src = "imagesm/sky.jpg"; }, 3000);
