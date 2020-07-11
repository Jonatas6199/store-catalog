import React from 'react';
import { Link } from 'react-router-dom';

import Categories from '../../components/Categories';
import Products from '../../components/Products';
import Suggestions from '../../components/Suggestions';
import Contact from '../../components/Contact';

import './styles.css';

function Home() {
  return (
    <>
      <header>
        <h1>NakaDocinhos</h1>
      </header>
      <Link className='btn btn-login' to='/login'>Entrar</Link>
      <hr></hr>
      <div className='main'>
        <Categories isAdmin='N'></Categories>
        <Products isAdmin='N'></Products>
      </div>
      <div className='footer row'>
        <Suggestions></Suggestions>
        <Contact  isAdmin='N'></Contact>
      </div>
    </>
  );
}

export default Home;