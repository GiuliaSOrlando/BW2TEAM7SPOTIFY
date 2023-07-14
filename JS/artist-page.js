//codice non legato API
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

const originatingUrl =
  "https://striveschool-api.herokuapp.com/api/deezer/artist/"
let addressBarContent = new URLSearchParams(location.search)
let artistId = addressBarContent.get("id")
let dynamicUrl = originatingUrl + artistId

console.log(dynamicUrl)

// Popolo le tracce
const populateTracks = function (elements) {
  let tracksContainer = document.getElementById("tracks-container")
  tracksContainer.innerHTML = ""
  for (let i = 0; i < elements.data.length; i++) {
    let track = document.createElement("div")
    track.classList.add("track")
    track.innerHTML = `
    <div class="track-img">
                    <img
                      src="${elements.data[i].album.cover_small}"
                      alt=""
                    />
                  </div>
                  <div class="song">
                    <h3 class="song-title">${elements.data[i].title}</h3>
                    <p>authors</p>
                  </div>
                  <div class="views d-flex align-items-center">23456</div>
                  <div class="song-length"><span></span>${Math.floor(
                    elements.data[i].duration / 60
                  )}:${Math.floor(
      ((elements.data[i].duration % 60) * 10) / 6
    )} <span></span></div>
    `
    tracksContainer.appendChild(track)
    console.log(elements.data[i].title)
  }
}

// Popolo gli album
const populateAlbums = function (elements) {
  for (let i = 0; i < 47; i++) {
    const searchResultsRow = document.getElementById("related-search-row")
    const newCol = document.createElement("div")
    newCol.classList.add(
      "col-xs-12",
      "col-md-6",
      "col-lg-4",
      "col-xl-2",
      "mb-3"
    )
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

    searchResultsRow.appendChild(newCol)
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

getData(dynamicUrl, function (el) {
  getData(el.tracklist, function (el) {
    populateTracks(el)
  })
  console.log(el)
  let artistName = el.name
  const searchQuery =
    "https://striveschool-api.herokuapp.com/api/deezer/search?q="
  let searchUrl = searchQuery + artistName
  console.log(searchUrl)

  getData(searchUrl, populateAlbums)
})

//Numero di fan
getData(dynamicUrl, function (elements) {
  let numFan = document.getElementById("nb-fan")
  numFan.innerHTML = `${elements.nb_fan} ascoltatori mensili`
  let headerArtistName = document.getElementById("header-artist-name")
  headerArtistName.innerHTML = elements.name
})

// Aggiungo dinamicamente l'immagine header

const generateWrapperImage = function (el) {
  let headerWrapper = document.getElementById("heading-wrapper")
  headerWrapper.style.backgroundImage = `url('${el.picture_xl}')`
}

getData(dynamicUrl, function (el) {
  generateWrapperImage(el)
})

// Inserisco informazioni ed elementi nel modale
getData(dynamicUrl, function (elements) {
  let artistModalImage = document.getElementById("artist-info-modal-img")
  artistModalImage.setAttribute("src", `${elements.picture_xl}`)
  let modalNumFan = document.getElementById("modal-nb-fan")
  modalNumFan.innerHTML = `${elements.nb_fan} ascoltatori mensili`
  let firstModalCslImage = document.getElementById("modal-carousel-img1")
  let secondModalCslImage = document.getElementById("modal-carousel-img2")
  let thirdModalCslImage = document.getElementById("modal-carousel-img3")
  firstModalCslImage.setAttribute("src", `${elements.picture_xl}`)
  secondModalCslImage.setAttribute("src", `${elements.picture_xl}`)
  thirdModalCslImage.setAttribute("src", `${elements.picture_xl}`)
  let insideModalNumFan = document.getElementById("inside-modal-nb-fan")
  insideModalNumFan.innerHTML = `${elements.nb_fan}`
})

//aggiungo funzione populateLibrary
// Creo la lista nella libreria
const populateLibrary = function (elements) {
  for (let i = 0; i < 15; i++) {
    const libraryDeck = document.getElementById("library-deck")
    const newCol = document.createElement("div")
    newCol.classList.add("card", "card-libreria")
    newCol.innerHTML = `
                      <a href="/HTML/album-page.html?id=${elements.data[i].album.id}" class="text-decoration-none">
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
                          <p class="card-title cir-bold text-white"> <a href="/HTML/album-page.html?id=${elements.data[i].album.id}">${elements.data[i].album.title}</a></p>
                          <p class="card-text cir-light text-white"> <a href="/HTML/artist-page.html?id=${elements.data[i].artist.id}"> ${elements.data[i].artist.name} </a></p>
                          </div>
                        </div>
                      </div>
                      </a>
      `

    libraryDeck.appendChild(newCol)
  }
}


//aggiungo eventlistener ai bottoni libreria

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
  getData(rockUrl, function(elements){
    
    populateLibrary(elements)
  })
  

const albumBtn = document.getElementById("album-btn")
const artistBtn = document.getElementById("artist-btn")

albumBtn.addEventListener("click", () => {
  console.log(rockUrl)
  let libraryDeck = document.getElementById("library-deck")
  libraryDeck.innerHTML=""
  getData(rockUrl, function(elements){
    
    populateLibrary(elements)
  })
})

artistBtn.addEventListener("click", () => {
  let libraryDeck = document.getElementById("library-deck")
  libraryDeck.innerHTML=""
  getData(LoveUrl, function(elements){
    populateLibrary(elements)
  })
})