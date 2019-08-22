import React from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import MovieCard from "./MovieCard";
export default class Movie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: null
    };
  }

  componentDidMount() {
    this.fetchMovie(this.props.match.params.id);
  }

  componentWillReceiveProps(newProps) {
    if (this.props.match.params.id !== newProps.match.params.id) {
      this.fetchMovie(newProps.match.params.id);
    }
  }

  fetchMovie = id => {
    axios
      .get(`http://localhost:5000/api/movies/${id}`)
      .then(res => this.setState({ movie: res.data }))
      .catch(err => console.log(err.response));
  };

  saveMovie = () => {
    const addToSavedList = this.props.addToSavedList;
    addToSavedList(this.state.movie);
  };

  deleteMovie = () => {
    axios.delete(`http://localhost:5000/api/movies/${this.props.match.params.id}`)
      .then(res => console.log('delete response', res))
      .catch(err => console.error(err))
  }

  render() {
    if (!this.state.movie) {
      return <div>Loading movie information...</div>;
    }

    return (
      <>
      {console.log('movies props', this.props)};
        <div className="save-wrapper">
          <MovieCard movie={this.state.movie} />
          <div className="save-button" onClick={this.saveMovie}>
            Save
          </div>
        </div>
        <Link to={`/update-movie/${this.props.match.params.id}`}>
          <div className="save-button">
            Edit
          </div>
        </Link>
        <div className="delete-button" onClick={() => this.deleteMovie()}>
            Delete
        </div>
      </>
    );
  }
}

//add onclick to delete function in delete button