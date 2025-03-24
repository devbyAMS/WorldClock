document.addEventListener("DOMContentLoaded", function () {
  const originalHTML = document.querySelector("#cities").innerHTML;

  function updateTime() {
    const cities = [
      { id: "los-angeles", timeZone: "America/Los_Angeles" },
      { id: "paris", timeZone: "Europe/Paris" },
      { id: "new-york", timeZone: "America/New_York" },
      { id: "Auckland", timeZone: "Pacific/Auckland" },
    ];

    cities.forEach((city) => {
      const element = document.querySelector(`#${city.id}`);
      if (element) {
        const dateElement = element.querySelector(".date");
        const timeElement = element.querySelector(".time");
        const now = moment().tz(city.timeZone);
        dateElement.innerHTML = now.format("MMMM Do YYYY");
        timeElement.innerHTML = now.format("h:mm:ss [<small>]A[</small>]");
      }
    });
  }

  function updateCity(event) {
    let cityTimeZone = event.target.value;
    if (cityTimeZone === "") return;

    if (cityTimeZone === "all") {
      document.querySelector("#cities").innerHTML = originalHTML;
      updateTime(); // wichtig: nach Reset neu ausführen!
      return;
    }

    if (cityTimeZone === "current") {
      cityTimeZone = moment.tz.guess();
    }

    const now = moment().tz(cityTimeZone);
    const cityName = cityTimeZone.split("/")[1].replace("_", " ");
    const citiesElement = document.querySelector("#cities");

    citiesElement.innerHTML = `
      <div class="city">
        <div>
          <h2>${cityName}</h2>
          <div class="date">${now.format("MMMM Do YYYY")}</div>
        </div>
        <div class="time">${now.format("h:mm:ss")} <small>${now.format(
      "A"
    )}</small></div>
      </div>
    `;
  }

  updateTime(); // initiale Anzeige aller Städte
  setInterval(updateTime, 1000); // regelmäßiges Update

  const citySelectElement = document.querySelector("#city");
  citySelectElement.addEventListener("change", updateCity);
});
