import React, { useEffect } from 'react'
import Heading from '../Heading'

export default function ModalBase({ onCloseRequest, content, modalName = 'basic' }) {
  useEffect(() => {
    console.warn('mounted')
    window.addEventListener('keyup', handleKeyUp, false);
    document.addEventListener('click', handleOutsideClick, false);

    return () => {
      window.removeEventListener('keyup', handleKeyUp, false);
      document.removeEventListener('click', handleOutsideClick, false);
      console.warn('unmounted')
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
          { content }
        </div>
    </div>
  );
}
