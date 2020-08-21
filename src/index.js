import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './styles/login.css';
import App from './App';
import * as serviceWorker from './serviceWorker'; ////Para que sirve, lo puedo eliminar?
import firebaseConfig  from './firebaseConfig';
import { FirebaseAppProvider } from 'reactfire';
import { BrowserRouter } from 'react-router-dom';

const WhitRouter = () => <BrowserRouter><App /></BrowserRouter>

ReactDOM.render(
  (
  <FirebaseAppProvider firebaseConfig={ firebaseConfig }>
  <Suspense fallback={<p>Cargando...</p>}>
  <WhitRouter />
  </Suspense>
  </FirebaseAppProvider>
  ), document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
