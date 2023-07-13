let playing = false

const QueenUrl =
  "https://striveschool-api.herokuapp.com/api/deezer/search?q=queen"

const rockUrl =
  "https://striveschool-api.herokuapp.com/api/deezer/search?q=rock"

const originatingUrl =
  "https://striveschool-api.herokuapp.com/api/deezer/album/"

let addressBarContent = new URLSearchParams(location.search)
let albumID = addressBarContent.get("id")
let dynamicUrl = originatingUrl + albumID
console.log(dynamicUrl)

const albumInfo = function (elements) {
  const albumDiv = document.getElementById("album-img")
  albumDiv.innerHTML = `
                     <img
                    src="${elements.cover}"
                    alt=""
                  />
      `
  const albumTextualInfo = document.getElementById("album-info-section")
  albumTextualInfo.innerHTML = `
                  <p>Album</p>
                  <h1 class="fs-1">${elements.title}</h1>
                  <p>${elements.artist.name} ${elements.release_date.slice(
    0,
    4
  )} ${elements.nb_tracks} brani, ${Math.floor(elements.duration / 60)} min ${
    elements.duration % 60
  } sec</p>
  `
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

const populateTracks = function (elements, i) {
  let tracksArray = elements.tracks.data
  console.log(tracksArray)
  tracksArray.forEach((tracks, i) => {
    const tracksRow = document.getElementById("tracks-container")
    const newCol = document.createElement("div")
    newCol.classList.add("track")
    newCol.innerHTML = `
      <div id="song-button${i}" class="track-num d-flex mb-3">${i + 1}</div>
            <div class="song">
              <h3 class="song-title fs-5 mb-0">${tracks.title}</h3>
              <p>${tracks.artist.name}</p>
            </div>
            <div class="song-length"><span></span>${Math.floor(
              tracks.duration / 60
            )}:${tracks.duration % 60}<span></span></div>
      `

    tracksRow.appendChild(newCol)

    let songBtn = document.getElementById(`song-button${i}`)
    songBtn.addEventListener("click", function () {
      console.log(`L'url della traccia da riprodurre è ${tracks.preview}`)
      const song = new Audio(tracks.preview)
      song.play()
    })
  })
}

// Funzione generica per la fetch
const getDataNew = function (url, foo) {
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

getDataNew(dynamicUrl, albumInfo)
getDataNew(dynamicUrl, populateTracks)
getDataNew(rockUrl, populateLibrary)
