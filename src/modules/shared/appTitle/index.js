import React from 'react';
import './appTitle.css';

const AppTitle = ({user: {firstName, lastName}}) => (
  <h4 className='app-title'>Hi, {`${firstName} ${lastName}`}</h4>
);

export default AppTitle;
