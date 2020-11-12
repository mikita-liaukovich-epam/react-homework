import React from 'react'
import AdditionModal from '../src/components/Modals/AdditionModal'
import renderer from 'react-test-renderer'
import ReactTestUtils from 'react-dom/test-utils'
import { Provider } from 'react-redux'
import store from '../src/redux/store'
import * as actions from '../src/redux/actions/Movie.actions'

describe("AdditionModal", () => {
  beforeEach(() => {
    actions.addUpdateMovie = jest.fn();
  })

  it('should render correctly', () => {
    const tree = renderer
      .create(<Provider store={store}><AdditionModal /></Provider>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
})
