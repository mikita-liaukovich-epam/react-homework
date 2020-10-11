import React from "react"
import Button from '../Button/Button'
import Form from '../Form/Form'
import ModalBase from '../Modals/ModalBase'


export default function EditingModal({ onCloseRequest, modalOptions }) {
  return <ModalBase modalName='editing' onCloseRequest={onCloseRequest}>
    <button className="modal-close" onClick={onCloseRequest}>✕</button>
    <h2 className="modal-title">Edit movie</h2>
    <Form type="id" info={modalOptions} />
    <Form type="title" info={modalOptions} />
    <Form type="date" info={modalOptions} />
    <Form type="url" info={modalOptions} />
    <Form type="genre" info={modalOptions} />
    <Form type="overview" info={modalOptions} />
    <Form type="runtime" info={modalOptions} />
    <Button type="modal" style="filled" onClick={onCloseRequest}>Save</Button>
    <Button type="modal" style="outlined" onClick={onCloseRequest}>Reset</Button>
  </ModalBase>
}
