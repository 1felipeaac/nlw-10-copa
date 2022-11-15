import { arrayGames, crateHeader } from "./data.js"

function createGame(player1, hour, player2, group) {
  return `
  <li>
      <div class="info-country">.
        <img class="country" src="./assets/icon-${player1}.svg" alt=""><span class="name-country">${player1}</span>
      </div>
      <div id="details">
        <strong>Grupo ${group}</strong>
        <strong>${hour}:00</strong>
      </div>
      <div class="info-country">
        <img class="country" src="./assets/icon-${player2}.svg" alt=""><span class="name-country">${player2}</span>
      </div>
  </li>
  `
}

let delay = -0.4
function createCard(date, games) {
  const game_day = new Date(date)
  var week = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ]
  delay = delay + 0.4
  return `
  <div class="card" style="animation-delay: ${delay}s">
      <h2>${game_day.getDate() + "/" + (game_day.getMonth() + 1)} <span>${
    week[game_day.getDay()]
  }</span></h2>

      <ul>
        ${games}
      </ul>
  </div>
  `
}

function createCardGames(i) {
  return createGame(
    arrayGames[i].country1,
    arrayGames[i].hour,
    arrayGames[i].country2,
    arrayGames[i].group,
    arrayGames[i].date
  )
}

document.querySelector("#cards").innerHTML =
  createCard(
    arrayGames[0].date,
    createGame(
      arrayGames[0].country1,
      arrayGames[0].hour,
      arrayGames[0].country2,
      arrayGames[0].group
    )
  ) +
  createCard(
    arrayGames[1].date,
    createCardGames(1) + createCardGames(2) + createCardGames(3)
  ) +
  createCard(
    arrayGames[4].date,
    createCardGames(4) +
      createCardGames(5) +
      createCardGames(6) +
      createCardGames(7)
  ) +
  createCard(
    arrayGames[8].date,
    createCardGames(8) +
      createCardGames(9) +
      createCardGames(10) +
      createCardGames(11)
  ) +
  createCard(
    arrayGames[12].date,
    createCardGames(12) +
      createCardGames(13) +
      createCardGames(14) +
      createCardGames(15)
  ) +
  createCard(
    arrayGames[16].date,
    createCardGames(16) +
      createCardGames(17) +
      createCardGames(18) +
      createCardGames(19)
  ) +
  createCard(
    arrayGames[20].date,
    createCardGames(20) +
      createCardGames(21) +
      createCardGames(22) +
      createCardGames(23)
  ) +
  createCard(
    arrayGames[24].date,
    createCardGames(24) +
      createCardGames(25) +
      createCardGames(26) +
      createCardGames(27)
  ) +
  createCard(
    arrayGames[28].date,
    createCardGames(28) +
      createCardGames(29) +
      createCardGames(30) +
      createCardGames(31)
  ) +
  createCard(
    arrayGames[32].date,
    createCardGames(32) +
      createCardGames(33) +
      createCardGames(34) +
      createCardGames(35)
  ) +
  createCard(
    arrayGames[36].date,
    createCardGames(36) +
      createCardGames(37) +
      createCardGames(38) +
      createCardGames(39)
  ) +
  createCard(
    arrayGames[40].date,
    createCardGames(40) +
      createCardGames(41) +
      createCardGames(42) +
      createCardGames(43)
  ) +
  createCard(
    arrayGames[44].date,
    createCardGames(44) +
      createCardGames(45) +
      createCardGames(46) +
      createCardGames(47)
  )

document.querySelector("header").innerHTML = crateHeader("groups");


const flag_country = document.getElementsByClassName("country");
const name_country = document.getElementsByClassName("name-country");

//FUTURE IMPLEMENTATION
// const color_theme = document.querySelectorAll("input")
// let body = document.querySelector("body")

// for (const iterator of color_theme) {
//   // console.log(iterator.checked)
//   iterator.addEventListener("click", function () {
//     // console.log(iterator.value)
//     if (iterator.checked)
//       body.className = iterator.value
//   })

//}
var deadline = new Date("nov 20, 2022 13:00:00").getTime()
var limit = setInterval(function () {
  var now = new Date().getTime()
  var time = deadline - now
  var days = Math.floor(time / (1000 * 60 * 60 * 24))
  var hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  var minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60))
  var seconds = Math.floor((time % (1000 * 60)) / 1000)
  document.getElementById("timer").innerHTML = `Faltam ${days}d ${hours}h ${minutes}m ${seconds}s`
  // "Faltam "+
  //   days + "d " + hours + "h " + minutes + "m " + seconds + "s "
  if (time < 0) {
    clearInterval(limit)
    document.getElementById("timer").innerHTML = "A COPA COMEÇOU!"
  }
}, 1000)

for (let index = 0; index < flag_country.length; index++) {
  const this_flag = flag_country[index]
  const this_country = name_country[index]

  this_flag.addEventListener("mouseover", event_mouseouver)

  this_flag.addEventListener("mouseout", event_mouseout)

  function event_mouseouver() {
    this_country.style.display = "block"
    this_flag.style.transform = "scale(0.7)"
  }

  function event_mouseout() {
    this_country.style.display = "none"
    this_flag.style.transform = "scale(1)"
  }
}
