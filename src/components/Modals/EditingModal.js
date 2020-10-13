import React from "react"
import { useDispatch, useSelector } from 'react-redux'
import Button from '../Button/Button'
import Form from '../Form/Form'
import ModalBase from '../Modals/ModalBase'
import { addUpdateMovie } from '../../redux/actions/Movie.actions'

const $ = (id) => document.getElementById(id);


export default function EditingModal() {
  const dispatch = useDispatch()
  const { modalOptions } = useSelector(state => state)
  const onCloseRequest = () => dispatch({ type: 'setState', payload: { modal: null, modalOptions: null }})

  return <ModalBase modalName='editing'>
    <button className="modal-close" onClick={onCloseRequest}>✕</button>
    <h2 className="modal-title">Edit movie</h2>
    <Form type="id" info={modalOptions} />
    <Form type="title" info={modalOptions} />
    <Form type="date" info={modalOptions} />
    <Form type="url" info={modalOptions} />
    <Form type="genre" info={modalOptions} />
    <Form type="overview" info={modalOptions} />
    <Form type="runtime" info={modalOptions} />
    <Button type="modal" style="filled" onClick={() => {
      const options = {
        title: $('title').value,
        tagline: modalOptions.tagline,
        vote_average: modalOptions.vote_average,
        vote_count: modalOptions.vote_count,
        release_date: $('date').value,
        poster_path: modalOptions.poster_path,
        overview: $('overview').value,
        budget: modalOptions.budget,
        revenue: modalOptions.revenue,
        runtime: $('runtime').value,
        genres: [$('genre').value],
        id: modalOptions.id,
      }
      console.log(options)
      dispatch(addUpdateMovie(options, true))
    }}>Save</Button>
    <Button type="modal" style="outlined" onClick={onCloseRequest}>Reset</Button>
  </ModalBase>
}
