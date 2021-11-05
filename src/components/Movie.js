import React from "react";
import propTypes from 'prop-types';
import './Movies.css';
import {Link} from 'react-router-dom';

function Movie({id,year,title,summary,poster,genres}) {
    return (
        <div className="movie" key={id}>
            <Link to={'/movie_detail'}
                       state={{poster,title,year,genres,summary}}>
             <img src={poster} alt={title} title={title} />
             <div className="movie_data">
                <h3 className="movie_title" style={{backgroundColor:"#eee"}}>{title}</h3>
                <h4 className="movie_year">{year}</h4>
                <ul className="movie_genres">
                     {genres.map((genre,index) => {
                         return(
                                <li key={index} className="movie_genre">{genre}</li>
                         );
                     })}
                </ul>
                <p className="movie_summary">{summary.slice(0,180)}...</p>
             </div>
             </Link>
        </div>
    )
}

Movie.prototypes = {
    id : propTypes.number.isRequired,
    year : propTypes.number.isRequired,
    title : propTypes.string.isRequired,
    summary : propTypes.string.isRequired,
    poster : propTypes.string.isRequired
}

export default Movie;