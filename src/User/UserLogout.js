import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../redux/slice/authSlice';


function UserLogout() {
  const dispatch = useDispatch();
  const handleLogout =() => {
    dispatch(logout());
  }
  return (
    <div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default UserLogout;