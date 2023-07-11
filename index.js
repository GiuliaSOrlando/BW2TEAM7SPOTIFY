document.querySelectorAll('[data-bs-toggle="tooltip"]').forEach((tooltip) => {
  new bootstrap.Tooltip(tooltip)
})

const albumUrl =
  "https://striveschool-api.herokuapp.com/api/deezer/search?q=queen"

const getData = function (url, foo) {
  fetch(url)
    .then((res) => {
      if (res.ok) {
        return res.json()
      } else {
        throw new Error("Errore nella chiamata")
      }
    })
    .then((data) => {
      foo(data)
    })
    .catch((err) => {
      console.log(err)
    })
}

getData(albumUrl, console.log)
