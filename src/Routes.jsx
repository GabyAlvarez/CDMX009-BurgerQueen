import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Products from './Components/Products';
import Cookmodule from './Components/Kitchen/Cookmodule';
import CreateCount from './Components/CreateCount';

const Routes = () => {
    return (
        <Switch>
            <Route path="/Products" component={Products}/>
            <Route path="/Kitchen" component={Cookmodule}/>
        </Switch>
     );
}
 
export default Routes;
