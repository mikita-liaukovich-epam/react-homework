const reducerViewData = (
  state = { 
    totalAmount: 0,
    data: [],
    currentView: 'Landing',
  },
  action,
) => {
  switch (action.type) {
  case 'setViewData':
    return({ 
      totalAmount: action.payload.totalAmount,
      data: action.payload.data,
      currentView: action.payload.currentView
    });
  default:
    return state;
  }
};

export default reducerViewData;