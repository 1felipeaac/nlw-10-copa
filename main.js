import {
  arrayGames,
  crateHeader,
  setTheme,
  createFooter,
} from "./data.js"

// const italia = new Players("italia");

// console.log(italia.getCountry())

function createGame(player1, hour, player2, group) {
  return `
  <li>
      <div class="info-country">
        <img class="country" src="./assets/icon-${player1}.svg" alt=""><span class="name-country">${player1}</span>
      </div>
      <strong class="scoreBoard-${player1}"></strong>
      <div id="details">
        <strong>Grupo ${group}</strong>
        <strong>${hour}:00</strong>
      </div>
      <strong class="scoreBoard-${player2}"></strong>
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

// document.querySelector("body").innerHTML
document.querySelector("header").innerHTML = crateHeader("groups")
document.querySelector("footer").innerHTML = createFooter()

setTheme()
//----------------------- SAVE CLASSNAME ----------------------
var field = document.querySelector("body")
// Se tivermos um valor salvo automaticamente
// (isto só ocorrerá se a página for acidentalmente recarregada)
if (sessionStorage.getItem("autosave")) {
  // Restaura o conteúdo da caixa de texto
  field.className = sessionStorage.getItem("autosave")
}

// Verifica as mudanças que ocorrem na caixa de texto
field.addEventListener("change", function () {
  // E salva o resultado dentro de um objeto session storage
  sessionStorage.setItem("autosave", field.className)
})
//----------------------------------------------------------------

//--------------------------COUNTDOWN-----------------------------
var deadline = new Date("nov 20, 2022 13:00:00").getTime()
var limit = setInterval(function () {
  var now = new Date().getTime()
  var time = deadline - now
  var days = Math.floor(time / (1000 * 60 * 60 * 24))
  var hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  var minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60))
  var seconds = Math.floor((time % (1000 * 60)) / 1000)
  document.getElementById(
    "timer"
  ).innerHTML = `Faltam ${days}d ${hours}h ${minutes}m ${seconds}s`
  // "Faltam "+
  //   days + "d " + hours + "h " + minutes + "m " + seconds + "s "
  if (time < 0) {
    clearInterval(limit)
    document.getElementById("timer").style.display = "none"
  }
}, 1000)

//----------------------------------------------------------------

//----------------------------SCOREBOARD---------------------------
const qatarScore = document.getElementsByClassName("scoreBoard-qatar")
qatarScore[0].innerHTML = 0

const ecuadorScore = document.getElementsByClassName("scoreBoard-ecuador")
ecuadorScore[0].innerHTML = 2

const englanScore = document.getElementsByClassName("scoreBoard-england")
englanScore[0].innerHTML = 6

const iranScore = document.getElementsByClassName("scoreBoard-iran")
iranScore[0].innerHTML = 2

const senegalScore = document.getElementsByClassName("scoreBoard-senegal")
senegalScore[0].innerHTML = 0

const netherlandsScore = document.getElementsByClassName("scoreBoard-netherlands")
netherlandsScore[0].innerHTML = 2

const united_statesScore = document.getElementsByClassName("scoreBoard-united-states")
united_statesScore[0].innerHTML = 1

const walesScore = document.getElementsByClassName("scoreBoard-wales")
walesScore[0].innerHTML = 1

const argentinaScore = document.getElementsByClassName("scoreBoard-argentina")
argentinaScore[0].innerHTML = 1

const saudi_arabiaScore = document.getElementsByClassName("scoreBoard-saudi-arabia")
saudi_arabiaScore[0].innerHTML = 2

const denmarkScore = document.getElementsByClassName("scoreBoard-denmark")
denmarkScore[0].innerHTML = 0

const tunisiaScore = document.getElementsByClassName("scoreBoard-tunisia")
tunisiaScore[0].innerHTML = 0

const mexicoScore = document.getElementsByClassName("scoreBoard-mexico")
mexicoScore[0].innerHTML = 0

const polandScore = document.getElementsByClassName("scoreBoard-poland")
polandScore[0].innerHTML = 0

const franceScore = document.getElementsByClassName("scoreBoard-france")
franceScore[0].innerHTML = 4

const australiaScore = document.getElementsByClassName("scoreBoard-australia")
australiaScore[0].innerHTML = 1

const moroccoScore = document.getElementsByClassName("scoreBoard-morocco")
moroccoScore[0].innerHTML = 0

const croatiaScore = document.getElementsByClassName("scoreBoard-croatia")
croatiaScore[0].innerHTML = 0

const germanyScore = document.getElementsByClassName("scoreBoard-germany")
germanyScore[0].innerHTML = 1

const japanScore = document.getElementsByClassName("scoreBoard-japan")
japanScore[0].innerHTML = 2

const spainScore = document.getElementsByClassName("scoreBoard-spain")
spainScore[0].innerHTML = 7

const costa_ricaScore = document.getElementsByClassName("scoreBoard-costa-rica")
costa_ricaScore[0].innerHTML = 0

const belgiumScore = document.getElementsByClassName("scoreBoard-belgium")
belgiumScore[0].innerHTML = 1

const canadaScore = document.getElementsByClassName("scoreBoard-canada")
canadaScore[0].innerHTML = 0

const switzerlandScore = document.getElementsByClassName("scoreBoard-switzerland")
switzerlandScore[0].innerHTML = 1

const cameroonScore = document.getElementsByClassName("scoreBoard-cameroon")
cameroonScore[0].innerHTML = 0

const south_koreaScore = document.getElementsByClassName("scoreBoard-south-korea")
south_koreaScore[0].innerHTML = 0

const uruguayScore = document.getElementsByClassName("scoreBoard-uruguay")
uruguayScore[0].innerHTML = 0
//------------------------------EVENTS-----------------------------

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

const button_theme = document.getElementById("button-theme")

button_theme.addEventListener("click", function () {
  document.getElementById("get_theme").style.display = "flex"
  document.getElementById("get_theme").addEventListener("click", function () {
    document.getElementById("get_theme").style.display = "none"
  })
})
