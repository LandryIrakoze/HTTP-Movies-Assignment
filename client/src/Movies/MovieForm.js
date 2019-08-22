import React, { useState } from 'react';
import axios from 'axios';

const MovieForm = props => {

    //MAKE IT AUTOFILL THE INFO COMING IN, IN THE USESTATE
    console.log('formprops', props);
    const [movieInfo, setMovieInfo] = useState({id: parseInt(`${props.match.params.id}`), title: '', director: '', metascore: '', stars: []});

    const handleChange = event => {
        setMovieInfo({...movieInfo, [event.target.name]: event.target.value })
    }

    const handleStars = (event, i) => {
        console.log(event.target.value);
        const arr = [...movieInfo.stars];
        arr[i] = event.target.value;
        setMovieInfo({...movieInfo, stars: arr});
    }

    const handleSubmit = event => {
        event.preventDefault();
        axios.put(`http://localhost:5000/api/movies/${props.match.params.id}/`, movieInfo)
            .then(res => {
                console.log('put response', res)
                props.history.push('/');
                //push history from here
            })
            .catch(err => console.error('put error', err))
        // event.preventDefault();
        // console.log('movieinfo', movieInfo);
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
                    Metascore:
                    <input type="number" name="metascore" value={movieInfo.metascore} onChange={event => handleChange(event)} />
                </label>
                <label>
                    Stars:
                    <input type="text" name="stars" value={movieInfo.stars[0]} onChange={event => handleStars(event, 0)} />
                </label>
                <label>
                    Stars:
                    <input type="text" name="stars" value={movieInfo.stars[1]} onChange={event => handleStars(event, 1)} />
                </label>
                <label>
                    Stars:
                    <input type="text" name="stars" value={movieInfo.stars[2]} onChange={event => handleStars(event, 2)} />
                </label>
                <button>Submit</button>
            </form>
        </>
    )
}

export default MovieForm;