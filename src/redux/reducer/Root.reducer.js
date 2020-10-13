import { combineReducers } from 'redux'
import reducerGenre from './Genre.reducer'
import reducerViewData from './ViewData.reducer'

const reducer = combineReducers({
  genre: reducerGenre,
  viewData: reducerViewData,
});

export default reducer;