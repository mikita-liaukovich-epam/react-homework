import { _filter } from '../../models/Filter.DataModel'

const baseSortUrl = '?sortBy=';
const init = { method: 'GET' };

export const fetchSort = (type) => async (dispatch) => {
  const dataUrl = `${Object.keys(_filter).includes(type) ? `${baseSortUrl}/${type}` : ''}`
  const res = await fetch(dataUrl, init)
  const body = await res.json()
  dispatch({ type: _genres.ALL, payload: body })
};