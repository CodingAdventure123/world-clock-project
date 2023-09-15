//Los Angeles

function displayTimeAndDateLA() {
  let losAngelesElement = document.querySelector("#los-angeles");
  // let losAngelesDateElement = document.querySelector("#los-angeles .date");
  let losAngelesDateElement = losAngelesElement.querySelector(".date");
  let losAngelesTimeElement = losAngelesElement.querySelector(".time");
  losAngelesDateElement.innerHTML = moment()
    .tz("America/Los_Angeles")
    .format("MMMM Do, YYYY");
  losAngelesTimeElement.innerHTML = moment()
    .tz("America/Los_Angeles")
    .format("hh:mm:ss A");
}

displayTimeAndDateLA();
setInterval(displayTimeAndDateLA, 1000);

//Tokyo

function displayTimeAndDateTokyo() {
  let tokyoElement = document.querySelector("#tokyo");
  let tokyoDateElement = tokyoElement.querySelector(".date");
  let tokyoTimeElement = tokyoElement.querySelector(".time");
  tokyoDateElement.innerHTML = moment().tz("Asia/Tokyo").format("MMMM Do, YYYY");
  tokyoTimeElement.innerHTML = moment().tz("Asia/Tokyo").format("hh:mm:ss A");
}

displayTimeAndDateTokyo();
setInterval(displayTimeAndDateTokyo, 1000);
