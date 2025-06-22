import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

function App() {
  const [jokes, setJokes] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        setError(false);
        const response = await axios.get("/api/jokes");
        setJokes(response.data);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    })();
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Something Went Wrong...</h1>;
  }
  return (
    <>
      <h1>Welcome Jokes</h1>
      <h3>Total JOKES : {jokes.length}</h3>
      {jokes.map((joke, index) => (
        <div key={joke.id}>
          <p>
            {joke.name} {": "}
            {joke.content}
          </p>
        </div>
      ))}
    </>
  );
}

export default App;
