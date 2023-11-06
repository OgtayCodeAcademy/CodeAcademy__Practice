let country_cards = document.querySelector(".countries");
let search = document.querySelector("#search");

axios.get("https://restcountries.com/v3.1/all").then((result) => {
  let countries = result.data;
//   console.log(countries);
  countries.forEach((country) => {
    // console.log(country.name);
    country_cards.innerHTML += `
        <a href="./details.html?name=${country.name.common}">
            <div class="col-3">
                <div class="image-wrapper">
                    <img src="${country.flags.png}" alt="${country.name.common}">
                </div>
                <h1>${country.name.common}</h1>
                <h2 style="color: green;">${country.population}</h2>
                <h3>${country.capital}</h3>
                <p style="color: red;">${country.area}</p>
            </div>
        </a>`;
  });
});

search.addEventListener("keyup", function () {
  country_cards.innerHTML = "";
  axios.get("https://restcountries.com/v3.1/all").then((result) => {
    let countries = result.data;
    countries.forEach((country) => {
      if (
        country.name.common
          .toLowerCase()
          .includes(search.value.toLowerCase().trim())
      ) {
        country_cards.innerHTML += `
        <a href="./details.html?name=${country.name.common}">
            <div class="col-3">
                <div class="image-wrapper">
                    <img src="${country.flags.png}" alt="${country.name.common}">
                </div>
                <h1>${country.name.common}</h1>
                <h2 style="color: green;">${country.population}</h2>
                <h3>${country.capital}</h3>
                <p style="color: red;">${country.area}</p>
            </div>
        </a>
        `
      }
    });
  });
});
