x = 0;
y = 0;
draw_circle = "";
draw_rect = "";

draw_apple = "";

var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function start()
{
  document.getElementById("status").innerHTML = "System is listening please speak";  
  recognition.start();
} 
 
recognition.onresult = function(event) {

 console.log(event); 

 content = event.results[0][0].transcript;

    document.getElementById("status").innerHTML = "The speech has been recognized: " + content; 

}

function setup() {
canvas = createCanvas(900, 600);
}

function draw() {
  if(draw_circle == "set")
  {
    radius = Math.floor(Math.random() * 100);
    circle(x,y,radius)
    document.getElementById("status").innerHTML = "Circle is drawn";
    draw_circle = "";
  }
  if(draw_rect == "set")
  {
    rec(x,y,70,50);
    document.getElementById("status").innerHTML = "Rectangle is drawn";
    draw_rect = "";
  }
}

function speak(){
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    speak_data = "";
}

if(content == "circle")
{
  x = Math.floor(Math.random() * 900);
  y = Math.floor(Math.floor(Math.random) * 600);
  document.getElementById("status").innerHTML = "Started drawing circle";
  draw_circle = "set";
}

if (content == "rectangle")
{
  x = Math.floor(Math.random() * 900);
  y = Math.floor(Math.floor(Math.random) * 600);
  document.getElementById("status").innerHTML = "Started drawing rec";
  draw_rec = "set";
}
