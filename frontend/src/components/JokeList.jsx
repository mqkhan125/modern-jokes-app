import JokeCard from "./JokeCard";

const JokeList = ({ jokes }) => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-gray-50 to-gray-100 p-8 flex flex-wrap gap-6 justify-center">
      {jokes.map((joke) => (
        <JokeCard key={joke.id} joke={joke} />
      ))}
    </div>
  );
};

export default JokeList;
