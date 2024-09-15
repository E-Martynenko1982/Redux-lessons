import React, { Component } from 'react';
import { connect } from 'react-redux'
import * as UserActions from './users.actions.js';
class Users extends Component {
  onUserCreate = () => {
    const id = Math.round(Math.random() * 1000000);
    const newUser = {
      id,
      name: `User # ${id}`
    };
    this.props.createUsers(newUser);
  }



  render() {
    const { users, deleteUser } = this.props;
    return (
      <div className='users'>
        <button onClick={this.onUserCreate} className="users__create-btn">Create user</button>
        <ul className="users__list">
          {users.map(user => (
            <li key={user.id} className='users__list-item'>
              {user.name}

              <button onClick={() => deleteUser(user.id)} className="users__delete-btn">+</button>
            </li>
          ))}
        </ul>

      </div>
    )


  }
}
const mapState = state => {


  return {
    users: state.usersList,
  }
}

const mapDispatch = {
  createUsers: UserActions.addUser,
  deleteUser: UserActions.deleteUser,
}
const connector = connect(mapState, mapDispatch)
const connectedUsers = connector(Users);

export default connectedUsers;