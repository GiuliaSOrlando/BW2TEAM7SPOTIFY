const originatingUrl =
  "https://striveschool-api.herokuapp.com/api/deezer/search?q=queen"

URLSearchParams(location.search)
let albumID = addressBarContent.get("id")
let dynamicUrl = originatingUrl + albumID

const populateTracklist = function (elements) {
  for (let i = 0; i < 6; i++) {
    const tracksContainer = document.getElementById("tracks-container")
    const newCol = document.createElement("div")
    newCol.classList.add("track")
    newCol.innerHTML = `
                     <div class="track-num">1</div>
                <div class="song">
                  <h3 class="song-title">Song Title</h3>
                  <p>authors</p>
                </div>
                <div class="song-length"><span></span>2:06 <span></span></div>
      `

    tracksContainer.appendChild(newCol)
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
      elements.forEach((element) => {
        console.log(element.data[i].album.tracklist)
      })
    })
    .catch((err) => {
      console.log(err)
    })
}

getDataNew(dynamicUrl)
