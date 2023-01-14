import React, { useRef, useState, useEffect, useContext } from 'react'
import MenuItem from '@mui/material/MenuItem'
import Button from '@mui/material/Button'
// firebase //
import {
  getStorage,
  ref,
  uploadBytesResumable,
  uploadBytes,
  getDownloadURL,
  listAll,
  list,
} from 'firebase/storage'
import { AuthProvider, useAuth, AuthContext } from '../../context/AuthContext'
import { updateProfile } from 'firebase/auth'

const UploadImage = () => {

  const refImage = useRef()
  const user = useContext(AuthContext)
  const storage = getStorage()
  const [url, setUrl] = useState(null)

  useEffect(() => {
    // if user already have an avatar download it //
    if (user?.currentUser?.photoURL !== null) {
      setUrl(user?.currentUser?.photoURL)
    }
  }, [])

  function handleClick(e) {
    refImage.current.click()
  }
  function uploadAvatar(file) {
    const storageRef = ref(storage, `usersAvatar/${user?.currentUser?.uid}/${file}`)
    if (file == null) return
    uploadBytes(storageRef, file).then(() => {
      getDownloadURL(storageRef).then((url) => {
        setUrl(url)
        updateUserAvatar(url)
        props.render()

      })
    })
  }

  // upload avatar link with user profile //
  function updateUserAvatar(avatar) {
    updateProfile(user?.currentUser, { photoURL: `${avatar}` })
      .then(() => {
        console.log('user avatar is updated')
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <MenuItem onClick={() => handleClick()} variant="contained" component="label">
      Upload Avatar
      <input
        onChange={(e) => {
          uploadAvatar(e.target.files[0])
        }}
        ref={refImage}
        hidden
        accept=".jpg,.jpeg,.png"
        type="file"
      />
    </MenuItem>
  )
}

export default UploadImage
