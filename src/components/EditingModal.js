import React from "react"
import Button from './Button'
import Form from './Form'
import Heading from './Heading'


export default class EditingModal extends React.Component {
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
      modalOptions: options
    } = this.props;

    return (
      <div className="modal editing-modal">
        <Heading />
        <div className="modal-content">
          <button className="modal-close" onClick={onCloseRequest}>✕</button>
          <h2 className="modal-title">Edit movie</h2>
          <Form type="id" info={options} />
          <Form type="title" info={options} />
          <Form type="date" info={options} />
          <Form type="url" info={options} />
          <Form type="genre" info={options} />
          <Form type="overview" info={options} />
          <Form type="runtime" info={options} />
          <Button type="modal" style="fulfilled" onClick={onCloseRequest}>Save</Button>
          <Button type="modal" style="outlined" onClick={onCloseRequest}>Reset</Button>
        </div>
      </div>
    );
  };
}
