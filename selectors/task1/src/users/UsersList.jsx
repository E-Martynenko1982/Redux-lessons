import React from "react";
import User from './User';
import { connect } from "react-redux";
import Pagination from "./Pagination.jsx";
import { goNext, goPrev } from './user.actions.js';
import { usersListSelector, currentPageSelector } from "./users.selectors.js";

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
          <User key={user.id} {...user} />
        ))}
      </ul>

    </div>
  );
}

const mapState = state => ({
  users: usersListSelector(state),
  currentPage: currentPageSelector(state),
})

const mapDispatch = {
  goNext,
  goPrev,
}

export default connect(mapState, mapDispatch)(UsersList);
