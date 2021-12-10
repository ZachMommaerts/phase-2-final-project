import './App.css';
import Header from './Header';
import MovieListContainer from './MovieListContainer';
import { useState} from 'react';

console.log(process.env.REACT_APP_API_KEY)

function App() {
  const [ search, setSearch] = useState('');

  return (
    <div className="App">
      <Header search={search} setSearch={setSearch}/>
      <MovieListContainer />
    </div>
  );
}

export default App;
