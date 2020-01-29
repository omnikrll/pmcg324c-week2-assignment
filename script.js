

var Module = document.getElementsByClassName('demo-module')[0];

function swapStyle(event) {

  if (Module.classList.contains('bold')) {
    Module.classList.remove('bold');
    Module.classList.add('italic');
  } else if (Module.classList.contains('italic')) {
    Module.classList.remove('italic');
    Module.classList.add('serif');
  } else {
    Module.classList.remove('serif');
    Module.classList.add('bold');
  }
}

document.getElementById('clickMe').addEventListener('click', swapStyle);