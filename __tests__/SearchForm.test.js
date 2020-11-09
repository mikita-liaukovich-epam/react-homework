import React from 'react'
import SearchForm from '../src/components/SearchForm/SearchForm'
import renderer from 'react-test-renderer'
import { Provider } from 'react-redux'
import store from '../src/redux/store'

describe("SearchForm", () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<Provider store={store}><SearchForm /></Provider>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
})
