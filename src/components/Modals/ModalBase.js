import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Heading from '../Heading/Heading'

import './Modal.scss';

export default function ModalBase({ modalName = 'basic', children }) {
  const dispatch = useDispatch()
  const onCloseRequest = () => dispatch({ type: 'setState', payload: { modal: null, modalOptions: null }})

  useEffect(() => {
    window.addEventListener('keyup', handleKeyUp, false);
    document.addEventListener('click', handleOutsideClick, false);

    return () => {
      window.removeEventListener('keyup', handleKeyUp, false);
      document.removeEventListener('click', handleOutsideClick, false);
    }
  }, [])

  function handleKeyUp(e) {
    const keys = {
      27: () => {
        e.preventDefault();
        onCloseRequest();
        window.removeEventListener('keyup', handleKeyUp, false);
      },
    };

    if (keys[e.keyCode]) keys[e.keyCode]();
  }

  function handleOutsideClick(e) {
    if (e.target.classList.contains('modal')) {
      onCloseRequest();
      document.removeEventListener('click', handleOutsideClick, false);
    }
  }

  return (
    <div className={`modal ${modalName}-modal`}>
      <Heading />
        <div className="modal-content">
          { children }
        </div>
    </div>
  );
}
