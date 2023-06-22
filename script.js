






const coin = document.querySelector('#coin');
const button = document.querySelector('#flip');
const status = document.querySelector('#status');


function deferFn(callback, ms){
  setTimeout(callback, ms);
}

function processResult(result) {
  status.innerText = result.toUpperCase();
}

function flipCoin(){
  coin.setAttribute('class', '');
  const random = Math.random();
  const result = random < 0.5 ? 'heads' : 'tails';
  deferFn(function(){
    coin.setAttribute('class', 'animate-' + result);
    deferFn(processResult.bind(null, result), 2900);
  }, 100);
}

function playAudio() {
  var audio = new Audio('audiofile.mp3'); 
  audio.play();
}



button.addEventListener('click', flipCoin)
button.addEventListener('click', playAudio);


