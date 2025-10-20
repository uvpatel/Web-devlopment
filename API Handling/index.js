import fetch from 'node-fetch';

const url = 'https://api.freeapi.app/api/v1/public/quotes/quote/random';

const options = {method: 'GET', headers: {accept: 'application/json'}};

try {
  const response = await fetch(url, options);
  const data = await response.json();
  console.log("Full response: ",data);
  console.log("Quote: ", data.data.content);
  console.log("Author: ", data.data.author);
  
  
  
} catch (error) {
  console.error(error);
}

