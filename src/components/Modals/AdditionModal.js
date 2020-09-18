import React from "react"
import Button from '../Button'
import Form from '../Form'
import BasicModal from './BasicModal'


export default class AdditionModal extends BasicModal {
  constructor(props) {
    super(props)
  }

  get modalName() {
    return 'addition'
  }

  content() {
    return (
      <>
        <button className="modal-close" onClick={this.onCloseRequest}>✕</button>
        <h2 className="modal-title">Add movie</h2>
        <Form type="title" />
        <Form type="date" />
        <Form type="url" />
        <Form type="genre" />
        <Form type="overview" />
        <Form type="runtime" />
        <Button type="modal" style="filled" onClick={this.onCloseRequest}>Save</Button>
        <Button type="modal" style="outlined" onClick={this.onCloseRequest}>Reset</Button>
      </>
    )
  };
}
