{
  /* <i class="fa-solid fa-xmark"></i>
                <i class="fa-solid fa-o"></i> */
}

//#region  variables
let button = document.querySelectorAll(".xo-col");
let horizontal_row = document.querySelector(".game-row");
let player_1_name = document.querySelector(".user1")
let player_2_name = document.querySelector(".user2")
let counter = 0;



let player_1 = window.prompt("Please enter player-1: ")
let player_2 = window.prompt("Please enter player-2: ")
//#endregion


//!-----------------------------------Game Logic
button.forEach((button) => {
  button.addEventListener("click", function () {
    if (button.classList.contains("xo-col-active") != true) {
      counter++;
    //   !   x-mark Creator
      if (counter % 2 == 1) {
        let x = document.createElement("i");
        x.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
        button.appendChild(x);
        button.classList.add("xo-col-active");
    //   !   o-mark Creator
      }else{
        let o = document.createElement("i");
        o.innerHTML = `<i class="fa-solid fa-o"></i>`;
        button.appendChild(o);
        button.classList.add("xo-col-active");
      }
    } else {
      alert("you can click at same cart one time");
    }
  });
});
//!-----------------------------------Game Logic

let user1 = document.createElement("h3");
user1.innerHTML = `<h3>${player_1}</h3>`
player_1_name.appendChild(user1)
let user2 = document.createElement("h3");
user2.innerHTML = `<h3>${player_2}</h3>`
player_2_name.appendChild(user1)



