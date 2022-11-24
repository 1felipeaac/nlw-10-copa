import { arrayWorldCup, crateHeader, createFooter } from "./data.js"

//Functions constructors
function createLine(country) {
  return `
  <tr>
        <td class="td-tbody-Group" scope="col"><img class="country" src="./assets/icon-${country}.svg" alt=""></th>
        <td class="td-tbody-Group" scope="col">${country}</th>
  </tr>
  `
}

let delay = -0.4
function createTable(group, line, lineScout) {
  delay = delay + 0.4
  return (
    `
  <table class="tableGroup" cellspacing="0" style="animation-delay: ${delay}s">
    <thead class="theadGroup">
        <tr>
          <th class="th-thead-group" colspan="2" scope="colgroup">
            <button class="buttonGroup" type="submit">
              Grupo ${group}
            </button>
          </th>
        </tr>
    </thead>
    <tbody class="tbodyGroup">
        ${line}
    </tbody>
  </table>
  ` + createTableScout(lineScout)
  )
}

function createLineScout(country) {
  return `<tr class="tr-tbody-scout" id="${country}">
    <th><img class="scoutCountry" src="./assets/icon-${country}.svg" alt=""></th>
    <td id="pts">0</td> <!-- pontos -->
    <td id="played">0</td> <!-- jogos -->
    <td id="win">0</td> <!-- vitorias -->
    <td id="draws">0</td> <!-- empates -->
    <td id="loss">0</td> <!-- derrotas -->
    <td id="gFor">0</td> <!-- Gols Pro -->
    <td id="gAgainst">0</td> <!-- Gols Contra -->
    <td id="gDifference">0</td> <!-- Saldo de Gols --> 
  </tr>`
}

function createTableScout(lineScout) {
  return `<table class="tableScout">
	<thead class="theadScout">
   
    <tr>
      <th colspan="9" scope="colgroup">
        <button class="buttonScout" type="submit">
          Tabela
        </button>
      </th>
    </tr>
		<tr>
			<td class="td-thead-scout"></td>
      <td class="td-thead-scout">P</td>
			<td class="td-thead-scout">J</td>
			<td class="td-thead-scout">V</td>
      <td class="td-thead-scout">E</td>
			<td class="td-thead-scout">D</td>
			<td class="td-thead-scout">GP</td>
			<td class="td-thead-scout">GC</td>
			<td class="td-thead-scout">SG</td>	
		</tr>
	</thead>
	<tbody class="tbodyScout">
		${lineScout}
	</tbody>`
}

function createTableGroup(i) {
  return createTable(
    arrayWorldCup[i].group,
    createLine(arrayWorldCup[i].country1) +
      createLine(arrayWorldCup[i].country2) +
      createLine(arrayWorldCup[i].country3) +
      createLine(arrayWorldCup[i].country4),
    createLineScout(arrayWorldCup[i].country1) +
      createLineScout(arrayWorldCup[i].country2) +
      createLineScout(arrayWorldCup[i].country3) +
      createLineScout(arrayWorldCup[i].country4)
  )
}

//Creating Groups
const GroupA = createTableGroup(0)
const GroupB = createTableGroup(1)
const GroupC = createTableGroup(2)
const GroupD = createTableGroup(3)
const GroupE = createTableGroup(4)
const GroupF = createTableGroup(5)
const GroupG = createTableGroup(6)
const GroupH = createTableGroup(7)


//Build Page
document.getElementById("groups").innerHTML =
  GroupA + GroupB + GroupC + GroupD + GroupE + GroupF + GroupG + GroupH
document.querySelector("footer").innerHTML = createFooter()
document.querySelector("header").innerHTML = crateHeader("index")
document.querySelector("body").className = localStorage.getItem("color")
function expiredTime() {
  localStorage.clear()
}
setTimeout(expiredTime, 15 * 60 * 1000)


// ----------------FUNÇÃO PARA PREENCHER TABELA----------------------
//----------------------------Group A-------------------------


const qatar = document.getElementById("qatar")
const ecuador = document.getElementById("ecuador")
const senegal = document.getElementById("senegal")
const netherlands = document.getElementById("netherlands")

fillScoutTable(qatar, 1, "loss",0,2)
fillScoutTable(ecuador, 1, "win",2,0)
fillScoutTable(senegal, 1, "loss", 0,2)
fillScoutTable(netherlands, 1, "win", 2,0)

//----------------------------Group B-------------------------
const england = document.getElementById("england")
const iran = document.getElementById("iran")
const united_states = document.getElementById("united-states")
const wales = document.getElementById("wales")

fillScoutTable(england,1, "win",6,2)
fillScoutTable(iran, 1, "loss",2,6)
fillScoutTable(united_states, 1,"draw",1,1)
fillScoutTable(wales, 1, "draw", 1, 1)

//---------------------------Group C------------------------------
const argentina = document.getElementById("argentina")
const saudi_arabia = document.getElementById("saudi-arabia")
const mexico = document.getElementById("mexico")
const poland = document.getElementById("poland")

fillScoutTable(argentina, 1, "loss", 1, 2)
fillScoutTable(saudi_arabia, 1, "win", 2, 1)
fillScoutTable(mexico, 1, "draw", 0, 0)
fillScoutTable(poland, 1, "draw", 0, 0)

//---------------------------Group D------------------------------
const france = document.getElementById("france")
const australia = document.getElementById("australia")
const denmark = document.getElementById("denmark")
const tunisia = document.getElementById("tunisia")

fillScoutTable(france, 1, "win", 4, 1)
fillScoutTable(australia, 1, "loss", 1, 4)
fillScoutTable(denmark, 1, "draw", 0, 0)
fillScoutTable(tunisia, 1, "draw", 0, 0)

//---------------------------Group E------------------------------
const spain = document.getElementById("spain")
const costa_rica = document.getElementById("costa-rica")
const germany = document.getElementById("germany")
const japan = document.getElementById("japan")

fillScoutTable(spain, 1, "win", 7, 0)
fillScoutTable(costa_rica, 1, "loss", 0, 7)
fillScoutTable(germany, 1, "loss", 1, 2)
fillScoutTable(japan, 1, "win", 2, 1)

//---------------------------Group F------------------------------
const belgium = document.getElementById("belgium")
const canada = document.getElementById("canada")
const morocco = document.getElementById("morocco")
const croatia = document.getElementById("croatia")

fillScoutTable(belgium, 1, "win", 1,0)
fillScoutTable(canada, 1, "loss", 0, 1)
fillScoutTable(morocco, 1, "draw", 0, 0)
fillScoutTable(croatia, 1, "draw", 0, 0)

// var gamesWales = [
//   fillScoutTable(wales, 1, "draw", 1, 1),
//   fillScoutTable(wales, 1, "win", 3, 0),
//   fillScoutTable(wales, 1, "loss", 2, 3),
// ]

// console.log(gamesWales)

function allGames(gamesCountry){
  const arrPoints = []
  const arrGames = []
  const arrWin = []
  const arrDraw = []
  const arrLoss = []
  const arrFGoals = []
  const arrAGoals = []
  const arrDGoals = []
  const arrAllGames = []

  for (let i = 0; i < gamesCountry.length; i++) {
    const element = gamesCountry[i]
    arrPoints.unshift(parseInt(element[0]))
    arrGames.unshift(parseInt(element[1]))
    arrWin.unshift(parseInt(element[2]))
    arrDraw.unshift(parseInt(element[3]))
    arrLoss.unshift(parseInt(element[4]))
    arrFGoals.unshift(parseInt(element[5]))
    arrAGoals.unshift(parseInt(element[7]))

  }
  var sumPoints = arrPoints.reduce(function (sumPoints, i) {
    return sumPoints + i
  })
  var sumGames = arrGames.reduce(function (sumGames, i) {
    return sumGames + i
  })
  var sumWin = arrWin.reduce(function (sumWin, i) {
    return sumWin + i
  })
  var sumDraw = arrDraw.reduce(function (sumDraw, i) {
    return sumDraw + i
  })
  var sumLoss = arrLoss.reduce(function (sumLoss, i) {
    return sumLoss + i
  })
  var sumFGoals = arrFGoals.reduce(function (sumFGoals, i) {
    return sumFGoals + i
  })
  var sumAGoals = arrAGoals.reduce(function (sumAGoals, i) {
    return sumAGoals + i
  })
  var sumDGoals = sumFGoals - sumAGoals

  arrAllGames.unshift(
    sumPoints,
    sumGames,
    sumWin,
    sumDraw,
    sumLoss,
    sumFGoals,
    sumAGoals,
    sumDGoals
  )
  return arrAllGames
}

// console.log(allGames(gamesWales))
//--------------------------------------------------------------

function fillArray(country){
  const array = []
  array.unshift(
    country.cells[1].innerText,
    country.cells[2].innerText,
    country.cells[3].innerText,
    country.cells[4].innerText,
    country.cells[5].innerText,
    country.cells[6].innerText,
    country.cells[7].innerText,
    country.cells[8].innerText
  )

  return array

}


function fillScoutTable(country, games, result, fGoals, aGoals){
  let dGoals = fGoals - aGoals
  result.toLowerCase
  if (result == "win") {
    country.cells[3].innerHTML = 1 //win
    country.cells[4].innerHTML = 0 //draw
    country.cells[5].innerHTML = 0 //loss
    country.cells[1].innerHTML = 3
  } else if (result == "draw") {
    country.cells[3].innerHTML = 0 //win
    country.cells[4].innerHTML = 1 //draw
    country.cells[5].innerHTML = 0 //loss
    country.cells[1].innerHTML = 1
  } else if (result == "loss") {
    country.cells[3].innerHTML = 0 //win
    country.cells[4].innerHTML = 0 //draw
    country.cells[5].innerHTML = 1 //loss
    country.cells[1].innerHTML = 0
  }else{
    country.cells[3].innerHTML = 0 //win
    country.cells[4].innerHTML = 0 //draw
    country.cells[5].innerHTML = 0 //loss
    country.cells[1].innerHTML = 0
  }
  country.cells[2].innerHTML = games
  country.cells[6].innerHTML = fGoals
  country.cells[7].innerHTML = aGoals
  country.cells[8].innerHTML = dGoals

  return fillArray(country)
}


//order table
const tables = document.querySelectorAll(".tbodyScout")

for(let i = 0; i < tables.length; i++){
  var index = 1
  const table = tables[i]
  const arr = Array.from(
    table.querySelectorAll("tbody tr")
  )

  arr.sort((a, b) => {
    var a_value = a.children[index].innerText
    var b_value = b.children[index].innerText

    var comp = b_value - a_value
    if(comp == 0){
      index = 8
      var a_value_draw = a.children[index].innerText
      var b_value_draw = b.children[index].innerText
      comp = b_value_draw - a_value_draw
    }
    return comp

  })
  
  arr.forEach((elem) => {
    table.appendChild(elem)
  })
}

  //-------------------------------------------------------------------
  //-----------------------------Events--------------------------------

const headTableGroup = document.querySelectorAll("thead.theadGroup")
const tableScout = document.querySelectorAll("table.tableScout")
const tableGroup = document.querySelectorAll("table.tableGroup")
const buttonGroup = document.querySelectorAll("button.buttonGroup")
const buttonScout = document.querySelectorAll("button.buttonScout")

for (let index = 0; index < headTableGroup.length; index++) {
  const elementTableGroup = tableGroup[index]
  const elementTableScout = tableScout[index]
  const elementButtonScout = buttonScout[index]
  const elementButtonGroup = buttonGroup[index]

  document.querySelector("#timer").style.display = "none"
  document.querySelector("#dropdown").style.display = "none"
  document.querySelector("nav").style.gap = "0"

  elementButtonGroup.addEventListener("click", event_click_tableScout)
  elementButtonScout.addEventListener("click", event_click_tableGroup)

  function event_click_tableScout() {
    // console.log("Click")
    elementTableGroup.style.display = "none"
    elementTableScout.style.display = "table"
  }

  function event_click_tableGroup() {
    // console.log("Click")
    elementTableGroup.style.display = "table"
    elementTableScout.style.display = "none"
  }
}


