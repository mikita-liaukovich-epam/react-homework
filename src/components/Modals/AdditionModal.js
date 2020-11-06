import React from "react"
import { useDispatch, useSelector } from 'react-redux'
import Button from '../Button/Button'
import Form from '../Form/Form'
import { useFormik } from 'formik'
import ModalBase from './ModalBase'
import { addUpdateMovie } from '../../redux/actions/Movie.actions'

const $ = (id) => document.getElementById(id);

export default function AdditionModal() {
  const dispatch = useDispatch();
  const { modalOptions = undefined } = useSelector(state => state);

  const name = 'addition'

  const formik = useFormik({
    initialValues: modalOptions,
    onSubmit: (values, actions) => {
      dispatch(addUpdateMovie(values))
      actions.setSubmitting(false);
    },
  });

  return <ModalBase modalName={name}>
    <button className="modal-close" onClick={() => dispatch({ type: 'setState', payload: { modal: null }})}>✕</button>
    <h2 className="modal-title">Add movie</h2>
    <form onSubmit={formik.handleSubmit}>
      <Form onChange={formik.handleChange} onBlur={formik.handleBlur} type="title" />
      <Form onChange={formik.handleChange} onBlur={formik.handleBlur} type="tagline" />
      <Form onChange={formik.handleChange} onBlur={formik.handleBlur} type="date" />
      <Form onChange={formik.handleChange} onBlur={formik.handleBlur} type="url" />
      <Form onChange={formik.handleChange} onBlur={formik.handleBlur} type="genre" />
      <Form onChange={formik.handleChange} onBlur={formik.handleBlur} type="overview" />
      <Form onChange={formik.handleChange} onBlur={formik.handleBlur} type="runtime" />
      <Button buttonType="submit" type="modal" style="filled">Save</Button>
      <Button type="modal" style="outlined" onClick={() => dispatch({ type: 'setState', payload: { modal: null }})}>Reset</Button>
    </form>
  </ModalBase>
}
