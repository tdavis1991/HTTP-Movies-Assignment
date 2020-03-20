import React from 'react';
import api from '../utils/api';

export default function movieDelete(props) {
    api()
        .delete(`/api/movies/${props.id}`)
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        })
}