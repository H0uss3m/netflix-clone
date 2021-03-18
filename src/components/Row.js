import React, { useState, useEffect } from 'react'
import axios from '../axios'
import './Row.css'
import truncate from '../services'
import { useDispatch } from 'react-redux'
import { addFavorite } from '../features/favoriteSlice'
import { useAlert } from 'react-alert'

const Row = ({ title, fetchUrl, isLargeRow = false }) => {
  const alert = useAlert()

  const [movies, setMovies] = useState([])
  const dispatch = useDispatch()

  const base_url = 'https://image.tmdb.org/t/p/original/'

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(fetchUrl)
      setMovies(request.data.results)
      return request
    }
    fetchData()
  }, [fetchUrl])

  const addToList = (movie) => {
    dispatch(addFavorite(movie))
    alert.success(`${movie.name || movie.title} is added to your favorite list`)
  }

  return (
    <div className='row'>
      <h2>{title}</h2>
      <div className='row_posters'>
        {movies.map(
          (movie, index) =>
            ((isLargeRow && movie.poster_path) ||
              (!isLargeRow && movie.backdrop_path)) && (
              <div key={index} className='poster'>
                <img
                  className={`row_poster ${isLargeRow && 'row_posterLarge'}`}
                  key={movie.id}
                  src={`${base_url}${
                    isLargeRow ? movie.poster_path : movie.backdrop_path
                  }`}
                  alt={movie.name}
                />
                <h3>
                  {truncate(movie.name || movie.title, 20)}{' '}
                  <span onClick={() => addToList(movie)}>add to favorite</span>
                </h3>
              </div>
            )
        )}
      </div>
    </div>
  )
}

export default Row
