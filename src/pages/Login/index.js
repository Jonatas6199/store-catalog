import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useHistory } from 'react-router-dom';

import './styles.css';
// import api from '../../services/api';

export default function Login(){
    const history = useHistory();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function handleLogin(e){
        e.preventDefault();

        try {
            // const response = await api.post('');
            // localStorage.setItem('email')
            // if(isAdmin){}
            console.log({email, password});
            history.push('/admin');
        } catch (error) {
            alert('Falha no login. Tente novamente');
        }
    }

    return(
        <div className='login-container'>
            <div className='login'>
                <h1>Login</h1>
                <br></br>
                <form onSubmit={handleLogin}>
                    <div className="form-group">
                        <label htmlFor="input-email">E-mail</label>
                        <input 
                            type="email" 
                            className="form-control" 
                            id="input-email"
                            aria-describedby="emailHelp"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            required></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="input-password">Senha</label>
                        <input 
                            type="password" 
                            className="form-control" 
                            id="input-password" 
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            required></input>
                    </div>
                    <button type="submit" className="btn">Entrar</button>
                </form>
            </div>
        </div>
    )
}