console.log("hello")
// let r = document.getElementById("r")
// let p = document.getElementById("p")
// let s = document.getElementById("s")
let options = document.querySelectorAll(".choice")
let hand = document.getElementById("hand")
let cturn = document.getElementById("cturn")
let playbtn = document.getElementById("playbtn")
let playagainbtn = document.getElementById("playagainbtn")
let r = document.getElementById("r")
let res=document.getElementById("res")
console.log(r)
console.log(typeof (r))
let gamestart = false
let cc = Math.floor(Math.random() * 3) + 1
console.log(cc)

function change(event) {
  if (!gamestart) return;
  // let inetervalid=setInterval(()=>{
  // console.log(selected)
  // console.log(typeof (selected))
  const elem = event.target.id;
  // console.log(elem)
  hand.style.display = 'block'
  cturn.style.display = 'block'
  uturn.style.display = 'block'
  setTimeout(() => {
    hand.style.display = 'none'
  }, 1800)
  // elem.addEventListener('click', () => {
  if (cc == 1) {
    setTimeout(() => {
      hand1.style.display = 'inline'

    }, 2000)
  }
  else if (cc == 2) {
    setTimeout(() => {
      hand2.style.display = 'inline'
    }, 2000)
  }
  else if (cc == 3) {
    setTimeout(() => {
      hand3.style.display = 'inline'
    }, 2000)
  }
  if (elem == 'r') {
    setTimeout(() => {
      hand4.style.display = 'inline'

    }, 2000)
  }
  else if (elem == 'p') {
    setTimeout(() => {
      hand5.style.display = 'inline'
    }, 2000)
  }
  else if (elem == 's') {
    setTimeout(() => {
      hand6.style.display = 'inline'
    }, 2000)
  }
  disable()
  gamestart = false
  playbtn.style.display = 'none'
  game(cc,elem)
}

function enable() {
  options.forEach(option => {
    option.classList.remove('disabled');
    option.addEventListener('click', change)
  });
}
function disable() {
  options.forEach(option => {
    option.classList.add('disabled');
    option.removeEventListener('click', change)
  });
}
function reload() {
  window.location.reload();
}

playbtn.addEventListener('click', () => {
  playagainbtn.style.display = 'block'
  gamestart = true
  enable()

})
playagainbtn.addEventListener('click', () => {
  reload()
})
function game(cc,uc){
  console.log(cc,uc)
  if((cc==1&&uc=='r') || (cc==2 && uc=='p') || (cc==3&&uc=='s')){
   setTimeout(()=>{
     res.textContent="Draw \n play again!"
  },2500) 
  }
  else if((cc==1&&uc=='p') || (cc==2 && uc=='s') || (cc==3&&uc=='r')){
   setTimeout(()=>{
     res.textContent="You won!"
  },2500) 
  }
  else if((cc==1&&uc=='s') || (cc==2 && uc=='r') || (cc==3&&uc=='p')){
   setTimeout(()=>{
     res.textContent="you lost,comp won!"
  },2500) 
  }
}
