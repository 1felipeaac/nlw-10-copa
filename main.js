// const arrayGame = []
function createGame(player1, hour, player2, group) {
  // arrayGame.push([player1, hour, player2, group])
  return (
    `
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
  )
}

let delay = -0.4
// const arrayDate = [];
function createCard(date, games) {
  game_day = new Date(date)
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
  // arrayDate.push([game_day.getDate() + "/" + (game_day.getMonth() + 1)])
  return (
    `
  <div class="card" style="animation-delay: ${delay}s">
      <h2>${game_day.getDate() + "/" + (game_day.getMonth() + 1)} <span>${
      week[game_day.getDay()]
    }</span></h2>
      <ul>
        ${games}
      </ul>
  </div>
  `
  )
}

document.querySelector("#cards").innerHTML =
  createCard(
    "11/24/2022",
    createGame("switzerland", "07", "cameroon", "g") +
      createGame("uruguay", "10", "south-korea", "h") +
      createGame("ghana", "13", "portugal", "h") +
      createGame("brazil", "16", "serbia", "g")
  ) +
  createCard(
    "11/28/2022",
    createGame("cameroon", "07", "serbia", "g") +
      createGame("south-korea", "10", "ghana", "h") +
      createGame("brazil", "13", "switzerland", "g") +
      createGame("portugal", "16", "uruguay", "h")
  ) +
  createCard(
    "12/02/2022",
    createGame("south-korea", "12", "portugal", "h") +
      createGame("ghana", "12", "uruguay", "h") +
      createGame("serbia", "13", "switzerland", "g") +
      createGame("cameroon", "16", "brazil", "g")
  )

// const arrayCards = []

// arrayCards.push(arrayDate, arrayGame)

// console.log(arrayCards)

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
