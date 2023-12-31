// CODICE NON LEGATO ALL'API
//player
for (let e of document.querySelectorAll(
  'input[type="range"].slider-progress'
)) {
  e.style.setProperty("--value", e.value)
  e.style.setProperty("--min", e.min == "" ? "0" : e.min)
  e.style.setProperty("--max", e.max == "" ? "100" : e.max)
  e.addEventListener("input", () => e.style.setProperty("--value", e.value))
}

document.querySelectorAll('[data-bs-toggle="tooltip"]').forEach((tooltip) => {
  new bootstrap.Tooltip(tooltip)
})

let greetingText = document.getElementById("greeting-message")
const timeNow = new Date().getHours()
let greeting =
  timeNow >= 5 && timeNow < 12
    ? "Buongiorno"
    : timeNow >= 12 && timeNow < 18
    ? "Buon pomeriggio"
    : "Buonasera"
greetingText.innerText = `${greeting}`

//FETCH
const LoveUrl =
  "https://striveschool-api.herokuapp.com/api/deezer/search?q=Love"

const MetalUrl =
  "https://striveschool-api.herokuapp.com/api/deezer/search?q=ironmaiden"

const MerolaUrl =
  "https://striveschool-api.herokuapp.com/api/deezer/search?q=mariomerola"

const LigabueUrl =
  "https://striveschool-api.herokuapp.com/api/deezer/search?q=Ligabue"

const rockUrl =
  "https://striveschool-api.herokuapp.com/api/deezer/search?q=rock"

// Creo le tessere sotto il saluti
const populateGreetings = function (elements) {
  for (let i = 0; i < 6; i++) {
    const greetingsRow = document.getElementById("greetings-row")
    const newCol = document.createElement("div")
    newCol.classList.add("col", "mb-2", "col-md-4", "col-sm-6", "col-4")

    newCol.innerHTML = ` 
      <div class="card p-0 border-0">
                    <a href="/HTML/album-page.html?id=${elements.data[i].album.id}" class="text-decoration-none">
                    <div
                      class="row row-cols-1 row-cols-lg-2 h-25 align-items-center colo p-0 m-0"
                    >
                      <div class="col p-0">
                        <img
                          src="${elements.data[i].album.cover_medium}"
                          class="img-fluid h-100 rounded-start"
                          alt="..."
                        />
                      </div>
                      <div class="col-md-8 d-flex d-none d-lg-block ">
                        <div class="card-body ">
                          <h5 class="card-title text-white ">${elements.data[i].album.title}</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                    </a>
      `

    greetingsRow.appendChild(newCol)
  }
}

// Creo la sezione con 6 album
const populateAlbums1 = function (elements) {
  for (let i = 6; i < 10; i++) {
    const albumRow = document.getElementById("album-row1")
    const newCol = document.createElement("div")
    newCol.classList.add("col-6", "col-md-6", "col-lg-4", "col-xl-3")
    newCol.innerHTML = `
                            <a href="/HTML/album-page.html?id=${elements.data[i].album.id}" class="text-decoration-none text-white">
                              <div class="card h-100 text-white">
                        <div id="c-img">
                          <img
                            src="${elements.data[i].album.cover_medium}"
                            class="card-img-top img-album"
                            alt="Immagine 1"
                          />
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="48"
                            height="48"
                            viewBox="0 0 24 24"
                            fill="#1db954"
                            stroke-width="1"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="feather feather-play-circle play-card"
                          >
                            <circle cx="12" cy="12" r="10"></circle>
                            <polygon
                              points="10 8 16 12 10 16 10 8"
                              fill="black"
                            ></polygon>
                          </svg>
                        </div>
                        <div class="card-body text-white">
                          <h5 class="card-title card-text text-truncate">${elements.data[i].album.title}</h5>
                          <a href="/HTML/artist-page.html?id=${elements.data[i].artist.id}" class="text-decoration-none mt-1 text-white" >
                           <h6 class="card-subtitle card-text mt-1 mb-2">${elements.data[i].artist.name}</h6>
                          </a>
                        </div>
                      </div>
                            </a>
      `

    albumRow.appendChild(newCol)
  }
}

const populateAlbums2 = function (elements) {
  for (let i = 6; i < 10; i++) {
    const albumRow = document.getElementById("album-row2")
    const newCol = document.createElement("div")
    newCol.classList.add("col-6", "col-md-6", "col-lg-4", "col-xl-3")
    newCol.innerHTML = `
                            <a href="/HTML/album-page.html?id=${elements.data[i].album.id}" class="text-decoration-none mt-1 text-white">
                              <div class="card h-100 text-white">
                        <div id="c-img">
                          <img
                            src="${elements.data[i].album.cover_medium}"
                            class="card-img-top img-album"
                            alt="Immagine 1"
                          />
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="48"
                            height="48"
                            viewBox="0 0 24 24"
                            fill="#1db954"
                            stroke-width="1"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="feather feather-play-circle play-card"
                          >
                            <circle cx="12" cy="12" r="10"></circle>
                            <polygon
                              points="10 8 16 12 10 16 10 8"
                              fill="black"
                            ></polygon>
                          </svg>
                        </div>
                        <div class="card-body text-white">
                          <h5 class="card-title card-text text-truncate ">${elements.data[i].album.title}</h5>
                          <a href="/HTML/artist-page.html?id=${elements.data[i].artist.id}" class="text-decoration-none mt-1 text-white">
                          <h6 class="card-subtitle card-text mt-1 mb-2">${elements.data[i].artist.name}</h6>
                          </a>
                        </div>
                      </div>
                            </a>
      `

    albumRow.appendChild(newCol)
  }
}

const populateAlbums3 = function (elements) {
  for (let i = 6; i < 10; i++) {
    const albumRow = document.getElementById("album-row3")
    const newCol = document.createElement("div")
    newCol.classList.add("col-6", "col-md-6", "col-lg-4", "col-xl-3")
    newCol.innerHTML = `
                            <a href="/HTML/album-page.html?id=${elements.data[i].album.id}" class="text-decoration-none mt-1 text-white"">
                              <div class="card h-100 text-white">
                        <div id="c-img">
                          <img
                            src="${elements.data[i].album.cover_medium}"
                            class="card-img-top img-album"
                            alt="Immagine 1"
                          />
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="48"
                            height="48"
                            viewBox="0 0 24 24"
                            fill="#1db954"
                            stroke-width="1"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="feather feather-play-circle play-card"
                          >
                            <circle cx="12" cy="12" r="10"></circle>
                            <polygon
                              points="10 8 16 12 10 16 10 8"
                              fill="black"
                            ></polygon>
                          </svg>
                        </div>
                        <div class="card-body text-white">
                          <h5 class="card-title card-text text-truncate ">${elements.data[i].album.title}</h5>
                          <a href="/HTML/artist-page.html?id=${elements.data[i].artist.id}" class="text-decoration-none mt-1 text-white">
                          <h6 class="card-subtitle card-text mt-1 mb-2">${elements.data[i].artist.name}</h6>
                          </a>
                        </div>
                      </div>
                            </a>
      `

    albumRow.appendChild(newCol)
  }
}
// Creo la lista nella libreria
const populateLibrary = function (elements) {
  for (let i = 0; i < 15; i++) {
    const libraryDeck = document.getElementById("library-deck")
    const newCol = document.createElement("div")
    newCol.classList.add("card", "card-libreria")
    newCol.innerHTML = `
                        <div class="row no-gutters">
                        <div class="col-3">
                          <img
                            src="${elements.data[i].album.cover_small}"
                            class="card-img-top img-libreria flex-column"
                            alt="Album 1"
                          />
                        </div>
                        <div class="col-9 p-0">
                          <div class="card-body p-0 flex-row">
                            <p class="card-title cir-bold text-white mb-0"> <a class="text-white text-decoration-none" href="/HTML/album-page.html?id=${elements.data[i].album.id}">${elements.data[i].album.title}</a></p>
                            <p class="card-text cir-light text-white"> <a class="text-white text-decoration-none" href="/HTML/artist-page.html?id=${elements.data[i].artist.id}"> ${elements.data[i].artist.name} </a></p>
                          </div>
                        </div>
                      </div>
      `

    libraryDeck.appendChild(newCol)
  }
}

// Funzione generica per la fetch
const getData = function (url, foo) {
  fetch(url)
    .then((res) => {
      if (res.ok) {
        return res.json()
      } else {
        throw new Error("Errore nella chiamata")
      }
    })
    .then((elements) => {
      console.log(elements)
      foo(elements)
    })
    .catch((err) => {
      console.log(err)
    })
}

getData(LoveUrl, populateGreetings)
getData(MetalUrl, populateAlbums1)
getData(LigabueUrl, populateAlbums2)
getData(MerolaUrl, populateAlbums3)
getData(rockUrl, populateLibrary)

// Associo la funzione di popolazione della libreria al click dei pulsanti 'album' e 'artisti'

const albumBtn = document.getElementById("album-btn")
const artistBtn = document.getElementById("artist-btn")

albumBtn.addEventListener("click", () => {
  const libraryDeck = document.getElementById("library-deck")
  libraryDeck.innerHTML = ""
  getData(rockUrl, populateLibrary)
})

artistBtn.addEventListener("click", () => {
  const libraryDeck = document.getElementById("library-deck")
  libraryDeck.innerHTML = ""
  getData(LoveUrl, populateLibrary)
})
