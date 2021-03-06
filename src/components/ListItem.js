import React from 'react'
import './ListItem.css'
import { useDispatch } from 'react-redux'
import { removeFavorite } from '../features/favoriteSlice'
import truncate from '../services'

const ListItem = ({ movie }) => {
  const dispatch = useDispatch()
  const base_url = 'https://image.tmdb.org/t/p/original/'

  const removeFromList = (movieItem) => {
    window.confirm(
      `Do you really want to remove ${
        movieItem.original_title || movieItem.original_name
      }`
    )
      ? dispatch(removeFavorite(movieItem))
      : console.log('Error Remove')
  }

  return (
    <div className='ListItemScreen_body'>
      <div className='ListItemScreen_info'>
        <img
          className='ListItemScreen_img'
          src={`${base_url}${movie.poster_path}`}
          alt={movie.name}
        />
      </div>
      <div className='ListItem_description'>
        <h2 className='ListItemScreen_title'>
          {movie.original_title || movie.original_name}
        </h2>
        <p>{truncate(movie.overview, 450)}</p>
        <div
          onClick={() => removeFromList(movie)}
          className='ListItem_delete ListItem_delete_button'
        >
          Remove from list
        </div>
      </div>
    </div>
  )
}

export default ListItem
