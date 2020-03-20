import React, { useState, useEffect } from 'react';
import MovieCard from '../Movies/MovieCard';
import api from '../utils/api';

export default function MovieUpdate(props) {

    const [movie, setMovie] = useState({
        id: 1,
        title: "",
        director: "",
        metascore: 0,
        stars: []
    })

    useEffect(() => {
        api()
            .get(`/api/movies/${props.match.params.id}`)
                .then(res => {
                    setMovie(res.data)
                }).catch(err => {
                    console.log(err)
                })
    }, [props.match.params.id])

    const handleSubmit = event => {
        event.preventDefault()

        api().put(`/api/movies/${movie.id}`, movie)
            .then(res => {
                props.history.push("/")
                console.log(res)
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
        <>
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
                <button type="submit">Edit</button>
            </form>
            <MovieCard movie={movie} />
        </>
    )
}