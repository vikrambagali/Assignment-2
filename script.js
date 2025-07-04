// assighning the value to the variable
var start = new Date().getTime();
var end = new Date().getTime();
// Function to generate a random color in hexadecimal format
// This function generates a random color in hexadecimal format
function getRandomColor() {
var letters = "0123456789ABCDEF";
var color = "#";
for (var i = 0; i < 6; i++) {
    color += letters.charAt(Math.floor(Math.random() * 16));
}
return color;
}
// This function moves the shape to a random position and size
// It also changes the background color of the shape
function move(){
    var left;
    var top;
    var wh;
    left = Math.floor(Math.random() * 300);
    top = Math.floor(Math.random() * 300);
    wh = Math.floor(Math.random() * 400) + 100; // Width and height between 100 and 500
    var shape = document.getElementById("shape");
    shape.style.backgroundColor = getRandomColor();
    shape.style.left = left + "px";
    shape.style.top = top + "px";
    shape.style.width = wh + "px";
    shape.style.height = wh + "px";
    document.getElementById("shape").style.display = "block";
    start = new Date().getTime();
}
// This function is called when the page loads to start the game
move();
// onclicking the shape
// This function is called when the shape is clicked
document.getElementById("shape").onclick = function() {
    document.getElementById("shape").style.display = "none";
    end = new Date().getTime();
    var timeTaken = (end - start) / 1000; //    Convert milliseconds to seconds
    console.log("Time taken: " + timeTaken + " seconds");
    alert("You clicked the shape in " + timeTaken + " seconds!");
    move();
}