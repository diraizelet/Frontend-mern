import React from 'react';

import UsersList from '../components/UsersList';

const Users = () => {
  const USERS =[
    {id: "u1", 
    name: 'diraizelet' ,
    image: 'https://imgs.search.brave.com/dwGEyWpnuuGAV64kJp-mvnhWjKEh5pnaEjw_KmVRmaQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9wbGF5/LWxoLmdvb2dsZXVz/ZXJjb250ZW50LmNv/bS9lLWdXRFoxLXhv/SEhReXhIOGpvbVpR/ZFBBcVZIMnhLSjRz/N1B6Rl9DWXNGd1BF/ZTN3OUhZTVh2VWZx/dVpOMlhrdWFnPXc1/MjYtaDI5Ni1ydw', 
    place: 3}
  ];


  return <UsersList items={USERS}/>;
};

export default Users;
