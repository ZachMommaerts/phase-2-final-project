import './App.css';
import Header from './Header';
import MovieListContainer from './MovieListContainer';

console.log(process.env.REACT_APP_API_KEY)

function App() {
  return (
    <div className="App">
      <Header />
      <MovieListContainer />
    </div>
  );
}

export default App;
