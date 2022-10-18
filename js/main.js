const inputUm = document.getElementById('inputUm')
const inputDois = document.getElementById('inputDois')
const inputTres = document.getElementById('inputTres')
// console.log(input)

inputUm.addEventListener('click', toggleSwitch)
inputDois.addEventListener('click', toggleSwitch)
inputTres.addEventListener('click', toggleSwitch)

function toggleSwitch(e) {
  const el = e.target

  if(el === inputUm && inputTres.checked == true && inputUm.checked == true) {
    inputUm.checked = true
    inputTres.checked = false
  }
  if(el === inputDois && inputTres.checked == true && inputDois.checked == false) {
    inputDois.checked = true
    inputTres.checked = false
  }

  if(el == inputDois && inputUm.checked == true && inputTres.checked == true) {
    inputUm.checked = false
  }

  if(el === inputTres) {
    inputDois.checked = false
  }

}


