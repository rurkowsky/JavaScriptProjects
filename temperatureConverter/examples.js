

const converter = document.querySelector('#converter')
const result = document.querySelector('.result')
const convBtn = document.querySelector('.conv')
const resetBtn = document.querySelector('.reset')
const changeBtn = document.querySelector('.change')
const one = document.querySelector('.one')
const two = document.querySelector('.two')




const change = () =>{
   if (one.textContent === '°C') {
     one.textContent = '°F'
     two.textContent = '°C'
   }else{
     one.textContent = '°C'
     two.textContent = '°F'
   }
}

const conv = () =>{
    if (one.textContent === '°C') {
        let celsius  = converter.value
       let resultt = celsius * 1.8  + 32
       result.textContent=Math.floor(resultt)+'°F'

      }else{
        let fahrenheit = converter.value
        let resultt = (fahrenheit - 32) / 1.8
        result.textContent=Math.floor(resultt) + '°C'
        
      }
}
const reset= () =>{
    converter.value = ''
    result.textContent = ''
}
resetBtn.addEventListener('click', reset)
changeBtn.addEventListener('click', change)
convBtn.addEventListener('click', conv)
