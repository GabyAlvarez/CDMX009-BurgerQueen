import React,{Fragment, useState} from 'react';
import Routes from './Routes';
import NavBar from './Components/NavBar';
import 'firebase/firestore';
import 'firebase/auth'

function App() {

  const [isLoggin, setisLoggin] = useState(true)
  
  return (
    <Fragment>
      {isLoggin &&
        <NavBar/>
      }
      
      <Routes setisLoggin={setisLoggin}/>
    </Fragment>
  );
}

export default App;