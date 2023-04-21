//auto background color change 
var colors = ['#DD982C', '#FF814C', '#414345','#006C91','#5B4280']; // background colors
var changeBackground = function() {
    document.body.style.background = colors[Math.floor(Math.random()*colors.length)]; // function to change the var color
};
changeBackground();