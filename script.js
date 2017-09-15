
const button = document.querySelectorAll('.button');
const strictMode = document.querySelector('button');

strictMode.addEventListener("click", function(){
    if(this.innerText === 'OFF') {
      this.innerText = 'ON';
      this.style.background = '#ec2a1d';
    } else {
      this.innerText = 'OFF';
      this.style.background = '#6faf3b';
    }
});

function startGame() {
  var 
}
