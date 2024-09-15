import React from 'react';
import { connect } from "react-redux";
import UsersList from './UsersList';
import Pagination from './Pagination';
import { SET_CURRENT_PAGE } from './user.actions';

class UserTable extends React.Component {


  onPageChangeHandler = (page) => {

    const { usersPerPage, usersList } = this.props;


    const totalPages = Math.ceil(usersList.length / usersPerPage);


    //Переконайтеся, що поточна сторінка не виходить за межі
    if (page >= 0 && page < totalPages) {
      this.props.setCurrentPage(page);
    }
  }

  render() {

    const { currentPage, usersPerPage, usersList } = this.props;
    const usersCount = usersList.length;

    // Pagination logic
    const indexOfLastUser = (currentPage + 1) * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;


    const currentUsers = usersList.slice(indexOfFirstUser, indexOfLastUser);

    return (
      <div>
        <Pagination
          currentPage={currentPage + 1} // Display pages starting from 1
          usersPerPage={usersPerPage}
          usersCount={usersCount}
          onPageChange={this.onPageChangeHandler}
        />
        <UsersList users={currentUsers} />
      </div>

    );
  }
}

const mapState = state => ({
  usersList: state.users.usersList,
  currentPage: state.users.currentPage,
  usersPerPage: 3,
})

const mapDispatch = dispatch => ({
  setCurrentPage: (page) => dispatch({ type: SET_CURRENT_PAGE, payload: page }),
})

export default connect(mapState, mapDispatch)(UserTable);
