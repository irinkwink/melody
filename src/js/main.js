$(document).ready(function () {
  console.log('gshjdgf');
  var currentFloor = 2;
  var floorPath = $('.home-image path');
  var counterUp = $('.counter-up');
  var counterDown = $('.counter-down');
  var modal = $('.modal');
  var modalClose = $('.modal-close');
  var viewFlatsBtn = $('.view-flats');
  var flatPath = $('.flats path');
  var flatLink = $('.flat-link');

  function showFloor(floor) {
    $('.counter').text(floor);
    floorPath.removeClass('current-floor');
    $(`[data-floor = ${floor}]`).toggleClass('current-floor');
  }

  function showFlat(flat) {
    flatPath.removeClass('current-flat');
    flatLink.removeClass('current-flat-link');
    $(`[data-flat = ${flat}]`).toggleClass('current-flat');
    $(`[data-flat-num = ${flat}]`).toggleClass('current-flat-link');
  }

  floorPath.on("mouseover", function () {
    currentFloor = $(this).attr('data-floor');
    showFloor(currentFloor);
  })

  flatPath.on("mouseover", function () {
    showFlat($(this).attr('data-flat'));
  })

  flatLink.on("mouseover", function () {
    showFlat($(this).attr('data-flat-num'));
  })

  floorPath.on("click", toggleModal);
  viewFlatsBtn.on("click", toggleModal);

  modalClose.on("click", toggleModal);

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
  });

  function toggleModal() {
    modal.toggleClass('is-open');
  }
});