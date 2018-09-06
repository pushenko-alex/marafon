window.onload = function(){
  $('.burger').on('click', function () {
    $('.burger-menu').toggleClass('off');
  });
  $('.certificates').slick({
          infinite: false,
          speed: 300,
          slidesToShow: 4,
          focusOnSelect: false,
          prevArrow: null,
          nextArrow: null,
          dots: true,
           unslicked: true,
           responsive: [
    {
      breakpoint: 720,
      settings: {
        slidesToShow: 3      }
    },
     {
      breakpoint: 576,
      settings: {
        slidesToShow: 2     }
    }],
          customPaging: function(slider) {
                    return $('<div class="radius"></div>');
                }
      });
};

function getTimeRemaining(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor((t / 1000) % 60);
  var minutes = Math.floor((t / 1000 / 60) % 60);
  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  var days = Math.floor(t / (1000 * 60 * 60 * 24));
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}

function initializeClock(endtime) {
  var daysTime = document.querySelector('.days');
  var hoursTime = document.querySelector('.hours');
  var minutesTime = document.querySelector('.minutes');
  

  function updateClock() {
    var t = getTimeRemaining(endtime);

    daysTime.innerHTML = t.days;
    hoursTime.innerHTML = ('0' + t.hours).slice(-2);
    minutesTime.innerHTML = ('0' + t.minutes).slice(-2);
    

    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }

  updateClock();
  var timeinterval = setInterval(updateClock, 1000);
}

var deadline="October 01 2018 00:00:00 GMT+0300"; //for Ukraine

initializeClock(deadline);