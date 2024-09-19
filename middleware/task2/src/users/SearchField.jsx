import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as usersActions from "./users.actions";
import PropTypes from "prop-types";


class SearchField extends Component {
  state = {
    userName: "",
  }
  onChange = event => {
    this.setState({ userName: event.target.value });
  }

  handleUserSearch = () => {

    this.props.fetchUserData(this.state.userName);

  }
  render() {

    return (
      <div className='name-form'>
        <input
          name='input'
          type="text"
          className="name-form__input"
          onChange={this.onChange}
          value={this.state.userName}
        />
        <button
          className="name-form__btn btn"
          onClick={this.handleUserSearch}
        >Show</button>
      </div>
    );
  }
}

SearchField.propTypes = {

  fetchUserData: PropTypes.func.isRequired,

}

const mapDispatch = {
  showSpinner: usersActions.showSpinner,
  userDataReceived: usersActions.userDataReceived,
  fetchUserData: usersActions.fetchUserData,
}


export default connect(null, mapDispatch)(SearchField);
