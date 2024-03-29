import React from 'react';

//* Material UI //
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import UploadImage from '../navbar/UploadImage';

function ProfileSettings(props) {
  return (
    <Menu
      sx={{
        color: 'dark',
      }}
      className="ml-12 z-50 "
      aria-labelledby="account-settings-menu"
      anchorEl={props.anchorEl}
      open={props.clickHandler}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'left',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'left',
      }}
    >
      <MenuItem onClick={(e) => props.handleLogout()}>Logout</MenuItem>
      <MenuItem onClick={(e) => props.openDel()}>Delete Account</MenuItem>
      <UploadImage />
    </Menu>
  );
}

export default ProfileSettings;
