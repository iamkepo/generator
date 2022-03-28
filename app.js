var app = document.querySelector(".app");
var btn = document.querySelector(".btn");
var red = document.querySelector(".red");
var green = document.querySelector(".green");
var blue = document.querySelector(".blue");
var alpha = document.querySelector(".alpha");

var index = 0;
var step = 5;
var limite = 255;
var rgba = {
  red: 255,
  green: 255,
  blue: 255,
  alpha: 255
};

function increment(param) {
  if (rgba[param]+step < 256) {
    rgba[param] = rgba[param]+step;
    var color = "rgba("+rgba.red+","+rgba.green+","+rgba.blue+","+rgba.alpha+")";

    console.log({"color" : color});

    app.style.backgroundColor= color;
    red.style.backgroundColor= "rgba("+rgba.red+",0,0,"+rgba.alpha+")";
    green.style.backgroundColor= "rgba(0,"+rgba.green+",0,"+rgba.alpha+")";
    blue.style.backgroundColor= "rgba(0,0,"+rgba.blue+","+rgba.alpha+")";
    alpha.style.backgroundColor= "rgba(0,0,0,"+rgba.alpha+")";
  }
}

function decrement(param) {
  if (rgba[param]-step > 0) {
    rgba[param] = rgba[param]-step;
    var color = "rgba("+rgba.red+","+rgba.green+","+rgba.blue+","+rgba.alpha+")";

    console.log({"color" : color});

    app.style.backgroundColor= color;
    red.style.backgroundColor= "rgba("+rgba.red+",0,0,"+rgba.alpha+")";
    green.style.backgroundColor= "rgba(0,"+rgba.green+",0,"+rgba.alpha+")";
    blue.style.backgroundColor= "rgba(0,0,"+rgba.blue+","+rgba.alpha+")";
    alpha.style.backgroundColor= "rgba(0,0,0,"+rgba.alpha+")";
  }
}

var cursor = document.querySelector('.cursor');
var cursor2 = document.querySelector('.cursor2');

document.addEventListener('mousemove', function(e){
  var x = e.clientX;
  var y = e.clientY;
  cursor2.style.left = x + 'px';
  cursor2.style.top = y + 'px';
  cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`;
});