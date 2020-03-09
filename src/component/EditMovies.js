import React, { Component } from "react";
import { connect } from "react-redux";
import { editMovie } from "../JS/Actions/action";
import {Modal,Button} from 'react-bootstrap'

class EditMovies extends Component {
  state = {
    show:false,
    title: "",
    image: "",
    desc: "",
    rating: ""
  };
  componentDidMount() {
    this.setState({
      id: this.props.movie.id,
      title: this.props.movie.title,
      image: this.props.movie.image,
      desc: this.props.movie.desc,
      rating: this.props.movie.rating
    });
  }
  handleShow = () =>{ 
    this.setState({
        show: !this.state.show
})};
  handelChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  edit = () => {
    this.props.editMovie(this.state);
  };
  render() {
    console.log(this.props.movie.id);
    return (
      <div>
      <Button variant="primary" onClick={this.handleShow} className="sizebtn">
        Edit
      </Button>

      <Modal show={this.state.show} onHide={this.handleShow}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Movies</Modal.Title>
        </Modal.Header>
        <Modal.Body className="Input">
        <label>Title of Movie</label>
          <input type="text" name="title" value={this.state.title} onChange={this.handelChange}></input>
          <label>Picture of Movie</label>
          <input type="text" name="link" value={this.state.image} onChange={this.handelChange}></input>
          <label>Rating of Movie</label>
          <input type="number" name="rating" value={this.state.rating} min="0" max="5" onChange={this.handelChange}></input>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.handleShow}>
            Close
          </Button>
          <Button variant="primary" onClick={this.handleShow} onClick={()=>this.edit()}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      </div>
    );
  }
}

export default connect(null, { editMovie })(EditMovies);
