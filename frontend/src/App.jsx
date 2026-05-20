import { useEffect, useState } from "react";
import axios from "axios";

import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import JokeCard from "./components/JokeCard";

function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    const fetchJokes = async () => {
      const res = await axios.get("http://localhost:5000/api/jokes");
      setJokes(res.data);
    };
    fetchJokes();
  }, []);

  return (
    <div className="flex bg-gray-950 text-white min-h-screen">
      {/* Sidebar */}
      <Sidebar />

      
      <div className="flex-1 p-6">
  
        <Header total={jokes.length} />

        <div className="grid grid-cols-3 gap-4 my-6">
          <div className="bg-gray-900 p-4 rounded-xl">
            Total Jokes: {jokes.length}
          </div>
          <div className="bg-gray-900 p-4 rounded-xl"> Featured</div>
          <div className="bg-gray-900 p-4 rounded-xl"> Active</div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {jokes.map((joke) => (
            <JokeCard key={joke.id} joke={joke} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
