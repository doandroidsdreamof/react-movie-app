import React from 'react'

const DeleteAccountButton = (props) => {
  return (
    <button onClick={props.clickHandler} className="btn btn-outline btn-error">Delete My Account</button>
  )
}


export default DeleteAccountButton;