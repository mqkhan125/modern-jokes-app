import { useEffect, useState } from "react";
import axios from "axios";

import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import JokeCard from "./components/JokeCard";
import Category from "./components/Category";

function App() {
  const [jokes, setJokes] = useState([]);
  const [allJokes, setAllJokes] = useState([])
  const [selectCategory, setSelectCategory] = useState("All");

  const API = "http://localhost:5000/api/jokes";

 useEffect(() => {
   const fetchJokes = async () => {
     const res = await axios.get(API);

     setAllJokes(res.data);
     setJokes(res.data);
   };

   fetchJokes();
 }, []);

  const handleInput = async (e) => {
    const value = e.target.value;

    if (value === "") {
      const res = await axios.get(API);
      setJokes(res.data);
      return;
    }
    const res = await axios.get(`${API}/search?q=${value}`);
    setJokes(res.data);
  };

  const categories = [...new Set(allJokes.map((j) => j.category))];

  const handleCategory = async (cat) => {
    setSelectCategory(cat);
  };

  useEffect(() => {
    const fetchJokes = async () => {
      if (selectCategory === "All") {
        const res = await axios.get(`${API}/`);
        setJokes(res.data);
      } else {
        const res = await axios.get(`${API}/filter?category=${selectCategory}`);
        setJokes(res.data);
      }
    };
    fetchJokes()
  }, [selectCategory]);

  return (
    <div className="flex bg-gray-950 text-white min-h-screen">
      <Sidebar jokes={jokes} />

      <div className="flex-1 p-6">
        <Header total={jokes.length} onChange={handleInput} />

        <div>
          <Category
            selectCategory={selectCategory}
            handleCategory={handleCategory}
            category={categories}
            isActive={selectCategory}
          />
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
