
const randomAdvice = 'https://api.adviceslip.com/advice'

document.addEventListener('DOMContentLoaded', () => {
    genAdvice()
    likeTheAdvice()
    dislikeTheAdvice()
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


function likeTheAdvice(){
    let likeBtn = document.querySelector('#likebtn')
    let input1 = document.querySelector('#input1')
    likeBtn.addEventListener('click', ()=>{
    input1.value = parseInt(input1.value) + 1
    input1.style.color = "#12ff00"
    Swal.fire('Thank you for your feedback!')
})
}

function dislikeTheAdvice(){
    let dislikeBtn = document.querySelector('#dislikebtn')
    let input2 = document.querySelector('#input2')
    dislikeBtn.addEventListener('click', ()=>{
    input2.value = parseInt(input2.value) + 1
    input2.style.color = "#ff0000"
    Swal.fire('Thank you for your feedback!')
})
}

