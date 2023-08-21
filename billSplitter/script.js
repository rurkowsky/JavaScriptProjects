const inputs = document.querySelectorAll('.input')
const price = document.querySelector('#price')
const people = document.querySelector('#people')
const tip = document.querySelector('#tip')
const btn = document.querySelector('.btn')
const error = document.querySelector('.error')
const span = document.querySelector('.cost')
const costInfo = document.querySelector('.cost-info')
const count = () =>{
    const pri = parseFloat(price.value)
    const peop = parseFloat(people.value)
    const ti = parseFloat(tip.value)
    const result = (pri + (pri * ti)) / peop
    span.textContent = result.toFixed(2)
    costInfo.style.display = 'block'
}

const checkIfEmpty = () => {
    if(tip.value === '0' && Object.keys(price.value).length === 0 && Object.keys(people.value).length === 0 ){
        error.style.display = 'block'
        costInfo.style.display = 'none'
    }else{
       error.style.display = '' 
       count()
    }
    
}



btn.addEventListener('click', checkIfEmpty)
