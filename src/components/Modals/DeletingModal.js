import React from "react"
import Button from '../Button'
import BasicModal from './BasicModal'


export default class DeletingModal extends BasicModal {
  constructor(props) {
    super(props)
  }

  get modalName() {
    return 'deleting'
  }

  content() {
    return (
      <>
        <button className="modal-close" onClick={this.onCloseRequest}>✕</button>
        <h2 className="modal-title">Delete movie</h2>
        <p>Are you sure you want to delete {this.props.modalOptions.title}?</p>
        <Button type="modal" style="filled" onClick={this.onCloseRequest}>Confirm</Button>
      </>
    )
  }
}
