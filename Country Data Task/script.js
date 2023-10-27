let API = fetch("https://restcountries.com/v3.1/all");
let datas = document.querySelector(".cards-row");
let input = document.querySelector(".form-control");
let search = document.querySelector(".btn-outline-success");
let sort_button = document.querySelector(".btn-sort");

document.addEventListener("DOMContentLoaded", function () {
  async function GetData() {
    let response = await API;
    let data = await response.json().then((value) => {
      value.forEach((element) => {
        datas.innerHTML += `<div class="card mt-3" style="width: 18rem;">
                  <img src="${element.flags.png}" class="card-img-top" alt="...">
                  <div class="card-body">
                      <h3 class="card-title">Name: ${element.name.common}</h3>
                      <hr>
                      <h4 class="card-text">Capital: ${element.capital}</h4>
                      <hr>
                      <h5 class="card-text">Population: ${element.population}</h5>
                  </div>
              </div>
                  `;
      });
      search.addEventListener("click", (event) => {
        datas.innerHTML = "";
        value.forEach((element) => {
          if (
            JSON.stringify(element.name.common)
              .toLowerCase()
              .includes(input.value.toLowerCase().trim())
          ) {
            datas.innerHTML += `<div class="card mt-3" style="width: 18rem;">
                      <img src="${element.flags.png}" class="card-img-top" alt="...">
                      <div class="card-body">
                          <h3 class="card-title">Name: ${element.name.common}</h3>
                          <hr>
                          <h4 class="card-text">Capital: ${element.capital}</h4>
                          <hr>
                          <h5 class="card-text">Population: ${element.population}</h5>
                      </div>
                  </div>
                      `;
          }
        });
      });
      input.addEventListener("keyup", (event) => {
        datas.innerHTML = "";
        value.forEach((element) => {
          if (
            JSON.stringify(element.name.common)
              .toLowerCase()
              .includes(input.value.toLowerCase().trim())
          ) {
            datas.innerHTML += `<div class="card mt-3" style="width: 18rem;">
                      <img src="${element.flags.png}" class="card-img-top" alt="...">
                      <div class="card-body">
                          <h3 class="card-title">Name: ${element.name.common}</h3>
                          <hr>
                          <h4 class="card-text">Capital: ${element.capital}</h4>
                          <hr>
                          <h5 class="card-text">Population: ${element.population}</h5>
                      </div>
                  </div>
                      `;
          }
        });
      });
      sort_button.addEventListener("click", (event) => {
        datas.innerHTML = "";
        value.forEach((element) => {
          datas.innerHTML.sort += `<div class="card mt-3" style="width: 18rem;">
                        <img src="${element.flags.png}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h3 class="card-title">Name: ${element.name.common}</h3>
                            <hr>
                            <h4 class="card-text">Capital: ${element.capital}</h4>
                            <hr>
                            <h5 class="card-text">Population: ${element.population}</h5>
                        </div>
                    </div>
                        `;
        });
      });
    });
  }
  GetData();
});

