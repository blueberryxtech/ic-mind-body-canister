import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import { BrowserRouter, Routes, Route, Switch, Link } from 'react-router-dom';
import './Sidebar.css';
import LearnMore from './LearnMore';

export default props => {
  return (
    <Menu>
      <a className="menu-item" href="/">Dashboard</a>
      <a className="menu-item" href="/mydata">My data</a>
      <a className="menu-item" href="/logout">Connect web3 ID</a>
    </Menu>
  );
};
