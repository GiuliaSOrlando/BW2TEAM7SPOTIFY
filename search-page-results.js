// CODICE NON LEGATO ALL'API

document.querySelectorAll('[data-bs-toggle="tooltip"]').forEach((tooltip) => {
  new bootstrap.Tooltip(tooltip)
})

//FETCH
const MetalUrl =
  "https://striveschool-api.herokuapp.com/api/deezer/search?q=heavymetal"

const rockUrl =
  "https://striveschool-api.herokuapp.com/api/deezer/search?q=rock"

// Creo la sezione con 6 album
const populateAlbums1 = function (elements) {
  for (let i = 6; i < 12; i++) {
    const albumRow = document.getElementById("album-row1")
    const newCol = document.createElement("div")
    newCol.classList.add("col-xs-12", "col-md-6", "col-lg-4", "col-xl-2")
    newCol.innerHTML = `
                            <a href="./album-page.html?id=${elements.data[i].album.id}" class="text-decoration-none">
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
                          <h5 class="card-title card-text ">${elements.data[i].album.title}</h5>
                          <h6 class="card-subtitle card-text mb-2">${elements.data[i].artist.name}</h6>
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
                            <p class="card-title cir-bold text-white">${elements.data[i].album.title}</p>
                            <p class="card-text cir-light text-white">${elements.data[i].artist.name}</p>
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

// Funzione per la ricerca di risultati nella searchbar

let searchForm = document.getElementById("search-bar")
searchForm.addEventListener("submit", function (e) {
  e.preventDefault()
  const query = document.getElementById("search-bar-input-field")
  let queryValue = query.value
  const searchUrl = `https://striveschool-api.herokuapp.com/api/deezer/search?q=${queryValue}`
  console.log(searchUrl)
  getData(searchUrl, populateAlbums1)
})

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
  getData(QueenUrl, populateLibrary)
})
