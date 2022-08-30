import "./App.css";
import MovieItem from "./components/MovieItem";

function App() {
  const movie = {
    title: "Alien",
    released: "22 Jun 1979",
    director: "Ridley Scott",
    poster:
      "https://m.media-amazon.com/images/M/MV5BOGQzZTBjMjQtOTVmMS00NGE5LWEyYmMtOGQ1ZGZjNmRkYjFhXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg",
  };

  return (
    <div className='App'>
      <MovieItem {...movie} />
    </div>
  );
}

export default App;
