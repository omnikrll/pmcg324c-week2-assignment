var demoModule = document.getElementsByClassName('demo-module');

function swapstyleclasses(event) {
  event.preventDefault();

  console.log(event.target);

  if (demoModule.classList.contains('pink')) {
    demoModule.classList.remove('pink');
    demoModule.classList.add('green');
  } else if (demoModule.classList.contains('green')) {
    demoModule.classList.remove('green');
    demoModule.classList.add('red');
  } else if (demoModule.classList.contains('red')) {
    demoModule.classList.remove('red');
    demoModule.classList.add('pink');
  } else {
    demoModule.classList.add('pink');
  }
}


document.getElementById('clickMe').addEventListener('click', swapColorClasses);
