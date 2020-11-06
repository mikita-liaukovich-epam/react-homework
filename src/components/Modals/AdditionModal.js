import React from "react"
import { useDispatch, useSelector } from 'react-redux'
import Button from '../Button/Button'
import Form from '../Form/Form'
import { Formik } from 'formik'
import ModalBase from './ModalBase'
import { addUpdateMovie } from '../../redux/actions/Movie.actions'

const $ = (id) => document.getElementById(id);

export default function AdditionModal() {
  const dispatch = useDispatch();
  const { modalOptions = undefined } = useSelector(state => state);

  const name = 'addition'

  return <ModalBase modalName={name}>
    <button className="modal-close" onClick={() => dispatch({ type: 'setState', payload: { modal: null }})}>✕</button>
    <h2 className="modal-title">Add movie</h2>
    <Formik
      initialValues={modalOptions}
      onSubmit={(values, actions) => {
        dispatch(addUpdateMovie(values))
        actions.setSubmitting(false);
      }}
     >
      {props => (
        <form onSubmit={props.handleSubmit}>
          <Form onChange={props.handleChange} onBlur={props.handleBlur} type="title" />
          <Form onChange={props.handleChange} onBlur={props.handleBlur} type="tagline" />
          <Form onChange={props.handleChange} onBlur={props.handleBlur} type="date" />
          <Form onChange={props.handleChange} onBlur={props.handleBlur} type="url" />
          <Form onChange={props.handleChange} onBlur={props.handleBlur} type="genre" />
          <Form onChange={props.handleChange} onBlur={props.handleBlur} type="overview" />
          <Form onChange={props.handleChange} onBlur={props.handleBlur} type="runtime" />
          <Button buttonType="submit" type="modal" style="filled">Save</Button>
          <Button type="modal" style="outlined" onClick={() => dispatch({ type: 'setState', payload: { modal: null }})}>Reset</Button>
        </form>
      )}
     </Formik>
  </ModalBase>
}
