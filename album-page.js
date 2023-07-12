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

const albumCover = function (elements) {
  const albumDiv = document.getElementById("album-img")
  albumDiv.innerHTML = `
                     <img
                    src="${elements.cover}"
                    alt=""
                  />
      `
}

const populateTracks = function (elements) {
  let trackList = elements.tracklist
  console.log(trackList)
  for (let i = 0; i < 6; i++) {
    const tracksRow = document.getElementById("tracks-container")
    const newCol = document.createElement("div")
    newCol.classList.add("track")
    newCol.innerHTML = `
      <div class="track-num">${i}</div>
            <div class="song">
              <h3 class="song-title">${elements.data[i].title}</h3>
              <p>authors</p>
            </div>
            <div class="song-length"><span></span>2:06 <span></span></div>
      `

    tracksRow.appendChild(newCol)
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

getDataNew(dynamicUrl, albumCover)
getDataNew(dynamicUrl, populateTracks)
getDataNew(rockUrl, populateLibrary)
