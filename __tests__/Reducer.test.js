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

const mockData = [
  {release_date: "2019-02-07", vote_average: 7.2},
  {release_date: "2018-01-06", vote_average: 6.1},
  {release_date: "2020-03-08", vote_average: 8.3},
]

describe("Root.reducer", () => {
  it('returns empty state if no states were passed', () => {
    const res = JSON.stringify(reducer());
    expect(res).toEqual(JSON.stringify(emptyState));
  });

  it('returns updated state if setState was called', () => {
    const res = JSON.stringify(reducer(undefined, {
      type: 'setState',
      payload: {
        modal: 'addition'
      }
    }));
    expect(res).toEqual(JSON.stringify(Object.assign(emptyState, { modal: "addition" })));
  });

  it('returns sorted data if setState was called', () => {
    const res = JSON.stringify(reducer(Object.assign(emptyState, {data: mockData}), {
      type: 'sortDataBy',
      payload: 'rating'
    }));
    expect(res).toEqual(JSON.stringify(Object.assign(emptyState, { 
      data: mockData.sort((a, b) => b.vote_average - a.vote_average)
    })));
  });
})