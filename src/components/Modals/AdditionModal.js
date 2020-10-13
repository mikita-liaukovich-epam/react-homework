import React from "react"
import { useDispatch } from 'react-redux'
import Button from '../Button/Button'
import Form from '../Form/Form'
import ModalBase from './ModalBase'
import { addUpdateMovie } from '../../redux/actions/Movie.actions'

const $ = (id) => document.getElementById(id);

export default function AdditionModal() {
  const dispatch = useDispatch();

  const name = 'addition'

  return <ModalBase modalName={name}>
    <button className="modal-close" onClick={() => dispatch({ type: 'setState', payload: { modal: null }})}>✕</button>
    <h2 className="modal-title">Add movie</h2>
    <Form type="title" />
    <Form type="tagline" />
    <Form type="date" />
    <Form type="url" />
    <Form type="genre" />
    <Form type="overview" />
    <Form type="runtime" />
    <Button type="modal" style="filled" onClick={() => {
      const options = {
        title: $('title').value,
        tagline: $('tagline').value,
        vote_average: 0,
        vote_count: 0,
        release_date: $('date').value,
        poster_path: '',
        overview: $('overview').value,
        budget: 0,
        revenue: 0,
        runtime: $('runtime').value,
        genres: [$('genre').value],
      }
      console.log(options)
      dispatch(addUpdateMovie(options))
    }}>Save</Button>
    <Button type="modal" style="outlined" onClick={() => dispatch({ type: 'setState', payload: { modal: null }})}>Reset</Button>
  </ModalBase>
}
