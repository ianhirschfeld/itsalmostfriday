var $pageTitle, $pageSubtitle, $countdown;

$(document).ready(function() {
  $pageTitle = $('.page-title');
  $pageSubtitle = $('.page-subtitle');
  $countdown = $('.countdown');

  var d = new Date();
  var day = d.getDay();

  if (day == 5) { // Friday
    setupFriday();
  } else if (day == 0 || day == 6) { // Sunday and Saturday
    setupWeekend();
  } else { // Monday-Thursday
    setupAlmostFriday(day == 4);
  }
});

var setupFriday = function() {
  $(".twitter-timeline").attr("href", "https://twitter.com/hashtag/TGIF").attr("data-widget-id", "840664010827616256");
  $pageTitle.html("Congratulations, it's Friday!");
  $pageSubtitle.html("You've made it, the weekend is at your finger tips...");
  $countdown.hide();
};

var setupWeekend = function() {
  $(".twitter-timeline").attr("href", "https://twitter.com/hashtag/ItsTheWeekend").attr("data-widget-id", "840988775073234944");
  $pageTitle.html("It's the weekend!");
  $pageSubtitle.html("Relax, don't worry about Friday...");
  $countdown.hide();
};

var setupAlmostFriday = function(isThursday = false) {
  $(".twitter-timeline").attr("href", "https://twitter.com/hashtag/ItsAlmostFriday").attr("data-widget-id", "840456498455044096");
  if (isThursday) {
    $pageTitle.html("It's <span class='almost is-i'>almost</span> Friday!");
  } else {
    $pageTitle.html("It's <span class='almost'>almost</span> Friday!");
  }
  $pageSubtitle.html(getPhrase());
  $countdown.show();
  countdown();
};

var getPhrase = function() {
  var phrases = new Array();
  phrases.push("Hang in there...");
  phrases.push("You've almost made it...");
  phrases.push("Keep on moving...");
  phrases.push("Don't give up...");
  phrases.push("You can do it...");
  phrases.push("You can make it...");
  phrases.push("Stay strong...");
  phrases.push("Almost there...");
  phrases.push("Keep going...");
  phrases.push("It'll be here soon...");
  phrases.push("So close...");
  var random = Math.floor(Math.random() * phrases.length);
  return phrases[random];
}

var countdown = function() {
  var today = new Date();
  var theYear = today.getFullYear();
  var theMonth = today.getMonth();
  var theDate = today.getDate();
  var theDay = today.getDay();
  var theHour = today.getHours();
  var theMinute = today.getMinutes();
  var theSecond = today.getSeconds();

  var daysTillFriday = 5 - theDay;
  if (theDay > 5) {
    daysTillFriday = Math.abs(daysTillFriday) + 5;
  }

  var nextFriday = theDate + daysTillFriday;
  nextFriday = new Date(theYear,theMonth,nextFriday,0,0,0);

  var timeToGo = Date.parse(nextFriday) - Date.parse(today);

  var daysToGo = Math.floor(timeToGo / 86400000);
  timeToGo = timeToGo - (daysToGo * 86400000);

  var hoursToGo = Math.floor(timeToGo / 3600000);
  timeToGo = timeToGo - (hoursToGo * 3600000);

  var minutesToGo = Math.floor(timeToGo / 60000);
  timeToGo = timeToGo - (minutesToGo * 60000);

  var secondsToGo = Math.floor(timeToGo / 1000);

  if (hoursToGo < 10) {
    hoursToGo = '0' + hoursToGo;
  }

  if (minutesToGo < 10) {
    minutesToGo = '0' + minutesToGo;
  }

  if (secondsToGo < 10) {
    secondsToGo = '0' + secondsToGo;
  }

  var theCountdown = '0' + daysToGo + ':' + hoursToGo + ':' + minutesToGo + ':' + secondsToGo;
  $countdown.html(theCountdown);

  setTimeout('countdown()', 1000);
};
