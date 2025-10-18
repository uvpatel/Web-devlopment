function Card({title,value}) {
  
  return (
    <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white max-w-sm m-4 p-5 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300">
      <h1 className="text-2xl font-semibold mb-2 border-b border-gray-700 pb-1">
        {title}
      </h1>
      <p className="text-gray-300 text-base leading-relaxed line-clamp-3">
        {value}
      </p>
      <button className="mt-4 bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-300">
        Read More
      </button>
    </div>
  );
}

export default Card;