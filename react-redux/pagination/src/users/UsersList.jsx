import React from "react";
import User from './User';
import { connect } from "react-redux";
import Pagination from "./Pagination.jsx";
import { goNext, goPrev } from './user.actions.js';

const UsersList = ({ users, goNext, goPrev, currentPage, }) => {
  const itemsPerPage = 3;
  const startIndex = currentPage * itemsPerPage;
  const displayedUsers = users.slice(startIndex, startIndex + itemsPerPage);


  return (
    <div>
      <Pagination
        goPrev={goPrev}
        goNext={goNext}
        currentPage={currentPage}
        totalItems={users.length}
        itemsPerPage={itemsPerPage}
      />
      <ul className="users">
        {displayedUsers.map(user => (
          <User name={user.name} key={user.id} age={user.age} />
        ))}
      </ul>

    </div>
  );
}

const mapState = state => ({
  users: state.users.usersList,
  currentPage: state.users.currentPage,
})

const mapDispatch = {
  goNext,
  goPrev,
}

export default connect(mapState, mapDispatch)(UsersList);
