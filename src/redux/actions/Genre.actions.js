import {_genres, _genresFriendlyNames } from '../../models/Genres.DataModel'

const baseUrl = '/movies';
const baseSearchUrl = '/movies?searchBy=genres&filter=';
const init = { method: 'GET' };

export const fetchGenre = (type) => async (dispatch) => {
  const res = await fetch(`${Object.keys(_genresFriendlyNames).includes(type) ? baseUrl + '/' + type : '404'}`, init);
  const body = await res.json();
  dispatch({ type: _genres.ALL, payload: body });
};