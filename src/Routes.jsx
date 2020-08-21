import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './Components/Login';
import Products from './Components/Products';
import Cookmodule from './Components/Kitchen/Cookmodule';

const Routes = ({setisLoggin, isLoggin}) => {
    return (
        <Switch>
            <Route path="/Products" component={Products}/>
            <Route path="/Kitchen" component={Cookmodule}/>
            <Route path="/">
              <Login
              setisLoggin={setisLoggin} 
              isLoggin={isLoggin} />
            </Route>
        </Switch>
     );
}
 
export default Routes;
