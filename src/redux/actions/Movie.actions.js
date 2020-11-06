import {_genres } from '../../models/Genres.DataModel'
import {useSelector} from 'react-redux'

const baseUrl = 'http://localhost:4000/movies';

const fetchMovies = (type, sort) => async (dispatch) => {
  console.warn(type, sort)
  let res;
  const url = `${baseUrl}?${sort ? `sortBy=title&sortOrder=${sort}&` : ''}searchBy=genres&search=${_genres[type] || ''}`;
  res = await fetch(url, { method: 'GET' })
  const body = await res.json()
  console.log(res, body, url)
  dispatch({ type: 'setState', payload: Object.assign(body, { currentView: 'VODCollection', selectedGenre: type }) })
};

const searchMovie = (title) => async (dispatch) => {
  const res = await fetch(`${baseUrl}?searchBy=title&search=${title}`, { method: 'GET' })
  const body = await res.json()
  dispatch({ type: 'setState', payload: Object.assign(body, { currentView: 'VODCollection' }) })
}

const addUpdateMovie = (data, isUpdate) => async (dispatch) => {
  const res = await fetch(`${baseUrl}`, {
    method: isUpdate ? 'PUT' : 'POST',
    headers: {
      'Content-type': 'text/plain',
    },
    body: JSON.stringify(data),
  })
  console.log(`Request for movie ${isUpdate ? 'update' : 'creation'} was sent, but swagger is broken and response a Bad Request without a message`, res);
  dispatch({ type: 'setState', payload: { modal: null }})
}

const deleteMovie = (id, selectedGenre) => async (dispatch) => {
  const res = await fetch(`${baseUrl}/${id}`, {
    method: 'DELETE'
  })
  console.log('delete', res)
  dispatch(fetchMovies(selectedGenre))
}

export {
  addUpdateMovie,
  deleteMovie,
  fetchMovies,
  searchMovie,
}