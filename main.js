function createGame(player1, hour, player2, group) {
  return `
  <li>
      <div class="info-country">
        <img class="country" src="./assets/icon-${player1}.svg" alt=""><span class="name-country">${player1}</span>
      </div>
      <div id="details">
        <strong>Grupo ${group}</strong>
        <strong>${hour}</strong>
      </div>
      <div class="info-country">
        <img class="country" src="./assets/icon-${player2}.svg" alt=""><span class="name-country">${player2}</span>
      </div>
  </li>
  `
}

let delay = -0.4
function createCard(date, day, games) {
  delay = delay + 0.4
  return `
  <div class="card" style="animation-delay: ${delay}s">
      <h2>${date} <span>${day}</span></h2>
      <ul>
        ${games}
      </ul>
  </div>
          `
}

document.querySelector("#cards").innerHTML = createCard(
  "24/11",
  "quinta",
  createGame("switzerland", "07:00", "cameroon", "g") +
  createGame("uruguay", "10:00", "south-korea", "h") +
  createGame("ghana", "13:00", "portugal", "h") +
  createGame("brazil", "16:00", "serbia", "g")
)+
createCard(
  "28/11",
  "segunda",
  createGame("brazil", "13:00", "switzerland", "g") +
  createGame("portugal", "16:00", "uruguay", "h")
) + 
createCard("02/12", "sexta", createGame("brazil", "16:00", "cameroon", "g"))

//events
const flag_country = document.getElementsByClassName("country");
const name_country = document.getElementsByClassName("name-country");

for (let index = 0; index < flag_country.length; index++) {
  const this_flag = flag_country[index];
  const this_country = name_country[index];

  this_flag.addEventListener("mouseover", function () {
    this_country.style.display = "block";
  })

  this_flag.addEventListener("mouseout", function(){
     this_country.style.display = "none";
  })
}
