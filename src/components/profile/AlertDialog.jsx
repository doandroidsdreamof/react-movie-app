import React, { useRef } from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import { getAuth, reauthenticateWithCredential, deleteUser, EmailAuthProvider } from 'firebase/auth'
import { useAuth } from '../../context/AuthContext'

function AlertDialog(props) {
  const auth = getAuth()
  const user = auth.currentUser
   console.log("🚀 ~ file: AlertDialog.jsx ~ line 13 ~ AlertDialog ~ user", user)

  const handleClickOpen = () => {
    props.openMenu()
  }

  const handleClose = () => {
    props.closeMenu()
  }

  async function deleteAccount() {
    deleteUser(user).then(() => {
    console.log("🚀 ~ file: AlertDialog.jsx ~ line 26 ~ deleteUser ~ user", user)

    }).catch((error) => {
    console.log("🚀 ~ file: AlertDialog.jsx ~ line 29 ~ deleteUser ~ error", error)


    });


  }

  return (
    <div>
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
