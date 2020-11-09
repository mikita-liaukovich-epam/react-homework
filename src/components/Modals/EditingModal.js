import React from "react"
import { useDispatch, useSelector } from 'react-redux'
import Button from '../Button/Button'
import Form from '../Form/Form'
import { useFormik } from 'formik'
import ModalBase from '../Modals/ModalBase'
import { addUpdateMovie } from '../../redux/actions/Movie.actions'

const $ = (id) => document.getElementById(id);

export default function EditingModal() {
  const dispatch = useDispatch()
  const { modalOptions } = useSelector(state => state)
  const onCloseRequest = () => dispatch({ type: 'setState', payload: { modal: null, modalOptions: null }})

  const formik = useFormik({
    initialValues: modalOptions,
    onSubmit: (values, actions) => {
      dispatch(addUpdateMovie(values, true))
      actions.setSubmitting(false);
    },
  });

  return <ModalBase modalName='editing'>
    <button className="modal-close" onClick={onCloseRequest}>✕</button>
    <h2 className="modal-title">Edit movie</h2>
    <form onSubmit={formik.handleSubmit}>
      <Form onChange={formik.handleChange} onBlur={formik.handleBlur} type="id" info={modalOptions} />
      <Form onChange={formik.handleChange} onBlur={formik.handleBlur} type="title" info={modalOptions} />
      <Form onChange={formik.handleChange} onBlur={formik.handleBlur} type="date" info={modalOptions} />
      <Form onChange={formik.handleChange} onBlur={formik.handleBlur} type="url" info={modalOptions} />
      <Form onChange={formik.handleChange} onBlur={formik.handleBlur} type="genres" info={modalOptions} />
      <Form onChange={formik.handleChange} onBlur={formik.handleBlur} type="overview" info={modalOptions} />
      <Form onChange={formik.handleChange} onBlur={formik.handleBlur} type="runtime" info={modalOptions} />
      <Button buttonType="submit" type="modal" style="filled">Save</Button>
      <Button type="modal" style="outlined" onClick={onCloseRequest}>Reset</Button>
    </form>
  </ModalBase>
}
