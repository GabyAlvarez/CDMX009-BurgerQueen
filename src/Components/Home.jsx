import React, { Fragment } from 'react'
import 'firebase/auth';
import Routes from '../Routes';
import NavBar from './NavBar';

const Home = () => {
    return ( 
        <Fragment>
            <NavBar></NavBar>
            <Routes></Routes>
        </Fragment>
     );
}

export default Home;
