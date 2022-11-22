export var arrayWorldCup = [
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

export class Players {
  constructor(country, game, win, loss, draw, aGoals, fGoals) {
    this.country = country
    this.game = game
    this.win = win
    this.loss = loss,
    this.draw = draw,
    this.aGoals = aGoals,
    this.fGoals = fGoals
  }
  get countryName() {
      return this.country;
  };

  get dGoals(){
    return this.#calcDiferenceGoals
  }
  
  #calcDiferenceGoals(){
    return this.fGoals - this.aGoals
  }

  get points(){

  }

}

const qatar = arrayWorldCup[0].country1
const ecuador = arrayWorldCup[0].country2
const senegal = arrayWorldCup[0].country3
const netherlands = arrayWorldCup[0].country4
const england = arrayWorldCup[1].country1
const iran = arrayWorldCup[1].country2
const united_states = arrayWorldCup[1].country3
const wales = arrayWorldCup[1].country4
const argentina = arrayWorldCup[2].country1
const saudi_arabia = arrayWorldCup[2].country2
const mexico = arrayWorldCup[2].country3
const poland = arrayWorldCup[2].country4
const france = arrayWorldCup[3].country1
const australia = arrayWorldCup[3].country2
const denmark = arrayWorldCup[3].country3
const tunisia = arrayWorldCup[3].country4
const spain = arrayWorldCup[4].country1
const costa_rica = arrayWorldCup[4].country2
const germany = arrayWorldCup[4].country3
const japan = arrayWorldCup[4].country4
const belgium = arrayWorldCup[5].country1
const canada = arrayWorldCup[5].country2
const morocco = arrayWorldCup[5].country3
const croatia = arrayWorldCup[5].country4
const brazil = arrayWorldCup[6].country1
const serbia = arrayWorldCup[6].country2
const switzerland = arrayWorldCup[6].country3
const cameroon = arrayWorldCup[6].country4
const portugal = arrayWorldCup[7].country1
const ghana = arrayWorldCup[7].country2
const uruguay = arrayWorldCup[7].country3
const south_korea = arrayWorldCup[7].country4


export const arrayGames = [
  {
    date: "11/20/2022",
    hour: "13",
    group: arrayWorldCup[0].group, //a
    country1: qatar, //qatar
    country2: ecuador, //ecuador
  },
  {
    date: "11/21/2022",
    hour: "10",
    group: arrayWorldCup[1].group, //b
    country1: england, //england
    country2: iran, //iran
  },
  {
    date: "11/21/2022",
    hour: "13",
    group: arrayWorldCup[0].group, //a
    country1: senegal, //ghana
    country2: netherlands, //netherlands
  },
  {
    date: "11/21/2022",
    hour: "16",
    group: arrayWorldCup[1].group, //b
    country1: united_states, //united-states
    country2: wales, //wales
  },
  {
    date: "11/22/2022",
    hour: "07",
    group: arrayWorldCup[2].group, //c
    country1: argentina, //argentina
    country2: saudi_arabia, //saudi-arabia
  },
  {
    date: "11/22/2022",
    hour: "10",
    group: arrayWorldCup[3].group, //d
    country1: denmark, // denmark
    country2: tunisia, //tunisia
  },
  {
    date: "11/22/2022",
    hour: "13",
    group: arrayWorldCup[2].group, //c
    country1: mexico, //mexico
    country2: poland, //poland
  },
  {
    date: "11/22/2022",
    hour: "16",
    group: arrayWorldCup[3].group, //d
    country1: france, // france
    country2: australia, //australia
  },
  {
    date: "11/23/2022",
    hour: "07",
    group: arrayWorldCup[5].group, //f
    country1: morocco, //morocco
    country2: croatia, //croatia
  },
  {
    date: "11/23/2022",
    hour: "10",
    group: arrayWorldCup[4].group, //e
    country1: germany, //germany
    country2: japan, //japan
  },
  {
    date: "11/23/2022",
    hour: "13",
    group: arrayWorldCup[4].group, //e
    country1: spain, //spain
    country2: costa_rica, //costa-rica
  },
  {
    date: "11/23/2022",
    hour: "16",
    group: arrayWorldCup[5].group, //f
    country1: belgium, //belgium
    country2: canada, //canada
  },
  {
    date: "11/24/2022",
    hour: "07",
    group: arrayWorldCup[6].group, //g
    country1: switzerland, //switzerland
    country2: cameroon, //cameroon
  },
  {
    date: "11/24/2022",
    hour: "10",
    group: arrayWorldCup[7].group, //h
    country1: uruguay, //uruguay
    country2: south_korea, //south-korea
  },
  {
    date: "11/24/2022",
    hour: "13",
    group: arrayWorldCup[7].group, //h
    country1: ghana, //ghana
    country2: portugal, //portugal
  },
  {
    date: "11/24/2022",
    hour: "16",
    group: arrayWorldCup[6].group, //g
    country1: brazil, //brazil
    country2: serbia, //serbia
  },
  {
    date: "11/25/2022",
    hour: "07",
    group: arrayWorldCup[1].group, //b
    country1: wales, //wales
    country2: iran, //iran
  },
  {
    date: "11/25/2022",
    hour: "10",
    group: arrayWorldCup[0].group, //a
    country1: qatar, //qatar
    country2: senegal, //senegal
  },
  {
    date: "11/25/2022",
    hour: "13",
    group: arrayWorldCup[0].group, //a
    country1: netherlands, //netherlands
    country2: ecuador, //ecuador
  },
  {
    date: "11/25/2022",
    hour: "16",
    group: arrayWorldCup[1].group, //b
    country1: england, //england
    country2: united_states, //united-state
  },
  {
    date: "11/26/2022",
    hour: "07",
    group: arrayWorldCup[3].group, //d
    country1: tunisia, //tunisia
    country2: australia, //australia
  },
  {
    date: "11/26/2022",
    hour: "10",
    group: arrayWorldCup[2].group, //c
    country1: poland, //poland
    country2: saudi_arabia, //saudi-arabia
  },
  {
    date: "11/26/2022",
    hour: "13",
    group: arrayWorldCup[3].group, //d
    country1: france, //france
    country2: denmark, //denmark
  },
  {
    date: "11/26/2022",
    hour: "16",
    group: arrayWorldCup[2].group, //c
    country1: argentina, //argentina
    country2: mexico, //mexico
  },
  {
    date: "11/27/2022",
    hour: "07",
    group: arrayWorldCup[4].group, //e
    country1: japan, //japan
    country2: costa_rica, //costa-rica
  },
  {
    date: "11/27/2022",
    hour: "10",
    group: arrayWorldCup[5].group, //f
    country1: belgium, //belgium
    country2: morocco, //morocco
  },
  {
    date: "11/27/2022",
    hour: "13",
    group: arrayWorldCup[5].group, //f
    country1: croatia, //croatia
    country2: canada, //canada
  },
  {
    date: "11/27/2022",
    hour: "16",
    group: arrayWorldCup[4].group, //e
    country1: spain, //spain
    country2: germany, //germany
  },
  {
    date: "11/28/2022",
    hour: "07",
    group: arrayWorldCup[6].group, //g
    country1: cameroon, //cameroon
    country2: serbia, //serbia
  },
  {
    date: "11/28/2022",
    hour: "10",
    group: arrayWorldCup[7].group, //h
    country1: south_korea, //south-korea
    country2: ghana, //ghana
  },
  {
    date: "11/28/2022",
    hour: "13",
    group: arrayWorldCup[6].group, //g
    country1: brazil, //brazil
    country2: switzerland, //switzerland
  },
  {
    date: "11/28/2022",
    hour: "16",
    group: arrayWorldCup[7].group, //h
    country1: portugal, //portugal
    country2: uruguay, //uruguay
  },
  {
    date: "11/29/2022",
    hour: "12",
    group: arrayWorldCup[0].group,
    country1: ecuador,
    country2: senegal,
  },
  {
    date: "11/29/2022",
    hour: "12",
    group: arrayWorldCup[0].group,
    country1: netherlands,
    country2: qatar,
  },
  {
    date: "11/29/2022",
    hour: "16",
    group: arrayWorldCup[1].group,
    country1: iran,
    country2: united_states,
  },
  {
    date: "11/29/2022",
    hour: "16",
    group: arrayWorldCup[1].group,
    country1: wales,
    country2: england,
  },
  {
    date: "11/30/2022",
    hour: "12",
    group: arrayWorldCup[3].group,
    country1: tunisia,
    country2: france,
  },
  {
    date: "11/30/2022",
    hour: "12",
    group: arrayWorldCup[3].group,
    country1: australia,
    country2: denmark,
  },
  {
    date: "11/30/2022",
    hour: "16",
    group: arrayWorldCup[2].group,
    country1: poland,
    country2: argentina,
  },
  {
    date: "11/30/2022",
    hour: "16",
    group: arrayWorldCup[2].group,
    country1: saudi_arabia,
    country2: mexico,
  },
  {
    date: "12/01/2022",
    hour: "12",
    group: arrayWorldCup[5].group,
    country1: croatia,
    country2: belgium,
  },
  {
    date: "12/01/2022",
    hour: "12",
    group: arrayWorldCup[5].group,
    country1: canada,
    country2: morocco,
  },
  {
    date: "12/01/2022",
    hour: "16",
    group: arrayWorldCup[4].group,
    country1: japan,
    country2: spain,
  },
  {
    date: "12/01/2022",
    hour: "16",
    group: arrayWorldCup[4].group,
    country1: costa_rica,
    country2: germany,
  },
  {
    date: "12/02/2022",
    hour: "12",
    group: arrayWorldCup[7].group,
    country1: south_korea,
    country2: portugal,
  },
  {
    date: "12/02/2022",
    hour: "12",
    group: arrayWorldCup[7].group,
    country1: ghana,
    country2: uruguay,
  },
  {
    date: "12/02/2022",
    hour: "16",
    group: arrayWorldCup[6].group,
    country1: serbia,
    country2: switzerland,
  },
  {
    date: "12/02/2022",
    hour: "16",
    group: arrayWorldCup[6].group,
    country1: cameroon,
    country2: brazil,
  },
]

export function crateHeader(local) {
  let page = ""
  if (local == "index") {
    page = "datas"
  } else {
    page = "grupos"
  }

  return `
    <div id="dropdown">
      <strong id="drop-theme"><button id="button-theme" type="submit">Tema <img id="arrow" src="./assets/icon-arrow.svg" alt="arrow"></button></strong>
      <div id="get_theme">
        <label class="container" id="yellow">
          <input type="radio" name="theme" id="yellow" value="yellow"/>
          <span class="checkmark" id="span_yellow"></span>
        </label>
        <label class="container" id="blue">
          <input type="radio" name="theme" id="blue" value="blue"/>
          <span class="checkmark" id="span_blue"></span>
        </label>
        <label class="container" id="green">
          <input type="radio" name="theme" id="green" value="green"/>
          <span class="checkmark" id="span_green"></span>
        </label> 
      </div>
    </div>
    <img id="trophy" src="./assets/logo-world-cup.svg" alt="Taça da Copa do Mundo">
    <nav><a href="./${local}.html"><button type="submit">ir para ${page}</button></a><div id="timer"></div></nav>
  `
}

export function createFooter() {
  return `
  <div class="div-footer">
    <adress>
      <ul class="ul-footer">
          <li>Felipe Coelho</li>
          <li><a href="mailto:felipeaacoelho@gmail.com">felipeaacoelho@gmail.com</a></li>
          <li><a href="tel:+5586999642604">(86)9 99642604</a></li>
      </ul>
    </adress>
    <a href="https://www.rocketseat.com.br/">Site inspirado no Projeto NLW-10-Copa: Rocketseat</a>
    <img id="logo-nlw" src="./assets/logo.svg" alt="NLW-10-Copa">
  </div>
  `
}
export function setTheme() {
  const color_theme = document.querySelectorAll("input")
  let body = document.querySelector("body")

  for (const iterator of color_theme) {
    // console.log(iterator.checked)
    iterator.addEventListener("click", function () {
      // console.log(iterator.value)
      if (iterator.checked) body.className = iterator.value
    })
  }
  getTheme()
}

export function getTheme() {
  document.querySelector("body").addEventListener("change", function () {
    localStorage.setItem("color", document.querySelector("body").className)
  })
}
