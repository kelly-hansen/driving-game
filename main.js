var data = {
  direction: 'east'
};

var $car = document.querySelector('img');

document.addEventListener('keydown', function (e) {
  if (e.code === 'ArrowUp') {
    data.direction = 'north';
  } else if (e.code === 'ArrowRight') {
    data.direction = 'east';
  } else if (e.code === 'ArrowDown') {
    data.direction = 'south';
  } else if (e.code === 'ArrowLeft') {
    data.direction = 'west';
  }
  $car.className = data.direction;
});
