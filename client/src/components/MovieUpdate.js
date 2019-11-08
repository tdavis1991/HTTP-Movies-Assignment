import React, { useState, useEffect } from 'react';
import api from '../utils/api';

export default function MovieUpdate(props) {
    const [movie, setMovie] = useState({
        id: 0,
        title: "",
        director: "",
        metascore: 0,
        stars: []
    })

    const handleSubmit = event => {
        event.preventDefault()

        api().put(`/update-movie/${movie.id}`, movie)
            .then(res => {
                props.history.push("/")
            }).catch(err => {
                console.log(err)
            })
    }

    const handleChange = event => {
        setMovie({
            ...movie,
            [event.target.name]: event.target.value
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="title"
                placeholder="Title"
                value={movie.title}
                onChange={handleChange}
            />
            <input
                type="text"
                name="director"
                placeholder="Director"
                value={movie.director}
                onChange={handleChange}
            />
            <input
                type="number"
                name="metascore"
                placeholder="Metascore"
                value={movie.metascore}
                onChange={handleChange}
            />
            <input
                type="text"
                name="stars"
                placeholder="Stars"
                value={movie.stars}
                onChange={handleChange}
            />
        </form>
    )
}