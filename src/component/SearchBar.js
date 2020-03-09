import React from 'react'
import {connect} from 'react-redux'
import Rating from "./Rating"
import {searchMovie} from '../JS/Actions/action'


 function SearchBar({searchMovie , minRate}) {
    return (
        <div>
            
        <nav className="navbar navbar-light bg-light">
  <a className="navbar-brand">Movie Shop</a>
  <form className="form-inline">
  <Rating count={minRate}/>
    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"
    onChange={(e)=>searchMovie(e.target.value)}
    />
    
  </form>
</nav>
</div>
    )
}

const x = state => ({
    minRate : state.ratingSearch
})

export default connect(x,{searchMovie})(SearchBar)
