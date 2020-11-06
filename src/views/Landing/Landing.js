import React from "react"
import { useDispatch, useSelector } from 'react-redux'
import Container from "../../components/Container/Container"
import Heading from "../../components/Heading/Heading"
import SearchForm from "../../components/SearchForm/SearchForm"
import AdditionModal from '../../components/Modals/AdditionModal'
import Button from '../../components/Button/Button'

import './Landing.scss'

export default function Landing() {
  const dispatch = useDispatch();

  const { modal } = useSelector(state => state);

  return (
    <div className="landing fixed-center-page">
      <Container>
        <header>
          <Heading />
          <Button type="header" style="ghost" onClick={() => dispatch({ type: 'setState', payload: { modal: 'addition', modalOptions: {} }})}>+ Add movie</Button>
        </header>
        <main>
          <h2 className="font_thin landing--search-title">Find your movie</h2>
          <SearchForm />
        </main>
      </Container>
      { modal === 'addition' &&
        <AdditionModal /> }
    </div>
  );
}
