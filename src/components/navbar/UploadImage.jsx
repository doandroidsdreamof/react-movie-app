import React, { useContext, useEffect, useRef, useState } from 'react';
import { updateProfile } from 'firebase/auth';
//* Firebase //
import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage';
//* Third-party //
import { useParams } from 'react-router-dom';

//* Material UI //
import MenuItem from '@mui/material/MenuItem';

//* Local imports //
import { AuthContext } from '../../context/AuthContext';

function UploadImage() {
  const refImage = useRef();
  const user = useContext(AuthContext);
  const storage = getStorage();
  const [url, setUrl] = useState(null);
  const { id } = useParams();

  //* if user already have an avatar download it //
  useEffect(() => {
    if (user?.currentUser?.photoURL !== null) {
      setUrl(user?.currentUser?.photoURL);
    }
  }, []);

  function handleClick(e) {
    refImage.current.click();
  }
  function uploadAvatar(file) {
    const storageRef = ref(storage, `usersAvatar/${user?.currentUser?.uid}/${file}`);
    if (file == null) return;
    uploadBytes(storageRef, file).then(() => {
      getDownloadURL(storageRef).then((url) => {
        setUrl(url);
        updateUserAvatar(url);
      });
    });
  }

  //* upload avatar link with user profile //
  function updateUserAvatar(avatar) {
    updateProfile(user?.currentUser, { photoURL: `${avatar}` })
      .then(() => {
        console.log('user avatar is updated');
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <MenuItem onClick={() => handleClick()} variant="contained" component="label">
      Upload Avatar
      <input
        onChange={(e) => {
          uploadAvatar(e.target.files[0]);
        }}
        ref={refImage}
        hidden
        accept=".jpg,.jpeg,.png"
        type="file"
      />
    </MenuItem>
  );
}

export default UploadImage;
