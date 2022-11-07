function createLine(country) {
  return `
  <tr>
        <td scope="col"><img class="country" src="./assets/icon-${country}.svg" alt=""></th>
        <td scope="col">${country}</th>
  </tr>
  `
}

function createTable(group, line) {
  return `
  <table  cellspacing="15">
    <thead>
        <tr>
          <th colspan="2" scope="colgroup">Grupo ${group}</th>
        </tr>
    </thead>
    <tbody>
        ${line}
    </tbody>
  </table>
  `
}

// console.log(document.getElementById("groups"))
document.getElementById("groups").innerHTML =
  createTable(
    "a",
    createLine("qatar") +
      createLine("ecuador") +
      createLine("senegal") +
      createLine("netherlands")
  ) +
  createTable(
    "b",
    createLine("england") +
      createLine("iran") +
      createLine("united-states") +
      createLine("wales")
  ) +
  createTable(
    "c",
    createLine("argentina") +
      createLine("saudi-arabia") +
      createLine("mexico") +
      createLine("poland")
  ) +
  createTable(
    "d",
    createLine("france") +
      createLine("australia") +
      createLine("denmark") +
      createLine("tunisia")
  ) +
  createTable(
    "e",
    createLine("spain") +
      createLine("costa-rica") +
      createLine("germany") +
      createLine("japan")
  ) +
  createTable(
    "f",
    createLine("belgium") +
      createLine("canada") +
      createLine("morocco") +
      createLine("croatia")
  ) +
  createTable(
    "g",
    createLine("brazil") +
      createLine("serbia") +
      createLine("switzerland") +
      createLine("cameroon")
  ) +
  createTable(
    "h",
    createLine("portugal") +
      createLine("ghana") +
      createLine("uruguay") +
      createLine("south-korea")
  )
