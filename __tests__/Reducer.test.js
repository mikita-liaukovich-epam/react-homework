import reducer from '../src/redux/reducer/Root.reducer'

const emptyState = { 
  totalAmount: 0,
  data: [],
  currentView: 'Landing',
  modal: null,
  modalOptions: null,
  selectedGenre: 'ALL',
  selectedSort: 0,
}

describe("Root.reducer", () => {
  it('returns empty state if no states were passed', () => {
    const res = JSON.stringify(reducer());
    expect(res).toEqual(JSON.stringify(emptyState));
  });
})