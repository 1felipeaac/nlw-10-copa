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

function createLineScout(country, pts, played, win, draws, loss, gFor, gAgainst, gDifference) {
  return `<tr class="tr-tbody-scout">
    <th><img class="scoutCountry" src="./assets/icon-${country}.svg" alt=""></th>
    <td id="pts">${pts}</td> <!-- pontos -->
    <td id="played">${played}</td> <!-- jogos -->
    <td id="win">${win}</td> <!-- vitorias -->
    <td id="draws">${draws}</td> <!-- empates -->
    <td id="loss">${loss}</td> <!-- derrotas -->
    <td id="gFor">${gFor}</td> <!-- Gols Pro -->
    <td id="gAgainst">${gAgainst}</td> <!-- Gols Contra -->
    <td id="gDifference">${gDifference}</td> <!-- Saldo de Gols --> 
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
    createLineScout(arrayWorldCup[i].country1, 0, 0, 0, 0, 0, 0, 0, 0) +
      createLineScout(arrayWorldCup[i].country2, 0, 0, 0, 0, 0, 0, 0, 0) +
      createLineScout(arrayWorldCup[i].country3, 0, 0, 0, 0, 0, 0, 0, 0) +
      createLineScout(arrayWorldCup[i].country4, 0, 0, 0, 0, 0, 0, 0, 0)
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

// ----------------FUNÇÃO PARA PREENCHER TABELA----------------------
// console.log(document.getElementsByClassName("tr-tbody-scout"))

// const tables = document.getElementsByClassName("tr-tbody-scout")
// for(const i = 0; i < tables.length; i++){
//   const element = tables[i];

// }
//-------------------------------------------------------------------

//Build Page
document.getElementById("groups").innerHTML =
  GroupA + GroupB + GroupC + GroupD + GroupE + GroupF + GroupG + GroupH
document.querySelector("footer").innerHTML = createFooter()
// Events

document.querySelector("header").innerHTML = crateHeader("index")
document.querySelector("body").className = localStorage.getItem("color")

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
