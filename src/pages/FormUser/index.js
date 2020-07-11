import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import './styles.css';
// import api from '../../services/api';

export default function FormUser(){
    const history = useHistory();

    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');

    async function handleSubmit(e){
        e.preventDefault();

        try {
            const data = { userName, userEmail, userPassword, isAdmin: '1' };
            console.log(data);
            
            history.push('/admin');
        } catch (error) {
            alert('Ocorreu um erro. Tente novamente');
        }
    }

    return(
        <div className='product-container'>
            <div className='product'>
                <h1>Usuário</h1>
                <br></br>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="input-name">Nome</label>
                        <input 
                            className="form-control" 
                            id="input-name"
                            value={userName}
                            onChange={e => setUserName(e.target.value)}
                            required></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="input-email">E-mail</label>
                        <input 
                            type='email'
                            className="form-control" 
                            id="input-email"
                            value={userEmail}
                            onChange={e => setUserEmail(e.target.value)}
                            required></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="input-password">Senha</label>
                        <input 
                            type='password'
                            className="form-control" 
                            id="input-password"
                            value={userPassword}
                            onChange={e => setUserPassword(e.target.value)}
                            required></input>
                    </div>
                    <button type="submit" className="btn">Salvar</button>
                </form>
            </div>
        </div>
    )
}