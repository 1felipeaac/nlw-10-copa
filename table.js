function createLine(country) {
  return `
  <tr>
        <td scope="col"><img class="country" src="./assets/icon-${country}.svg" alt=""></th>
        <td scope="col">${country}</th>
  </tr>
  `
}

let delay = -0.4
function createTable(group, line, lineScout) {
  delay = delay + 0.4
  return `
  <table class="tableGroup" cellspacing="0" style="animation-delay: ${delay}s">
    <thead class="headTable">
        <tr>
          <th colspan="2" scope="colgroup">Grupo ${group}</th>
        </tr>
    </thead>
    <tbody class="bodyGroup">
        ${line}
    </tbody>
  </table>
  ` + createTableScout(lineScout)
}

// console.log(document.getElementById("groups"))
document.getElementById("groups").innerHTML =
  createTable(
    "a",
    createLine("qatar") +
      createLine("ecuador") +
      createLine("senegal") +
      createLine("netherlands"),
    createLineScout("qatar") +
      createLineScout("ecuador") +
      createLineScout("senegal") +
      createLineScout("netherlands")
  ) +
  createTable(
    "b",
    createLine("england") +
      createLine("iran") +
      createLine("united-states") +
      createLine("wales"),
    createLineScout("england") +
      createLineScout("iran") +
      createLineScout("united-states") +
      createLineScout("wales")
  ) +
  createTable(
    "c",
    createLine("argentina") +
      createLine("saudi-arabia") +
      createLine("mexico") +
      createLine("poland"),
    createLineScout("argentina") +
      createLineScout("saudi-arabia") +
      createLineScout("mexico") +
      createLineScout("poland")
  ) +
  createTable(
    "d",
    createLine("france") +
      createLine("australia") +
      createLine("denmark") +
      createLine("tunisia"),
    createLineScout("france") +
      createLineScout("australia") +
      createLineScout("denmark") +
      createLineScout("tunisia")
  ) +
  createTable(
    "e",
    createLine("spain") +
      createLine("costa-rica") +
      createLine("germany") +
      createLine("japan"),
    createLineScout("spain") +
      createLineScout("costa-rica") +
      createLineScout("germany") +
      createLineScout("japan")
  ) +
  createTable(
    "f",
    createLine("belgium") +
      createLine("canada") +
      createLine("morocco") +
      createLine("croatia"),
    createLineScout("belgium") +
      createLineScout("canada") +
      createLineScout("morocco") +
      createLineScout("croatia")
  ) +
  createTable(
    "g",
    createLine("brazil") +
      createLine("serbia") +
      createLine("switzerland") +
      createLine("cameroon"),
    createLineScout("brazil") +
      createLineScout("serbia") +
      createLineScout("switzerland") +
      createLineScout("cameroon")
  ) +
  createTable(
    "h",
    createLine("portugal") +
      createLine("ghana") +
      createLine("uruguay") +
      createLine("south-korea"),
    createLineScout("portugal") +
      createLineScout("ghana") +
      createLineScout("uruguay") +
      createLineScout("south-korea")
  )
// console.log(table);

let arrayWorldCup = [
  {
    country: "qatar",
    group: "a",
  },
  {
    country: "ecuador",
    group: "a",
  },
  {
    country: "senegal",
    group: "a",
  },
  {
    country: "netherlands",
    group: "a",
  },
  {
    country: "england",
    group: "b",
  },
  {
    country: "iran",
    group: "b",
  },
  {
    country: "united-states",
    group: "b",
  },
  {
    country: "wales",
    group: "b",
  },
  {
    country: "argentina",
    group: "c",
  },
  {
    country: "saudi-arabia",
    group: "c",
  },
  {
    country: "mexico",
    group: "c",
  },
  {
    country: "poland",
    group: "c",
  },
  {
    country: "france",
    group: "d",
  },
  {
    country: "australia",
    group: "d",
  },
  {
    country: "denmark",
    group: "d",
  },
  {
    country: "tunisia",
    group: "d",
  },
  {
    country: "spain",
    group: "e",
  },
  {
    country: "costa-rica",
    group: "e",
  },
  {
    country: "germany",
    group: "e",
  },
  {
    country: "japan",
    group: "e",
  },
  {
    country: "belgium",
    group: "f",
  },
  {
    country: "canada",
    group: "f",
  },
  {
    country: "morocco",
    group: "f",
  },
  {
    country: "croatia",
    group: "f",
  },
  {
    country: "brazil",
    group: "g",
  },
  {
    country: "serbia",
    group: "g",
  },
  {
    country: "switzerland",
    group: "g",
  },
  {
    country: "cameroon",
    group: "g",
  },
  {
    country: "portugal",
    group: "h",
  },
  {
    country: "ghana",
    group: "h",
  },
  {
    country: "uruguay",
    group: "h",
  },
  {
    country: "south-korea",
    group: "h",
  },
]

function createLineScout(country){
  return `<tr>
			<th><img class="scoutCountry" src="./assets/icon-${country}.svg" alt=""></th>
			<td>0</td>
			<td>0</td>
			<td>0</td>
			<td>0</td>
			<td>0</td>
			<td>0</td>
			<td>0</td>
		</tr>`
}

function createTableScout(lineScout){
  return `<table class="tableScout">
	<thead class="headScout">
    <tr>
      <th colspan="8" scope="colgroup"><button class="backGroup" type="submit">voltar</button></th>
    </tr>
		<tr>
			<th></th>
			<th>J</th>
			<th>V</th>
			<th>D</th>
			<th>P</th>
			<th>GP</th>
			<th>GC</th>
			<th>SG</th>	
		</tr>
	</thead>
	<tbody class="bodyScout">
		${lineScout}
	</tbody>`
}

const headTableGroup = document.querySelectorAll("thead.headTable");
const headTableScout = document.querySelectorAll("thead.headScout");
const tableScout = document.querySelectorAll("table.tableScout");
const tableGroup = document.querySelectorAll("table.tableGroup");
const buttonGroup = document.querySelectorAll("button.backGroup")

for(let index = 0; index < headTableGroup.length; index++){
  const elementGroup = headTableGroup[index];
  // const elementScout = headTableScout[index];
  const elementTableGroup = tableGroup[index];
  const elementTableScout = tableScout[index];
  const elementButton = buttonGroup[index]

  elementGroup.addEventListener("click", function(){

    console.log("Click")
    elementTableGroup.style.display = "none"
    elementTableScout.style.display = "table"
  })

  elementButton.addEventListener("click", function () {
    // console.log("Click")
    elementTableGroup.style.display = "table"
    elementTableScout.style.display = "none"
  })
}