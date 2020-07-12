import React from 'react';
import { useHistory, Link } from 'react-router-dom';

import Products from '../../components/Products';
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
            </header>
            <button className='btn btn-login' onClick={handleLogout}>Sair</button>
            <hr></hr>
            <div className='main'>
                <Products isAdmin='Y'></Products>
                <Link className='btn btn-user' to='/user'>
                    Adicionar novo usuário
                </Link>
            </div>
            <div className='footer row'>
                <Contact isAdmin='Y'></Contact>
            </div>
        </>
    );
}