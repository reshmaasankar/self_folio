import React from 'react'

function Modal(props: any) {
    const {text, togglePopup} = props;
  return (
    <div className="fixed top-3 right-3 bg-green-400 rounded p-4 border-black/[0.1]">
          <p> {text} </p>
        </div>
  )
}

export default Modal