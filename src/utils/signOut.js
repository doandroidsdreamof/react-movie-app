import { auth } from '../firebase';

const signOutUser = () => {
  auth.signOut();
};

export default signOutUser;
