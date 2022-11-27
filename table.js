import { arrayWorldCup, crateHeader, createFooter } from "./data.js"
// import { qatarResult } from "./main.js"

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



// ----------------FUNÇÃO PARA PREENCHER TABELA----------------------
//----------------------------Group A-------------------------

const qatar = document.getElementById("qatar")
const ecuador = document.getElementById("ecuador")
const senegal = document.getElementById("senegal")
const netherlands = document.getElementById("netherlands")

const qatarGames = [fillScoutTable(0, 2), fillScoutTable(1,3)]
allGames(qatar, qatarGames)

const ecuadorGames= [fillScoutTable(2,0),fillScoutTable(1,1)]
allGames(ecuador, ecuadorGames)

const senagalGames = [fillScoutTable(0,2), fillScoutTable(3,1)]
allGames(senegal, senagalGames)

const netherlandsGames = [fillScoutTable(2,0),fillScoutTable(1,1)]
allGames(netherlands, netherlandsGames)

//----------------------------Group B-------------------------
const england = document.getElementById("england")
const iran = document.getElementById("iran")
const united_states = document.getElementById("united-states")
const wales = document.getElementById("wales")

const englandGames = [fillScoutTable(6,2), fillScoutTable(0,0)]
allGames(england, englandGames)

const iranGames = [fillScoutTable(2,6), fillScoutTable(2,0)]
allGames(iran, iranGames)

const united_statesGames = [fillScoutTable(1,1), fillScoutTable(0,0)]
allGames(united_states, united_statesGames)

const walesGames = [fillScoutTable(1, 1), fillScoutTable(0,2)]
allGames(wales, walesGames)
//---------------------------Group C------------------------------
const argentina = document.getElementById("argentina")
const saudi_arabia = document.getElementById("saudi-arabia")
const mexico = document.getElementById("mexico")
const poland = document.getElementById("poland")

const argentinaGames = [fillScoutTable(1, 2), fillScoutTable(2,0)]
allGames(argentina, argentinaGames)

const saudi_arabiaGames = [fillScoutTable(2, 1), fillScoutTable(0,2)]
allGames(saudi_arabia, saudi_arabiaGames)

const mexicoGames = [fillScoutTable(0, 0), fillScoutTable(0,1)]
allGames(mexico, mexicoGames)

const polandGames = [fillScoutTable(0, 0), fillScoutTable(2,0)]
allGames(poland, polandGames)

//---------------------------Group D------------------------------
const france = document.getElementById("france")
const australia = document.getElementById("australia")
const denmark = document.getElementById("denmark")
const tunisia = document.getElementById("tunisia")

const franceGames = [fillScoutTable(4, 1), fillScoutTable(2,1)]
allGames(france, franceGames)

const australiaGames = [fillScoutTable(1, 4), fillScoutTable(1,0)]
allGames(australia, australiaGames)

const denmarkGames = [fillScoutTable(0, 0), fillScoutTable(0,1)]
allGames(denmark, denmarkGames)

const tunisiaGames = [fillScoutTable(0, 0), fillScoutTable(0,1)]
allGames(tunisia, tunisiaGames)

//---------------------------Group E------------------------------
const spain = document.getElementById("spain")
const costa_rica = document.getElementById("costa-rica")
const germany = document.getElementById("germany")
const japan = document.getElementById("japan")

const spainGames = [fillScoutTable(7, 0)]
allGames(spain, spainGames)

const costa_ricaGames = [fillScoutTable(0, 7), fillScoutTable(1, 0)]
allGames(costa_rica, costa_ricaGames)

const germanyGames = [fillScoutTable(1, 2)]
allGames(germany, germanyGames)

const japanGames = [fillScoutTable(2, 1), fillScoutTable(0, 1)]
allGames(japan, japanGames)

//---------------------------Group F------------------------------
const belgium = document.getElementById("belgium")
const canada = document.getElementById("canada")
const morocco = document.getElementById("morocco")
const croatia = document.getElementById("croatia")

const belgiumGames = [fillScoutTable(1,0), fillScoutTable(0,2)]
allGames(belgium, belgiumGames)

const canadaGames = [fillScoutTable(0, 1), fillScoutTable(1,3)]
allGames(canada, canadaGames)

const moroccoGames = [fillScoutTable(0, 0), fillScoutTable(2,0)]
allGames(morocco, moroccoGames)

const croatiaGames = [fillScoutTable(0, 0), fillScoutTable(3,1)]
allGames(croatia, croatiaGames)

//---------------------------Group G------------------------------
const switzerland = document.getElementById("switzerland")
const cameroon = document.getElementById("cameroon")
const brazil = document.getElementById("brazil")
const serbia = document.getElementById("serbia")

const switzerlandGames = [fillScoutTable(1,0)]
allGames(switzerland, switzerlandGames)

const cameroonGames = [fillScoutTable(0,1)]
allGames(cameroon, cameroonGames)

const brazilGames = [fillScoutTable(2, 0)]
allGames(brazil, brazilGames)

const serbiaGames = [fillScoutTable(0, 2)]
allGames(serbia, serbiaGames)

//---------------------------Group G------------------------------
const south_korea = document.getElementById("south-korea")
const ghana = document.getElementById("ghana")
const uruguay = document.getElementById("uruguay")
const portugal = document.getElementById("portugal")

const south_koreaGames = [fillScoutTable(0,0)]
allGames(south_korea, south_koreaGames)

const ghanaGames = [fillScoutTable(2,3)]
allGames(ghana, ghanaGames)

const uruguayGames = [fillScoutTable(0,0)]
allGames(uruguay, uruguayGames)

const portugalGames = [fillScoutTable(3,2)]
allGames(portugal, portugalGames)

function allGames(country, games){
  const arrPoints = []
  const arrWin = []
  const arrDraw = []
  const arrLoss = []
  const arrFGoals = []
  const arrAGoals = []
  const arrDGoals = []

  for (let i = 0; i < games.length; i++) {
    const element = games[i]
    arrPoints.unshift(parseInt(element[0]))
    arrWin.unshift(parseInt(element[1]))
    arrDraw.unshift(parseInt(element[2]))
    arrLoss.unshift(parseInt(element[3]))
    arrFGoals.unshift(parseInt(element[4]))
    arrAGoals.unshift(parseInt(element[5]))
    arrDGoals.unshift(parseInt(element[6]))

  }
  var sumPoints = arrPoints.reduce(function (sumPoints, i) {
    return sumPoints + i
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

  var sumDGoals = arrDGoals.reduce(function (sumDGoals, i) {
    return sumDGoals + i
  })

  country.cells[1].innerText = sumPoints, 
  country.cells[2].innerText = games.length, 
  country.cells[3].innerText = sumWin, 
  country.cells[4].innerText = sumDraw, 
  country.cells[5].innerText = sumLoss, 
  country.cells[6].innerText = sumFGoals, 
  country.cells[7].innerText = sumAGoals, 
  country.cells[8].innerText = sumDGoals

}


function fillScoutTable(fGoals, aGoals){
  const arrFill = []
  let dGoals = fGoals - aGoals
  var win, draw, loss, points
  if (fGoals > aGoals) {
    win = 1 //win
    draw = 0 //draw
    loss = 0 //loss
    points = 3
  } else if (fGoals == aGoals) {
    win = 0 //win
    draw = 1 //draw
    loss = 0 //loss
    points = 1
  } else{
    win = 0 //win
    draw = 0 //draw
    loss = 1 //loss
    points = 0
  }
  
  arrFill.unshift(points, win, draw, loss, fGoals, aGoals, dGoals)

  return arrFill
}


//------------------order table-----------------------
const tables = document.querySelectorAll(".tbodyScout")
for(let i = 0; i < tables.length; i++){
  var index = 1
  const table = tables[i]
  const arr = Array.from(
    table.querySelectorAll("tbody tr")
  )

  arr.sort(function (a, b){
    var a_value = a.children[index].innerText
    var b_value = b.children[index].innerText
    var comp = a_value - b_value

    if(comp == 0){
      a_value = a.lastElementChild.innerText
      b_value = b.lastElementChild.innerText
      comp = a_value - b_value
    }
    return comp
  })
  
  arr.reverse().forEach((elem) => {
    table.appendChild(elem)
  })
}

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

