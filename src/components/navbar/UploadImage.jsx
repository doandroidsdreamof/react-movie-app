import React from 'react'
import MenuItem from '@mui/material/MenuItem'
import Button from '@mui/material/Button'


const UploadImage = () => {
  return (
    <MenuItem variant="contained" component="label">
      Upload
      <input hidden accept="image/*" multiple type="file" />
    </MenuItem>
  )
}

export default UploadImage
