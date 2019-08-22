import React, { useState } from 'react';
import axios from 'axios';

const MovieForm = props => {

    console.log('formprops', props);
    const [movieInfo, setMovieInfo] = useState({title: '', director: '', metascore: '', stars: []});

    // const [stars, setStars] = useState([]);


    const handleChange = event => {
        setMovieInfo({...movieInfo, [event.target.name]: event.target.value })
    }

    const handleStars = event => {
        setMovieInfo({...movieInfo, [movieInfo.stars]: [...event.target.value]})
    }

    const handleSubmit = event => {
        // event.preventDefault();
        // axios.put(`http://localhost:5000/api/movies/${props.match.params.id}/`, movieInfo)
        //     .then(res => {
        //         console.log('put response', res)
        //         //push history from here
        //     })
        //     .catch(err => console.error('put error', err))
        console.log('movieinfo', movieInfo);
    }

    return (
        <>
            <form onSubmit={event => handleSubmit(event)}>
                <label>
                    Title:
                    <input type="text" name="title" value={movieInfo.title} onChange={event => handleChange(event)} />
                </label>
                <label>
                    Director:
                    <input type="text" name="director" value={movieInfo.director} onChange={event => handleChange(event)} />
                </label>
                <label>
                    Metascore
                    <input type="number" name="metascore" value={movieInfo.metascore} onChange={event => handleChange(event)} />
                </label>
                <label>
                    Stars:
                    <input type="text" name="stars" value={movieInfo.stars} onChange={event => handleChange(event)} />
                </label>
                <label>
                    Stars:
                    <input type="text" name="stars" value={movieInfo.stars} onChange={event => handleChange(event)} />
                </label>
                <label>
                    Stars:
                    <input type="text" name="stars" value={movieInfo.stars} onChange={event => handleChange(event)} />
                </label>
                <button>Submit</button>
            </form>
        </>
    )
}

export default MovieForm;