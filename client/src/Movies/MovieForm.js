import React, { useState } from 'react';
import axios from 'axios';

const MovieForm = props => {

    const [movieInfo, setMovieInfo] = useState({})


    const handleChange = event => {
        setMovieInfo({...movieInfo, [event.target.name]: event.target.value })
    }

    const handleSubmit = event => {
        event.preventDefault();
        axios.put(`http://localhost:5000/api/movies/${props.match.params.id}/`)
            .then(res => {
                console.log('put response', res)
                //push history from here
            })
            .catch(err => console.error('put error', err))
    }

    return (
        <>
            <form>
                <label>
                    Title:
                    <input type="text" />
                </label>
                <label>
                    Director:
                    <input type="text" />
                </label>
                <label>
                    Metascore
                    <input type="number" />
                </label>
                {/* <label>
                    Stars:
                    <input type="text" />
                </label>
                <label>
                    Stars:
                    <input type="text" />
                </label>
                <label>
                    Stars:
                    <input type="text" />
                </label> */}
                <button>Submit</button>
            </form>
        </>
    )
}

export default MovieForm;