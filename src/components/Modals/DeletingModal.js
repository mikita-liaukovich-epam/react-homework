import React from "react"
import { useSelector, useDispatch } from 'react-redux'
import Button from '../Button/Button'
import ModalBase from './ModalBase'
import { deleteMovie } from '../../redux/actions/Movie.actions'


export default function DeletingModal() {
  const dispatch = useDispatch()
  const { modalOptions, selectedGenre } = useSelector(state => state)
  
  const onCloseRequest = () => dispatch({ type: 'setState', payload: { modal: null, modalOptions: null }})

  return <ModalBase modalName='deleting' onCloseRequest={onCloseRequest}>
    <button className="modal-close" onClick={onCloseRequest}>✕</button>
    <h2 className="modal-title">Delete movie</h2>
    <p>Are you sure you want to delete {modalOptions.title}?</p>
    <Button type="modal" style="filled" onClick={() => {
      dispatch(deleteMovie(modalOptions.id, selectedGenre))
      dispatch({type: 'setState', payload: {modal: null, modalOptions: null}})
    }}>Confirm</Button>
  </ModalBase>
}
