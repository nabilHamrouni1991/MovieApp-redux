import React from 'react';
import './App.css';
import AddMovies from './component/AddMovies'
import MovieCard from './component/MovieCard';
import SearchBar from './component/SearchBar';
import { BrowserRouter, Switch , Route } from 'react-router-dom';
import Description from './component/Description'

function App() {
  return (
    <div>
      <BrowserRouter>
      <SearchBar/>
      <Switch>
        <Route exact path="/" component = {MovieCard}/>
        <Route
            exact
            path='/description/:id'
            render={props => <Description {...props} />}
          />
      </Switch>
      
      {/* <MovieCard/> */}
      </BrowserRouter>
     <AddMovies/>
     
     
    </div>
  );
}

export default App;
