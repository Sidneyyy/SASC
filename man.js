var button = $('.button1');
button.on("click", getImage)
var randomImage= $('.randomImage')

var imgArray= ["img1.jpg", "img2.jpg", "img3.jpg", "img4.png", "img5.jpeg", "img6.jpeg", "img8.jpeg"];
function getImage() {
 event.preventDefault();
var randomDec = Math.random();
 var randomNum = randomDec * imgArray.length;
 var index = Math.floor(randomNum);
 console.log(imgArray[index])
randomImage.attr("src", imgArray[index]);
}






// selfcare !!

var button =  $('.button');
button.on("click", getQuote)
var randomQuote= $('.randomQuote')

var quoteArray = ["quote1.png" , "quote2.png" , "quote3.png" , "quote4.png" , "quote5.png" , "quote6.png"];
function getQuote(){
event.preventDefault();
var randomDec = Math.random();
var randomNum = randomDec * quoteArray.length;
var index = Math.floor(randomNum);
console.log(quoteArray[index])
randomQuote.attr("src", quoteArray[index]);
}
