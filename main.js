function createGame(player1, hour, player2, group) {
  return `
  <li>
      <div class="info-country">
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
const arrayCards = []
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
  arrayCards.push([date, games])
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

document.querySelector("#cards").innerHTML =
  createCard("11/20/2022", createGame("qatar", "13", "ecuador", "a")) +
  createCard(
    "11/21/2022",
    createGame("england", "10", "iran", "b") +
      createGame("senegal", "13", "netherlands", "a") +
      createGame("united-states", "16", "wales", "b")
  ) +
  createCard(
    "11/22/2022",
    createGame("argentina", "07", "saudi-arabia", "c") +
      createGame("denmark", "10", "tunisia", "d") +
      createGame("mexico", "13", "poland", "c") +
      createGame("france", "16", "australia", "d")
  ) +
  createCard(
    "11/23/2022",
    createGame("morocco", "07", "croatia", "f") +
      createGame("germany", "10", "japan", "e") +
      createGame("spain", "13", "costa-rica", "e") +
      createGame("belgium", "16", "canada", "f")
  ) +
  createCard(
    "11/24/2022",
    createGame("switzerland", "07", "cameroon", "g") +
      createGame("uruguay", "10", "south-korea", "h") +
      createGame("ghana", "13", "portugal", "h") +
      createGame("brazil", "16", "serbia", "g")
  ) +
  createCard(
    "11/25/2022",
    createGame("wales", "07", "iran", "b") +
      createGame("qatar", "10", "senegal", "a") +
      createGame("netherlands", "13", "ecuador", "a") +
      createGame("england", "16", "united-states", "b")
  ) +
  createCard(
    "11/26/2022",
    createGame("tunisia", "07", "australia", "d") +
      createGame("poland", "10", "saudi-arabia", "c") +
      createGame("france", "13", "denmark", "d") +
      createGame("argentina", "16", "mexico", "c")
  ) +
  createCard(
    "11/27/2022",
    createGame("japan", "07", "costa-rica", "e") +
      createGame("belgium", "10", "morocco", "f") +
      createGame("croatia", "13", "canada", "f") +
      createGame("spain", "16", "germany", "e")
  ) +
  createCard(
    "11/28/2022",
    createGame("cameroon", "07", "serbia", "g") +
      createGame("south-korea", "10", "ghana", "h") +
      createGame("brazil", "13", "switzerland", "g") +
      createGame("portugal", "16", "uruguay", "h")
  ) +
  createCard(
    "11/29/2022",
    createGame("ecuador", "12", "senegal", "a") +
      createGame("netherlands", "12", "qatar", "a") +
      createGame("iran", "16", "united-states", "b") +
      createGame("wales", "16", "england", "b")
  ) +
  createCard(
    "11/30/2022",
    createGame("tunisia", "12", "france", "d") +
      createGame("australia", "12", "denmark", "d") +
      createGame("poland", "16", "argentina", "c") +
      createGame("saudi-arabia", "16", "mexico", "c")
  ) +
  createCard(
    "12/01/2022",
    createGame("croatia", "12", "belgium", "f") +
      createGame("canada", "12", "morocco", "f") +
      createGame("japan", "16", "spain", "e") +
      createGame("costa-rica", "16", "germany", "e")
  ) +
  createCard(
    "12/02/2022",
    createGame("south-korea", "12", "portugal", "h") +
      createGame("ghana", "12", "uruguay", "h") +
      createGame("serbia", "13", "switzerland", "g") +
      createGame("cameroon", "16", "brazil", "g")
  )

console.log(arrayCards)
// import { arrayTable, createLine, createTable } from "./table";

//events
const flag_country = document.getElementsByClassName("country")
const name_country = document.getElementsByClassName("name-country")

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
