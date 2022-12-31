import React from 'react';

import './movie-card.scss';

import { Link } from 'react-router-dom';

import { w500Image, category } from '../../api/tmdbApi';

const MovieCard = props => {

    const item = props.item;

    const link = '/' + category[props.category] + '/' + item.id;

    const bg = w500Image(item.poster_path || item.backdrop_path);

    return (
        < Link to={link} className="movie-card">
            <div className="card-head" >
                <img src={w500Image(item.poster_path)} />
            </div>
            <h3>{item.title || item.name}</h3>
        </Link>
    );
}

export default MovieCard;