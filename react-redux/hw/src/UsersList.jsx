import React from "react";
import User from './User';

const UsersList = ({ users }) => {
  return (
    <div>
      <ul className="users">
        {users.map(user => (
          <li key={user.id} className="user">
            <User name={user.name} age={user.age} />
          </li>
        ))}
      </ul>

    </div>
  );
}

export default UsersList;
