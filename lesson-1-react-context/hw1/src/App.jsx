import React, { useState } from 'react';
import Header from './Header';
import { UserContext, userData } from './user-context';


const App = () => {
  const [user, setUser] = useState(userData)

  console.log(user)


  return (
    <UserContext.Provider value={user}>
      <div className='page'>
        <Header />
      </div>
    </UserContext.Provider>

  );
}

export default App;
