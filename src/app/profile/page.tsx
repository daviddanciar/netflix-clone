'use client';
import React from 'react';
import { useSelector } from 'react-redux';

import './Profile.css';
import { selectUser } from '../../redux/userSlice';
import Navbar from '../../components/Navbar/Navbar';
import { auth } from '../../db/firebase';

export default function Page() {
  const user = useSelector(selectUser);
  const { email } = user || {};

  return (
    <div className="profileScreen">
      <Navbar />
      <div className="profileScreen__body">
        <h1>Edit Profile</h1>
        <div className="profileScreen__info">
          <img
            src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/84c20033850498.56ba69ac290ea.png"
            alt=""
          />
          <div className="profileScreen__details">
            <h2>{email}</h2>
            <div className="profileScreen__plans">
              <h3>Plans</h3>
              <button
                onClick={() => auth.signOut()}
                className="profileScreen__signOut"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
