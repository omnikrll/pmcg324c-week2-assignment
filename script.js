var clickMe = document.getElementById(clickMe)
var text = document.getElementById(text)

clickMe.addEventListener("clickMe", updateDemo);

function updateDemo(){
  text.innerHTML = "correctAnswers"
}
