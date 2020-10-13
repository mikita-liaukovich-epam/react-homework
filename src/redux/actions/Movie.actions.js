import {_genres } from '../../models/Genres.DataModel'

const baseUrl = 'http://localhost:4000/movies';
const options = { method: 'GET' };

const fetchGenre = (type) => async (dispatch) => {
  if (Object.keys(_genres).includes(type)) {
    console.warn(type)
    const res = await fetch(`${baseUrl}?searchBy=genres&search=${_genres[type]}`, options)
    const body = await res.json()
    dispatch({ type: 'setViewData', payload: Object.assign({}, body, { currentView: 'VODCollection' }) })
  }
};

const searchMovie = (title) => async (dispatch) => {
  const res = await fetch(`${baseUrl}?searchBy=title&search=${title}`, options)
  const body = await res.json()
  dispatch({ type: 'setViewData', payload: Object.assign({}, body, { currentView: 'VODCollection' }) })
}

export {
  fetchGenre,
  searchMovie,
}