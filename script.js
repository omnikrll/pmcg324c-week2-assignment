var clickMe = document.getElementById("clickMe");
var text = document.getElementById("text");

// document.querySelector('#clickMe');
// document.querySelector('#text');
// document.querySelectorAll('.answers p');
// document.getElementsByClassName('.answers')[0].getElementsByTagName('p');

var div = document.querySelectorAll('.demo-module')[0];

clickMe.addEventListener("click", updateDemo);

function updateDemo(){
  text.innerHTML = "Your answers are correct!";
  console.log(div.classList);
  div.classList.add('different');
}
