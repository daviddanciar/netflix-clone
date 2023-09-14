'use client';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { login, logout, selectUser } from '../redux/userSlice';
import { auth } from '../db/firebase';
import Login from '../components/Login/Login';
import Home from '../components/Homescreen/Home';
import './globals.css';

export default function Page() {
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
