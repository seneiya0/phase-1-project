const randomAdvice = 'https://api.adviceslip.com/advice'

document.addEventListener('DOMContentLoaded', () => {
    genAdvice()
    //searchAdvice()
})


function genAdvice() {
const adviceButton = document.querySelector('button')
adviceButton.addEventListener('click', () => {
    fetch(randomAdvice)
    .then(r => r.json())
    .then(advice => showAdvice(advice))
    }
)}

function showAdvice(advice){
    const adviceButton = document.querySelector('.button')
    const adviceText = document.createElement('p')
    adviceText.textContent = `${advice.slip.advice}`
    adviceButton.append(adviceText)
}

// function searchAdvice() {
//     const 
// } 

