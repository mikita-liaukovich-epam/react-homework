import React from "react"
import Button from './Button'
import Heading from './Heading'

export default class DeletingModal extends React.Component {
  constructor(props) {
    super(props);

    this.handleKeyUp = this.handleKeyUp.bind(this);
    this.handleOutsideClick = this.handleOutsideClick.bind(this);
  }

  componentDidMount() {
    window.addEventListener('keyup', this.handleKeyUp, false);
    document.addEventListener('click', this.handleOutsideClick, false);
  }

  componentWillUnmount() {
    window.removeEventListener('keyup', this.handleKeyUp, false);
    document.removeEventListener('click', this.handleOutsideClick, false);
  }

  handleKeyUp(e) {
    const { onCloseRequest } = this.props;
    const keys = {
      27: () => {
        e.preventDefault();
        onCloseRequest();
        window.removeEventListener('keyup', this.handleKeyUp, false);
      },
    };

    if (keys[e.keyCode]) keys[e.keyCode]();
  }

  handleOutsideClick(e) {
    const { onCloseRequest } = this.props;

    if (e.target.classList.contains('modal')) {
      onCloseRequest();
      document.removeEventListener('click', this.handleOutsideClick, false);
    }
  }

  render() {
    const {
      onCloseRequest,
    } = this.props;

    return (
      <div className="modal deleting-modal">
        <Heading />
        <div className="modal-content">
          <button className="modal-close" onClick={onCloseRequest}>✕</button>
          <h2 className="modal-title">Delete movie</h2>
          <p>Are you sure you want to delete this movie?</p>
          <Button type="modal" style="fulfilled" onClick={onCloseRequest}>Confirm</Button>
        </div>
      </div>
    );
  };
}
