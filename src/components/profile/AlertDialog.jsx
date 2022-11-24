import React, { useRef, useState, useEffect } from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import { getAuth, reauthenticateWithCredential, deleteUser, EmailAuthProvider } from 'firebase/auth'
import { useAuth } from '../../context/AuthContext'
import InvalidPassword from '../common/InvalidPassword'

function AlertDialog(props) {
  const auth = getAuth()
  const user = auth.currentUser
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false)
  const [ok, setOk] = useState(false)

  useEffect(() =>{

  setError(false)
  },[error])

  const handleClickOpen = () => {
    props.openMenu()
  }

  const handleClose = () => {
    props.closeMenu()
  }

  function deleteAccount() {
    const credential = EmailAuthProvider.credential(auth.currentUser.email, password)
    const result = reauthenticateWithCredential(auth.currentUser, credential)
    deleteUser(user)
      .then(() => {
        console.log('🚀 ~ file: AlertDialog.jsx ~ line 31 ~ deleteUser ~ user', user)
        handleClose()
        setOk(true)
      })
      .catch((error) => {
        console.log('🚀 ~ file: AlertDialog.jsx ~ line 33 ~ deleteUser ~ error', error)
        setError(true)
      })
  }

  return (
    <div>
      <InvalidPassword ok={ok} error={error} />
      <Dialog
        open={props.open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{'Danger Zone!'}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to delete this account?
          </DialogContentText>
          <DialogContentText id="alert-dialog-description">
            Please enter your password
          </DialogContentText>
          <label htmlFor="password" className="text-gray-700" />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="password"
            minLength="8"
            required
            onChange={(e) => setPassword(e.target.value)}
            className="block w-full px-4 mt-2  bg-gray-200 py-2 rounded-md border border-gray-300 text-gray-600 transition duration-300
                                focus:ring-2 focus:ring-sky-300 focus:outline-none
                                invalid:ring-2 "
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>No</Button>
          <Button onClick={deleteAccount} autoFocus>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default AlertDialog
