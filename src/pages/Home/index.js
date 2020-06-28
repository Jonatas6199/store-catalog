import React from 'react';
import { Link } from 'react-router-dom';
import Info from '../../components/Info';

import './styles.css';
import logo from '../../assets/logo.svg';

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <Info code='src/App.js'></Info>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Link className='page-link' to='/login'>Ir para Login</Link>
      </header>
    </div>
  );
}

export default Home;