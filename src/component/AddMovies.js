import React, { Component } from 'react'
import {connect} from "react-redux";
import {addMovies} from "../JS/Actions/action"

 class AddMovies extends Component {

  state={
    title:'',
    link:'',
    desc:'',
    rating:0

  }

  changeHandler=(e)=>{
    this.setState({
      [e.target.name]:e.target.value
    })

  }
  add = () =>{
    this.props.addMovies({
      id:Date.now(),
      title:this.state.title,
      link:this.state.link,
      desc:this.state.desc,
      rating:this.state.rating
    })

    }

  
  
    render() {

      

        return (
            <div >
            
<button type="button" className="btn btn-primary Button" data-toggle="modal" data-target="#exampleModal">
+
</button>


<div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body Input" >
          <label>Title of Movie</label>
          <input type="text" name="title" onChange={this.changeHandler}></input>
          <label>Picture of Movie</label>
          <input type="text" name="link" onChange={this.changeHandler}></input>
          <label>Description of Movie</label>
          <input type="text" name="desc" onChange={this.changeHandler}></input>
          <label>Rating of Movie</label>
          <input type="number" name="rating" min="0" max="5" onChange={this.changeHandler}></input>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary" onClick={this.add}>Add movies</button>
      </div>
    </div>
  </div>
</div>
            </div>
        )
    }
}

const x ={
  addMovies
}

export default connect(null,x)(AddMovies)
