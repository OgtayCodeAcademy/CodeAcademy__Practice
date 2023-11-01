let username_input = document.querySelector("#sign-in-username");
let password_input = document.querySelector("#sign-in-password");
let base_URL = "http://localhost:3000";
let sign_button = document.querySelector("#sigin-button");
let logout_button = document.querySelector("#logout-button");
let remember_me = document.getElementById("save-me");

console.log(remember_me.checked);
console.log(remember_me.value);

if (remember_me.value == "on") {
  sign_button.addEventListener("click", function () {
    fetch(`${base_URL}/passwords`)
      .then((response) => response.json())
      .then((sigin) => {
        sigin.forEach((element) => {
          if (
            username_input.value == element.username &&
            password_input.value == element.password
          ) {
            document.body.innerHTML += `<h1 style="color: green;font-size: 30px;text-align: center;margin-top: 50px;">You have succesfully logined</h1>`;
            localStorage.setItem("log-in", true);
            location.reload();
          } else {
            alert("Wrong password or username");
          }
        });
      });
  });
  logout_button.addEventListener("click", function () {
    localStorage.removeItem("log-in");
  });
} else {
  sign_button.addEventListener("click", function () {
    fetch(`${base_URL}/passwords`)
      .then((response) => response.json())
      .then((sigin) => {
        sigin.forEach((element) => {
          if (
            username_input.value == element.username &&
            password_input.value == element.password
          ) {
            document.body.innerHTML += `<h1 style="color: green;font-size: 30px;text-align: center;margin-top: 50px;">You have succesfully logined</h1>`;
            sessionStorage.setItem("log-in", true);
            localStorage.removeItem("log-in");
          } else {
            alert("Wrong password or username");
          }
        });
      });
  });
}
