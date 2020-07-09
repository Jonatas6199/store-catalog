import React from 'react';
import { useHistory } from 'react-router-dom';

import Categories from '../../components/Categories';
import Products from '../../components/Products';
import Suggestions from '../../components/Suggestions';
import Contact from '../../components/Contact';

import './styles.css';

export default function Admin(){
    const history = useHistory();

    function handleLogout(){
        localStorage.clear();
        history.push('/');
    }
    return(
        <>
            <header>
                <h1>NakaDocinhos</h1>
                <button className='btn' onClick={handleLogout}>Sair</button>
            </header>
            <div className='line'></div>
            <div className='main'>
                {/* <div className='filter-catalog'></div> */}
                <Categories isAdmin='Y'></Categories>
                <Products isAdmin='Y'></Products>
            </div>
            <div className='footer row'>
                <Suggestions></Suggestions>
                <Contact></Contact>
            </div>
        </>
    );
}