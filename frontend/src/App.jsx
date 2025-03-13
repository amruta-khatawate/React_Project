import './App.css'
import MovieCard from './components/movieCard'

function App() {
  const movieNumber=2;
  return (
    <>
    {movieNumber ===1 ? (
      <MovieCard movie={{title: "OMG",release_date: 2012,}}/>
    ): (
      <MovieCard movie={{title: "OMG2",release_date: 2022,}}/>
    )}
      
    </>
  )
}



export default App
