import React, {Fragment, useState} from 'react';
import 'firebase/firestore';
import 'firebase/auth';
import Login from './Components/Login';
import Home from './Components/Home';
import CreateCount from './Components/CreateCount';


function App() {

  const [isLoggin, setisLoggin] = useState(false);
  const [haveAcount, setHaveAcount] = useState(true);
  
  return (
    <Fragment>
      {
        !isLoggin && haveAcount ? <Login setisLoggin= {setisLoggin} setHaveAcount = {setHaveAcount}/> 
          : !isLoggin && !haveAcount ? <CreateCount setHaveAcount = {setHaveAcount} /> :
          <Home />
      }

    </Fragment>
  );
}

export default App;