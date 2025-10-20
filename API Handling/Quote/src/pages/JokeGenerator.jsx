import React, {useEffect, useState} from 'react'

function JokeGenerator() {
// variable and state
const url = 'https://api.freeapi.app/api/v1/public/randomjokes/joke/random';
const [joke , setJoke] = useState("");

const fetchJoke = async () => {
    try {
        const response = await fetch(url, {
            headers: {accept: "application/json"},
        })
        const data = await response.json()

        setJoke(`"${data.data.content}"`)
    } catch (error) {
        setJoke("Oops! could not fetch joke")
        console.error(error);
    }
}

useEffect(() => {
    fetchJoke()
}, [])

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-yellow-100 via-yellow-200 to-yellow-300 p-6">
  <div className="bg-white bg-opacity-90 backdrop-blur-md rounded-3xl shadow-2xl p-8 max-w-xl w-full text-center">
    <h1 className="text-4xl font-bold text-gray-800 mb-6">Joke Generator</h1>
    <p className="text-lg font-mono text-gray-700 mb-8">{joke}</p>
    <button
      onClick={fetchJoke}
      className="px-8 py-3 rounded-full bg-indigo-500 text-white font-semibold hover:bg-indigo-600 transition-all shadow-lg hover:shadow-xl"
    >
      Generate Joke
    </button>
  </div>
</div>

  )
}

export default JokeGenerator;
