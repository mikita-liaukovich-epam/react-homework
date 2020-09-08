import React from "react"
import Button from '../Button'
import ModalBase from './ModalBase'


export default function DeletingModal({ onCloseRequest, modalOptions }) {
    return ModalBase({
      modalName: 'deleting',
      content: <>
        <button className="modal-close" onClick={onCloseRequest}>✕</button>
        <h2 className="modal-title">Delete movie</h2>
        <p>Are you sure you want to delete {modalOptions.title}?</p>
        <Button type="modal" style="filled" onClick={onCloseRequest}>Confirm</Button>
      </>,
      onCloseRequest: onCloseRequest
    })
}
