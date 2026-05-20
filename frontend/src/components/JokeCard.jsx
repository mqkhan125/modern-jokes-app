const JokeCard = ({ joke }) => {
  return (
    <div className="bg-gray-900 rounded-xl p-5 hover:scale-105 transition transform duration-300 shadow-lg border border-gray-800">
      <h2 className="text-lg font-bold text-white mb-2">{joke.title}</h2>

      <p className="text-gray-400 text-sm mb-3">{joke.content}</p>

      <span className="text-xs bg-red-600 px-2 py-1 rounded-full">
        {joke.category}
      </span>

      <div className="flex justify-between mt-4 text-xs text-gray-400">
        <span>❤️ {joke.likes}</span>
        <span>👀 {joke.views}</span>
        <span>👎 {joke.dislikes}</span>
      </div>
    </div>
  );
};

export default JokeCard;
