
const randomAdvice = 'https://api.adviceslip.com/advice'
document.addEventListener('DOMContentLoaded', () => {
    genAdvice()
    searchAdvice()
    likeTheAdvice()
    dislikeTheAdvice()
    addReview()
})


function genAdvice() {
const adviceContainer = document.querySelector('button')
adviceContainer.addEventListener('click', () => {
    const adviceContainer = document.querySelector('.randomAdvice')
    adviceContainer.textContent = ""
    adviceContainer.innerHTML = '<h3> loading...</h3>'
    fetch(randomAdvice)
    .then(r => r.json())
    .then(advice => showAdvice(advice))
    }
)}

function showAdvice(advice){
    const adviceContainer = document.querySelector('.randomAdvice')
    const adviceText = document.createElement('h2')
    adviceText.textContent = `${advice.slip.advice}`
    adviceContainer.textContent = " "
    adviceContainer.append(adviceText)
}

function searchAdvice() {
    const form = document.getElementById('form')
    const search = form.querySelector('input')
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const searchResults = document.querySelector('#search-results')
        searchResults.textContent = " "
        fetch(`https://api.adviceslip.com/advice/search/${search.value}`)
        .then(r => r.json())
        .then(advice => {
            if(Array.isArray(advice.slips)){
            advice.slips.forEach(slip => {
                const searchResults = document.querySelector('#search-results')
                const adviceResults = document.createElement('p')
                adviceResults.textContent = `${slip.advice}`
                searchResults.append(adviceResults)
            })
        } else{
            const searchResults = document.querySelector('#search-results')
            searchResults.innerHTML = `<h3> No advice found on ${search.value} :( </h3>`
        }
        })
    })
    
}

function likeTheAdvice(){
    let likeBtn = document.querySelector('#likebtn')
    let input1 = document.querySelector('#input1')
    likeBtn.addEventListener('click', ()=>{
    input1.value = parseInt(input1.value) + 1
    input1.style.color = "#12ff00"
    alert('Thank you for your feedback!')
})
}

function dislikeTheAdvice(){
    let dislikeBtn = document.querySelector('#dislikebtn')
    let input2 = document.querySelector('#input2')
    dislikeBtn.addEventListener('click', ()=>{
    input2.value = parseInt(input2.value) + 1
    input2.style.color = "#ff0000"
    alert('Thank you for your feedback!')
})
}

const addReview = () => {
    let name = document.querySelector('.review-container #name'); 
    let comment = document.querySelector('.review-container #comment'); 

    if (name.value !== "" && comment.value != "") {  
    let list = document.querySelector('.list'); 
    let list_item = document.createElement ("l1");  
    list_item.innerHTML = `
    <span>
    <h5>${name.value} </h5> 
    </span>
    <p>${comment.value}</p>
    `;
    list.append(list_item); 
    }

    if (name.value == "" || comment.value == "") {
    let list = document.querySelector('.list'); 
    let list_item = document.createElement ("l2"); 
    list.append(list_item); 
    }
    name.value=comment.value = "";
    }