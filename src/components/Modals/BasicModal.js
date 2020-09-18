import React from 'react'
import Heading from '../Heading'

export default class BasicModal extends React.Component {
  constructor(props) {
    super(props);

    this.handleKeyUp = this.handleKeyUp.bind(this);
    this.handleOutsideClick = this.handleOutsideClick.bind(this);

    this.onCloseRequest = this.props.onCloseRequest;
    this.modalOptions = this.props.modalOptions;
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

  get modalName() {
    return 'basic'
  }

  render() {
    return (
      <div className={`modal ${this.modalName}-modal`}>
        <Heading />
          <div className="modal-content">
            { this.content() }
          </div>
      </div>
    );
  };
}
