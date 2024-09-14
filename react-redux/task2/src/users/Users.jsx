import React, { Component } from 'react';


class Users extends Component {


  render() {
    const { users } = this.props;
    <div className='users'>
      <button class="users__create-btn">Create user</button>
      <ul className="users__list">
        {users.map(user => (
          <li className='users__list-item'>
            {user.name}
          </li>
        ))}
      </ul>
      <button class="users__delete-btn">+</button>
    </div>

  }
}



export default Users;