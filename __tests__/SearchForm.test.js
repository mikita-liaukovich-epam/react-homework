import React from 'react'
import SearchForm from '../src/components/SearchForm/SearchForm'
import renderer from 'react-test-renderer'

it('renders correctly', () => {
  const tree = renderer
    .create(<SearchForm />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
