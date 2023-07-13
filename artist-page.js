const originatingUrl =
  "https://striveschool-api.herokuapp.com/api/deezer/artist/"
let addressBarContent = new URLSearchParams(location.search)
let artistId = addressBarContent.get("id")
let dynamicUrl = originatingUrl + artistId

console.log(dynamicUrl)

const populateAlbums = function (elements) {
  for (let i = 0; i < 48; i++) {
    const albumRow = document.getElementById("album-row")
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

// let trackListUrl = getData(dynamicUrl, (elements)=>{
//     return elements.tracklist
// })
const populateTracks = function (elements) {
  let tracksContainer = document.getElementById("tracks-container")
  tracksContainer.innerHTML = ""
  for (let i = 0; i < elements.data.length; i++) {
    let track = document.createElement("div")
    track.classList.add("track")
    track.innerHTML = `
    <div class="track-img">
                    <img
                      src=""
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
// getData('https://striveschool-api.herokuapp.com/api/deezer/artist/64932/top?limit=50', function(elements){
//     populateTracks(elements)
// })
getData(dynamicUrl, function (el) {
  getData(el.tracklist, function (el) {
    populateTracks(el)
  })
})
// let trackListUrl = ""
// getData(dynamicUrl, (elements) =>{
//     trackListUrl = elements.tracklist
//     console.log(trackListUrl)
// })

// Aggiungo dinamicamente l'immagine header

const generateWrapperImage = function (el) {
  let headerWrapper = document.getElementById("heading-wrapper")
  headerWrapper.style.backgroundImage = `url('${el.picture_xl}')`
}

getData(dynamicUrl, function (el) {
  generateWrapperImage(el)
})
