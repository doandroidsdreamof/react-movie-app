import * as React from 'react'
import Avatar from '@mui/material/Avatar'
import Stack from '@mui/material/Stack'
import fallBackImage from '../../assets/image/fallback-image.png'

const AvatarPicture = () => {
  return (
    <Stack>
      <Avatar   sx={{ width: 24, height: 24 }} alt="user avatar" src={fallBackImage} />
    </Stack>
  )
}

export default AvatarPicture
