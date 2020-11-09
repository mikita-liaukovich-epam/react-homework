const reducer = (
  state = { 
    totalAmount: 0,
    data: [],
    currentView: 'Landing',
    modal: null,
    modalOptions: null,
    selectedGenre: 'ALL',
    selectedSort: 0,
  },
  action = {},
) => {
  switch (action.type) {
  case 'setState':
    return({
      ...state,
      ...action.payload,
    });
  case 'sortDataBy': {
    switch (action.payload) {
      case 'release_date':
        return({
          ...state,
          data: state.data.sort((a, b) => {
            const dateA = new Date(a.release_date)
            const dateB = new Date(b.release_date)
            return dateB - dateA
          }),
        })
      case 'rating':
        return({
          ...state,
          data: state.data.sort((a, b) => b.vote_average - a.vote_average ),
        })
    }
  }
  default:
    return state;
  }
};

export default reducer;