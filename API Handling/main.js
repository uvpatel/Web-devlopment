const url = "https://api.freeapi.app/api/v1/public/quotes/quote/random"

const authorEl = document.getElementById('author')
const quoteEl = document.getElementById('quote')
const button = document.getElementById('newQuote')

async function fetchQuote() {
    try {
        const response = await fetch(url, {headers: {accept: "application/json"}})
        const data = await response.json()

        quoteEl.textContent = `"${data.data.content}`
        authorEl.textContent = `${data.data.author}`
        
    } catch (error) {
        quoteEl.textContent = "Oops! Could not fetch quote."
        authorEl.textContent = ""
        console.error(error)
        
    }
    
}

fetchQuote()

button.addEventListener('click', fetchQuote)