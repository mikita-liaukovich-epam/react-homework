import React from "react"
import { useDispatch, useSelector } from 'react-redux'
import Button from '../Button/Button'
import Form from '../Form/Form'
import { Formik } from 'formik'
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
    <Formik
      initialValues={modalOptions}
      onSubmit={(values, actions) => {
        dispatch(addUpdateMovie(values, true))
        actions.setSubmitting(false);
      }}
     >
      {props => (
        <form onSubmit={props.handleSubmit}>
          <Form onChange={props.handleChange} onBlur={props.handleBlur} type="id" info={modalOptions} />
          <Form onChange={props.handleChange} onBlur={props.handleBlur} type="title" info={modalOptions} />
          <Form onChange={props.handleChange} onBlur={props.handleBlur} type="date" info={modalOptions} />
          <Form onChange={props.handleChange} onBlur={props.handleBlur} type="url" info={modalOptions} />
          <Form onChange={props.handleChange} onBlur={props.handleBlur} type="genres" info={modalOptions} />
          <Form onChange={props.handleChange} onBlur={props.handleBlur} type="overview" info={modalOptions} />
          <Form onChange={props.handleChange} onBlur={props.handleBlur} type="runtime" info={modalOptions} />
          <Button buttonType="submit" type="modal" style="filled">Save</Button>
          <Button type="modal" style="outlined" onClick={onCloseRequest}>Reset</Button>
        </form>
      )}
     </Formik>
  </ModalBase>
}
