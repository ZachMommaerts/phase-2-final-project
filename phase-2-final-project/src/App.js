import './App.css';
import Header from './Header';
import MovieListContainer from './MovieListContainer';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import WatchList from './WatchList';
import MovieDetails from './MovieDetails';

function App() {
  const [ search, setSearch] = useState('');
  const [ movie, setMovie] = useState({});

  return (
    <div className="App">
      <Header search={search} setSearch={setSearch}/>
      <Routes>
        <Route path='/' element={<MovieListContainer setMovie={setMovie}/>} />
        <Route path='watchlist' element={<WatchList />} />
        <Route path=':movieId' element={<MovieDetails movie={movie}/>} />
      </Routes>
    </div>
  );
}

export default App;
