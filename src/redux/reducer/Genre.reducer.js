import { _genres } from '../../models/Genres.DataModel'

const reducerGenre = (
  state = {
    genreType: _genres.ALL,
    genreSort: { data: [] },
  },
  action,
) => {
  if (Object.values(_genres).includes(action.type)) {
    return({ genreType: action.type, genreSort: action.payload })
  }
  return state;
}

export default reducerGenre;