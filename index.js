const randomAdvice = 'https://api.adviceslip.com/advice'
document.addEventListener('DOMContentLoaded', () => {
    genAdvice()
    searchAdvice(event)
    likeTheAdvice()
    dislikeTheAdvice()
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
    const adviceText = document.createElement('h2')
    adviceText.textContent = `${advice.slip.advice}`
    adviceButton.append(adviceText)
}

function searchAdvice() {
    const form = document.getElementById('form')
    const search = form.querySelector('input')
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        fetch(`https://api.adviceslip.com/advice/search/${search.value}`)
        .then(r => r.json()) //console.log(r.json()))
        .then(advice => {
            //console.log(advice.slips)
            advice.slips.forEach(slip => {
                //console.log(slip)
                const searchBar = document.querySelector('.search-container')
                const adviceResults = document.createElement('p')
                adviceResults.textContent = `${slip.advice}`
                searchBar.append(adviceResults)
            })
        })
    })
    
}


function likeTheAdvice(){
    let likeBtn = document.querySelector('#likebtn')
    let input1 = document.querySelector('#input1')
    likeBtn.addEventListener('click', ()=>{
    input1.value = parseInt(input1.value) + 1
    input1.style.color = "#12ff00"
})
}

function dislikeTheAdvice(){
    let dislikeBtn = document.querySelector('#dislikebtn')
    let input2 = document.querySelector('#input2')
    dislikeBtn.addEventListener('click', ()=>{
    input2.value = parseInt(input2.value) + 1
    input2.style.color = "#ff0000"
})
}