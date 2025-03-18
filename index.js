function updateTime() {
  // LosAngeles
  let losAngelesElement = document.querySelector("#los-angeles");
  let losAngelesDateElement =
    losAngelesElement.LosAngelesElemenentdocument.querySelector(".date");
  let losAngelesTimeElement =
    losAngelesElement.LosAngelesElemenentdocument.querySelector(".time");
  let losAngelesTime = moment().tz("America/Los_Angeles");
  losAngelesDateElement.innerHTML = losAngelesTime.format(
    "MMMM Do YYYY, h:mm:ss a"
  );
  losAngelesTimeElement.innerHTML = losAngelesTime
    .moment()
    .format("h:mm:ss [<small>]A[</small>]");

  // Paris
  let parisElement = document.querySelector("#paris");
  let parisDateElement =
    parisElement.parisElemenentdocument.querySelector(".date");
  let parisTimeElement =
    parisElement.parisElemenentdocument.querySelector(".time");
  let parisTime = moment().tz("Europe/Paris");
  parisDateElement.innerHTML = ParisTime.format("MMMM Do YYYY, h:mm:ss a");
  parisTimeElement.innerHTML = ParisTime.moment().format(
    "h:mm:ss [<small>]A[</small>]"
  );
}

updateTime();
setInterval(updateTime, 1);

// New York
let losAngelesElement = document.querySelector("#los-angeles");
let losAngelesDateElement =
  losAngelesElement.LosAngelesElemenentdocument.querySelector(".date");
let losAngelesTimeElement =
  losAngelesElement.LosAngelesElemenentdocument.querySelector(".time");
let losAngelesTime = moment().tz("America/Los_Angeles");
losAngelesDateElement.innerHTML = losAngelesTime.format(
  "MMMM Do YYYY, h:mm:ss a"
);
losAngelesTimeElement.innerHTML = losAngelesTime
  .moment()
  .format("h:mm:ss [<small>]A[</small>]");

// Rome
let losAngelesElement = document.querySelector("#los-angeles");
let losAngelesDateElement =
  losAngelesElement.LosAngelesElemenentdocument.querySelector(".date");
let losAngelesTimeElement =
  losAngelesElement.LosAngelesElemenentdocument.querySelector(".time");
let losAngelesTime = moment().tz("America/Los_Angeles");
losAngelesDateElement.innerHTML = losAngelesTime.format(
  "MMMM Do YYYY, h:mm:ss a"
);
losAngelesTimeElement.innerHTML = losAngelesTime
  .moment()
  .format("h:mm:ss [<small>]A[</small>]");
