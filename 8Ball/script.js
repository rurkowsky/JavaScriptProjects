const bila = document.querySelector('.ball-img img')
const question = document.querySelector('.question-area input')
const answer = document.querySelector('.question-area .answer')
const error = document.querySelector('.question-area .error')

const answers = ["Spróbuj później"," Spróbuj ponownie "," Brak opinii ","To twoje przeznaczenie", " Kości zostały rzucone ", "Jedna szansa z dwóch",  "Zadaj pytanie ponownie", "Moim zdaniem tak"," Na pewno ", "Tak, absolutnie", "Możesz na to liczyć",  " To nie jest ", " Mało prawdopodobne ", " Nie śnij ", "Nie licz", " Niemożliwy "," Bez wątpienia ", " Bardzo prawdopodobne ", " Tak ", "Na dobry początek"]

const execute = () => {
    bila.classList.toggle('shake-animation');
    setTimeout(delclass = () => {
        bila.classList.remove('shake-animation');
        answer.textContent = answers[Math.floor(Math.random()*answers.length)]
        checkInput()
    }, 1000)
    
}
const checkInput = () =>{
    if(question.value == ''){
        error.textContent = 'musisz zadać jakieś pytanie'
        answer.textContent = ''
    }else if(question.value !== '' && !question.value.includes("?")){
        error.textContent = 'pytanie musi być zakończone "?"'
        answer.textContent = ''
    }else if(question.value === '?'){
        error.textContent = 'musisz zadać jakieś pytanie'
        answer.textContent = ''
    }
    else{
       error.textContent = ''
    }
    
    
}




bila.addEventListener('click', execute)