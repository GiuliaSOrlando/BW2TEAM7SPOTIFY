const shuffleBtn = document.getElementById("shuffle-button")
shuffleBtn.addEventListener("click", function () {
  shuffleBtn.classList.toggle("active-btn")
})

const repeatBtn = document.getElementById("repeat-button")
repeatBtn.addEventListener("click", function () {
  repeatBtn.classList.toggle("active-btn")
})
