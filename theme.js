var CountdownBarSection = /*#__PURE__*/function () {
    function CountdownBarSection(container) {
      _classCallCheck(this, CountdownBarSection);

      this.element = container;

      this._countdownDate();
    }

    _createClass(CountdownBarSection, [{
      key: "onUnload",
      value: function onUnload() {
        this.carousel.destroy();
      }
    },  {
      key: "_countdownDate",
      value: function _countdownDate() {
        var dateElements = this.element.querySelector('[data-date]'),
            displayDate = dateElements.querySelector('[display-date]'),
            displayDays = dateElements.querySelector('[display-days]'),
            displayHours = dateElements.querySelector('[display-hours]'),
            displayMinutes = dateElements.querySelector('[display-minutes]'),
            displaySeconds = dateElements.querySelector('[display-seconds]'),
            newData = dateElements.getAttribute('data-date');
        
        //console.log(data)
        //console.log(displayDate)

        var countDownDate = new Date(newData).getTime();

        // Update the count down every 1 second
        var x = setInterval(function() {

          // Get today's date and time
          var now = new Date().getTime();

          // Find the distance between now and the count down date
          var distance = countDownDate - now;

          // Time calculations for days, hours, minutes and seconds
          var days = Math.floor(distance / (1000 * 60 * 60 * 24));
          var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
          var seconds = Math.floor((distance % (1000 * 60)) / 1000);

          // displayDate.innerHTML = days + "d " + hours + "h "
          // + minutes + "m " + seconds + "s ";

          displayDays.innerHTML = days + "d";
          displayHours.innerHTML = hours + "h";
          displayMinutes.innerHTML = minutes + "m";
          displaySeconds.innerHTML = seconds + "s";

          // If the count down is finished, write some text
          if (distance < 0) {
            clearInterval(x);
            //displayDate.innerHTML = "EXPIRED";
            displayDays.innerHTML = "0d";
            displayHours.innerHTML = "0h";
            displayMinutes.innerHTML = "0m";
            displaySeconds.innerHTML = "0s";
          }
        }, 1000);
        
      }
    }]);
 
    return CountdownBarSection;
  }();

//Section register
sections.register('countdown-bar', CountdownBarSection); // home
