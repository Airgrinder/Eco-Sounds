const switchButtons = document.querySelectorAll('.header-nav-item')
const playBtn = document.querySelector('.play')
const main = document.querySelector('main')

const audio = new Audio()


let currentSound = ''
let isPlay = false
audio.src = 'assets/audio/forest.mp3'


function play() {
  audio.currentTime = 0
  if (isPlay) {   //if true => stop
    playBtn.style.backgroundImage = 'url(assets/svg/play.svg)'
    audio.pause()
    return isPlay = false
  }
  playBtn.style.backgroundImage = 'url(assets/svg/pause.svg)' // else play
  console.log('test')
  audio.play()
  isPlay = true
}

function switcher(s) {
  audio.src = 'assets/audio/' + s + '.mp3'
  main.style.backgroundImage = 'url(assets/img/' + s + '.jpg)'
  if (isPlay) {
    audio.play()
  }
  for (const i of switchButtons) {
    i.style.color = ''
    i.classList.add('hover')
  }
  document.querySelector('.' + s).style.color = '#bdae82'
}



for (const button of switchButtons) {
  button.addEventListener('click', () => switcher(button.classList[1]))
}

playBtn.addEventListener('click', play)
