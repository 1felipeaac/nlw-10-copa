
//Array Groups
var arrayWorldCup = [
  {
    group: "a",
    country1: "qatar",
    country2: "ecuador",
    country3: "senegal",
    country4: "netherlands",
  },
  {
    group: "b",
    country1: "england",
    country2: "iran",
    country3: "united-states",
    country4: "wales",
  },
  {
    group: "c",
    country1: "argentina",
    country2: "saudi-arabia",
    country3: "mexico",
    country4: "poland",
  },
  {
    group: "d",
    country1: "france",
    country2: "australia",
    country3: "denmark",
    country4: "tunisia",
  },
  {
    group: "e",
    country1: "spain",
    country2: "costa-rica",
    country3: "germany",
    country4: "japan",
  },
  {
    group: "f",
    country1: "belgium",
    country2: "canada",
    country3: "morocco",
    country4: "croatia",
  },
  {
    group: "g",
    country1: "brazil",
    country2: "serbia",
    country3: "switzerland",
    country4: "cameroon",
  },
  {
    group: "h",
    country1: "portugal",
    country2: "ghana",
    country3: "uruguay",
    country4: "south-korea",
  },
]

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
          <th class="th-thead-group" colspan="2" scope="colgroup">Grupo ${group}</th>
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
  return `<tr class="tr-tbody-scout">
    <th><img class="scoutCountry" src="./assets/icon-${country}.svg" alt=""></th>
    <td>0</td>
    <td>0</td>
    <td>0</td>
    <td>0</td>
    <td>0</td>
    <td>0</td>
    <td>0</td>
    <td>0</td> 
  </tr>`
}

function createTableScout(lineScout) {
  return `<table class="tableScout">
	<thead class="theadScout">
   
    <tr>
      <th colspan="9" scope="colgroup">
        <button class="buttonScout" type="submit">
          table & fixtures
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
  for (let index = 0; index < arrayWorldCup.length; index++) {
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
}

//Creating Groups
const GroupA = createTableGroup(0);
const GroupB = createTableGroup(1);
const GroupC = createTableGroup(2);
const GroupD = createTableGroup(3);
const GroupE = createTableGroup(4);
const GroupF = createTableGroup(5);
const GroupG = createTableGroup(6);
const GroupH = createTableGroup(7);

//Build Page
document.getElementById("groups").innerHTML =
  GroupA +
  GroupB +
  GroupC +
  GroupD +
  GroupE +
  GroupF +
  GroupG +
  GroupH


// Events  
const headTableGroup = document.querySelectorAll("thead.theadGroup");
// const headTableScout = document.querySelectorAll("thead.headScout");
const tableScout = document.querySelectorAll("table.tableScout");
const tableGroup = document.querySelectorAll("table.tableGroup");
const buttonGroup = document.querySelectorAll("button.buttonScout");
const toggleGroup = document.getElementById("toggle");

for (let index = 0; index < headTableGroup.length; index++) {
  const elementGroup = headTableGroup[index]
  const elementToggleGroup = tableGroup[index]
  // const elementScout = headTableScout[index];
  const elementTableGroup = tableGroup[index]
  const elementTableScout = tableScout[index]
  const elementButton = buttonGroup[index]

  const stringTableGroup = elementTableGroup.innerText

  // console.log(stringTableGroup);

  elementGroup.addEventListener("click", function () {
    // console.log("Click")
    elementTableGroup.style.display = "none"
    elementTableScout.style.display = "table"
  })

  elementButton.addEventListener("click", function () {
    // console.log("Click")
    elementTableGroup.style.display = "table"
    elementTableScout.style.display = "none"
  })
}
