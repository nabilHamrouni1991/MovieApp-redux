import React from 'react'
import {connect} from 'react-redux';
import Rating from './Rating';
import {deleteMovie} from '../JS/Actions/action'
import EditMovies from './EditMovies';
import { Link } from 'react-router-dom';

 function MovieCard(props) {
     
    return (
      
        <div className="Modal">

            {(props.ratingSearch >0
            ? props.movies.filter(el => el.rating >= props.ratingSearch)
            : props.searchInput
            ?props.movies.filter(el => el.title.toLowerCase().includes(props.searchInput.toLowerCase().trim()))    
                :props.movies)
            .map((el,key)=>(
              
        <div className="x" style={{width: '18rem'}} key={key}>
           <Link to={`/description/${el.id}`}>
        <img src={el.image} className="card-img-top image" alt="..."/>
        </Link>
        <div className="card-body">
          <h5 className="card-title">{el.title}</h5>
            <p className="card-text"><Rating count={el.rating}/></p>
          <a href="#" className="btn btn-primary"><EditMovies key={key} movie={el}/></a>
          <a href="#" className="btn btn-danger" onClick={()=>props.deleteMovie(el.id)
        }>Delete</a>
        </div>
       
      </div>
      
       ))}
       
      </div>
    
      
    )
}

const x = state =>{
    return{
        movies :state.movies,
        searchInput: state.searchInput,
        ratingSearch : state.ratingSearch
        
    }
    
}

const y = {
    deleteMovie
}



export default connect(x,y)(MovieCard)
