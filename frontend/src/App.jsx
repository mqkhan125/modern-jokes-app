import { useEffect, useState } from "react"
import axios from "axios"
import Header from "./components/Header";


function App() {
  const [jokes, setJokes] = useState([])

  

  useEffect(() => {
   const fetchJokes = async () => {
     const response = await axios.get("http://localhost:5000/api/jokes");
     setJokes(response.data);
   };
   fetchJokes();
  },[])

  return (
    <>
      <>
        <Header total={jokes.length} />
      </>
    </>
  );
}

export default App
