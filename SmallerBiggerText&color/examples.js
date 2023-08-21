
const sizeUp = document.querySelector('.sizeUp')
const sizeDown = document.querySelector('.sizeDown')
const colorBtn = document.querySelector('.color')
const p = document.querySelector('p')

let fontSize = 50

const increase = () =>{
    p.style.fontSize = fontSize + 'px'
    fontSize++
   
}
const decrease = () =>{
    if (fontSize <= 21) return
    fontSize--
    p.style.fontSize = fontSize + 'px'
    
   
}
const changeColor = () =>{
 
       let r= Math.floor(Math.random()*255)
       let g= Math.floor(Math.random()*255)
       let b= Math.floor(Math.random()*255)
       
        
        
        p.style.color = `rgb(${r},${g},${b})`
        
   
   
}
sizeUp.addEventListener('click', increase)
sizeDown.addEventListener('click', decrease)
colorBtn.addEventListener('click', changeColor)

