function expandOptions(boxId) {
  var box = document.getElementById(boxId);
  var options = box.querySelector('.options');
  var allBoxes = document.querySelectorAll('.box');

  if (!event.target.closest('.options')) {
    allBoxes.forEach(function (otherBox) {
      if (otherBox !== box) {
        var otherOptions = otherBox.querySelector('.options');
        otherOptions.style.display = 'none';
        otherBox.style.height = '80px';
        otherBox.style.backgroundColor = otherBox.style.display === 'block' ? '#FFF9FA' : 'white';
        
        otherBox.style.border = otherBox.style.display === 'none' ? '1px solid #FF6B82' : '1px solid #C8C8C8';


        var otherRadio = otherBox.querySelector('input[type="radio"]');
        if (otherRadio) {
          otherRadio.checked = false;
        }
      }
    });

    options.style.display = options.style.display === 'none' ? 'block' : 'none';
    box.style.height = options.style.display === 'none' ? '80px' : '185px';
    box.style.backgroundColor = options.style.display === 'block' ? '#FFF9FA' : 'white';

    box.style.border = options.style.display === 'block' ? ' 1px solid #FF6B82' : '1px solid #C8C8C8';

    var currentRadio = box.querySelector('input[type="radio"]');
    if (currentRadio) {
      currentRadio.checked = true;
    }
    
  }
}

