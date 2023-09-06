'use client';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { login, logout, selectUser } from './../../src/app/redux/userSlice';
import Login from './components/Login/Login';
import Home from './components/Homescreen/Home';
import { auth } from './db/firebase';
import '../app/components/App.css';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
      } else {
        dispatch(logout());
      }
    });

    return unsubscribe;
  }, [dispatch]);

  return <div className="app">{!user ? <Login /> : <Home />}</div>;
}

export default App;
