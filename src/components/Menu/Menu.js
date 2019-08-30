import React from 'react';
import PropTypes from 'prop-types';
import '../../assets/css/Menu/Menu.css';
import Logo from './Logo';
import Profile from './Profile';

function Menu() {
  return (
    <div class="top-bar">
      <Logo /> 
      <Profile />
    </div>
  );
}

export default Menu;