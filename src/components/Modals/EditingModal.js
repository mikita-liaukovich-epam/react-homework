import React from "react"
import Button from '../Button'
import Form from '../Form'
import BasicModal from './BasicModal'


export default class EditingModal extends BasicModal {
  constructor(props) {
    super(props)
  }

  get modalName() {
    return 'editing'
  }

  content() {
    return (
      <>
        <button className="modal-close" onClick={this.onCloseRequest}>✕</button>
        <h2 className="modal-title">Edit movie</h2>
        <Form type="id" info={this.modalOptions} />
        <Form type="title" info={this.modalOptions} />
        <Form type="date" info={this.modalOptions} />
        <Form type="url" info={this.modalOptions} />
        <Form type="genre" info={this.modalOptions} />
        <Form type="overview" info={this.modalOptions} />
        <Form type="runtime" info={this.modalOptions} />
        <Button type="modal" style="filled" onClick={this.onCloseRequest}>Save</Button>
        <Button type="modal" style="outlined" onClick={this.onCloseRequest}>Reset</Button>
      </>
    )
  };
}
