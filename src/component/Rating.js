import React from 'react'
import {connect} from 'react-redux'
import {ratingMovie} from '../JS/Actions/action'

 const Rating = ({count, ratingMovie}) => {
         let star =[];
        for (let i=0;i<5;i++){
            if (i< count){
                star.push(<span key={i} onClick={()=>ratingMovie(i+1)}>★</span>)
            }else {
                star.push(<span key={i} onClick={()=>ratingMovie(i+1)}>☆</span>)
            }
        }
        return <div>{star}</div> 
     }

 

export default connect (null,{ratingMovie})(Rating)