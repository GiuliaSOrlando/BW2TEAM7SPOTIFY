const originatingUrl = "https://striveschool-api.herokuapp.com/api/deezer/artist/"
let addressBarContent = new URLSearchParams(location.search)
let artistId = addressBarContent.get('id')
let dynamicUrl = originatingUrl + artistId

console.log(dynamicUrl)

const populateAlbums = function (elements) {
    for (let i = 0; i < 48; i++) {
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

// getData(dynamicUrl, )
