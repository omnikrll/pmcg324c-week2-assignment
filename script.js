var clickMe = document.getElementById(clickMe)
var text = document.getElementById(text)

clickMe.addEventListener("click", updateDemo);

function updateDemo(){
  text.innerHTML = "correctAnswers"
}
