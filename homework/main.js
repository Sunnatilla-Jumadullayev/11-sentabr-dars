let elNight = document.querySelector(".nigt");
let elMain = document.querySelector(".main");
let elClock = document.querySelector(".clock");
let elYear = document.querySelector(".year");
let ElMonth = document.querySelector(".month");
let elWeek = document.querySelector(".week");
let elBtn = document.querySelector("#btn");

function night() {
  elMain.style.backgroundImage = `url("./images/6332038079_0d255a5cbd_o.webp")`;
  elMain.style.color = "#fff";
  elBtn.style.color = "#fff";
}
function day() {
  elMain.style.backgroundImage = `url("./images/c38c4c218cbf7dacf09d6aacd9a6c3ef.jpg")`;
  elMain.style.color = "#000";
  elBtn.style.color = "#000";
}
function clock() {
  let date = new Date();
  let hour = date.getHours().toString().padStart(2, "0");
  let minute = date.getMinutes().toString().padStart(2, "0");
  let second = date.getSeconds().toString().padStart(2, "0");
  let year = date.getFullYear();
  let day = date.getDate();
  let month = date.getMonth();
  let week = date.getDay();
  elClock.innerHTML = `${hour}:${minute}:${second}`;
  elYear.innerHTML = `${year}`;

  switch (month) {
    case 0:
      ElMonth.innerHTML = `${day} Yanvar`;

      break;
    case 1:
      ElMonth.innerHTML = `${day} fevral`;

      break;
    case 2:
      ElMonth.innerHTML = `${day} mart`;

      break;
    case 3:
      ElMonth.innerHTML = `${day} Aprel`;

      break;
    case 4:
      ElMonth.innerHTML = `${day} May`;

      break;
    case 5:
      ElMonth.innerHTML = `${day} iyun`;

      break;
    case 6:
      ElMonth.innerHTML = `${day} Iyul`;

      break;
    case 7:
      ElMonth.innerHTML = `${day} Avgust`;

      break;
    case 8:
      ElMonth.innerHTML = `${day} Sentyabr`;

      break;
    case 9:
      ElMonth.innerHTML = `${day} oktyabr`;

      break;
    case 10:
      ElMonth.innerHTML = `${day} Noyabr`;

      break;
    case 11:
      ElMonth.innerHTML = `${day} Dekabr`;

      break;
    default:
      break;
  }
  switch (week) {
    case 1:
      elWeek.innerHTML = `Dushanba`;
      break;
    case 2:
      elWeek.innerHTML = `Seshanba`;
      break;
    case 3:
      elWeek.innerHTML = `Chorshanba`;
      break;
    case 4:
      elWeek.innerHTML = `Payshanba`;
      break;
    case 5:
      elWeek.innerHTML = `Juma`;
      break;
    case 6:
      elWeek.innerHTML = `Shanba`;
      break;
    case 0:
      elWeek.innerHTML = `Yakshanba`;
      break;

    default:
      break;
  }
}
setInterval(() => {
  clock();
}, 1000);
let date = new Date();
