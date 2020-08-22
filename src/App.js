import React, {Fragment, useState} from 'react';
import 'firebase/firestore';
import 'firebase/auth';
import Login from './Components/Login';
import Home from './Components/Home';


function App() {

  const [isLoggin, setisLoggin] = useState(false);
  
  return (
    <Fragment>
      {
        !isLoggin ? 
          <Login setisLoggin= {setisLoggin} />: 
          <Home />
      }

    </Fragment>
  );
}

export default App;