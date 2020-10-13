const reducerViewData = (
  state = { 
    totalAmount: 0,
    data: [],
    currentView: 'Landing',
    modal: null,
    modalOption: null,
    selectedGenre: 'ALL',
    selectedSort: 0,
  },
  action,
) => {
  switch (action.type) {
  case 'setState':
    return({
      ...state,
      ...action.payload,
    });
  default:
    return state;
  }
};

export default reducerViewData;