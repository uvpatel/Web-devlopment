import React, { useEffect, useState } from "react";


function Quote() {
  const url = "https://api.freeapi.app/api/v1/public/quotes/quote/random";
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  const fetchQuote = async () => {
    try {
      const response = await fetch(url, {
        headers: { accept: "application/json" },
      });
      const data = await response.json();
      setQuote(`"${data.data.content}"`);
      setAuthor(data.data.author);
    } catch (error) {
      setQuote("Oops! Could not fetch quote.");
      setAuthor("");
      console.error(error);
    }
  };

  useEffect(() => {
    fetchQuote(); // fetch on initial render
  }, []);
  
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-indigo-200 via-purple-200 to-pink-200 p-6">
      <div className="bg-white bg-opacity-80 backdrop-blur-md rounded-3xl shadow-2xl p-8 max-w-lg w-full">
        <h1 className="text-3xl font-serif text-gray-800 mb-4">{author}</h1>
        <p className="text-lg font-mono text-gray-700 mb-6">{quote}</p>
        <button
          onClick={fetchQuote}
          id="bt"
          className="px-6 py-3 rounded-full bg-indigo-500 text-white font-semibold hover:bg-indigo-600 transition-colors shadow-lg hover:shadow-xl"
        >
          Generate New Quote
        </button>
      </div>
    </div>
  );
}

export default Quote;
