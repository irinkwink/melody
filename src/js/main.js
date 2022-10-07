$(document).ready(function () {
  console.log('gshjdgf');
  var currentFloor = 2;
  var floorPath = $('.home-image path');
  var counterUp = $('.counter-up');
  var counterDown = $('.counter-down');

  function showFloor(floor) {
    $('.counter').text(floor);
    floorPath.removeClass('current-floor');
    $(`[data-floor = ${floor}]`).toggleClass('current-floor');
  }

  floorPath.on("mouseover", function () {
    currentFloor = $(this).attr('data-floor');
    showFloor(currentFloor);
  })

  counterUp.on("click", function () {
    if (currentFloor < 18) {
      currentFloor++;
      usCurrentFloor = currentFloor.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false})
      showFloor(usCurrentFloor);
    }
  })

  counterDown.on("click", function () {
    if (currentFloor > 2) {
      currentFloor--;
      usCurrentFloor = currentFloor.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false})
      showFloor(usCurrentFloor);
    }
  })
});