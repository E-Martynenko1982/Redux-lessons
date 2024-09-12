import React from 'react';
import Header from './Header';
import { UserContext, userData } from './user-context';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: userData
    };
  }

  render() {


    return (
      <UserContext.Provider value={this.state.userData}>
        <div className='page'>
          <Header />
        </div>
      </UserContext.Provider>
    );
  }
}

export default App;
