import React from 'react'
import {connect} from 'react-redux'


const x = state => ({
    trailer: state.movies
  });
  
  const Description = props => {
    const [trailer] = props.trailer.filter(el => el.id == props.match.params.id);
    console.log(props.trailer)
    return (
        <div>
            <iframe 
            title='trailer'
            width="1440" 
            height="517" 
            src={trailer.trailer}
            frameborder="0" 
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen>
            ></iframe>
        </div>
        
    )
    
}

export default connect(x)(Description)
