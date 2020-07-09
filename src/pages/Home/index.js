import React from 'react';
import { Link } from 'react-router-dom';

import Categories from '../../components/Categories';
import Products from '../../components/Products';
import Suggestions from '../../components/Suggestions';
import Contact from '../../components/Contact';

import './styles.css';
// import logo from '../../assets/logo.svg';

function Home() {
  return (
    <>
      <header>
        <div className="header-container">
          <h1>NakaDocinhos</h1>
          <Link className='btn' to='/login'>Entrar</Link>
        </div>
      </header>
      <div className='line'></div>
      <div className='main'>
        <Categories isAdmin='N'></Categories>
        <Products isAdmin='N'></Products>
      </div>
      <div className='footer row'>
        <Suggestions></Suggestions>
        <Contact></Contact>
      </div>
    </>
  );
}

export default Home;