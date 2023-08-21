const search = document.querySelector('.search')
const drinks = document.querySelectorAll('li')

const trigger = e =>{
  const text = e.target.value.toLowerCase()

 drinks.forEach(el =>{
       if(el.textContent.toLocaleLowerCase().indexOf(text) !== -1){
        el.style.display = 'block'
       }else{
        el.style.display = 'none'
       }
 })
    
}




search.addEventListener('keyup', trigger)


