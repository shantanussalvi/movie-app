import React from 'react'

const MovieList = (props) => {
  return (
    <>
        {/* Displays movie poster using the link from OMDB api json having object name Poster */}
        {props.movies.map((movie, index) => (
            <div className='d-flex justify-content-start m-3' key={index}>
                <img src={movie.Poster} alt={movie.Title}></img>
            </div>
        ))}
    </>
  )
}

export default MovieList