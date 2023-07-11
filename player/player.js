const shuffleBtn = document.getElementById("shuffle-button")
shuffleBtn.addEventListener("click", function () {
  shuffleBtn.classList.toggle("active-btn")
})

const repeatBtn = document.getElementById("repeat-button")
repeatBtn.addEventListener("click", function () {
  repeatBtn.classList.toggle("active-btn")
})

const aboutBtn = document.getElementById("about-button")
aboutBtn.addEventListener("click", function () {
  aboutBtn.classList.toggle("active-btn")
})

const queueBtn = document.getElementById("queue-button")
queueBtn.addEventListener("click", function () {
  queueBtn.classList.toggle("active-btn")
})

const connectBtn = document.getElementById("connect-button")
connectBtn.addEventListener("click", function () {
  connectBtn.classList.toggle("active-btn")
})

const volumeBtn = document.getElementById("volume-button")
volumeBtn.addEventListener("click", function () {
  volumeBtn.classList.toggle("active-btn")
})
