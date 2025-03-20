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

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }

  let cityName = cityTimeZone.replace("_", "").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = cityTimeZone;
  citiesElement = (
    <div class="city">
      <div>
        <h2>${cityTimeZone}</h2>
        <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
      </div>
      <div class="time">
        ${cityTime.format("h:mm:ss")} <small> ${cityTime.format("A")} </small>
      </div>
    </div>
  );
}

updateTime();
setInterval(updateTime, 1);

let citiesSelect = document.querySelector("#cities");
citiesSelect.addEventListener("change", updateCity);

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
