import React from 'react';

const User = ({ ...user }) => {
  const { name, age } = user;
  return (
    <div className='user'>
      <span className="user__name">{name}</span>
      <span className="user__age">{age}</span>
    </div>
  );
}

export default User;
