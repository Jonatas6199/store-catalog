import React, { useState, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';

import './styles.css';
// import api from '../../services/api';

export default function FormProduct(){
    const history = useHistory();

    const [category, setCategory] = useState({});
    const [id, setId] = useState(0);

    useEffect(() => {
        setCategory(localStorage.getItem('category'));
        setId(localStorage.getItem('idCategory'));

        document.getElementById('input-category').value = category;
    }, []);

    async function handleSubmit(e){
        e.preventDefault();

        try {
            if(id === 0){
                console.log('Cria')
            }
            else{
                console.log('atualiza');
            }

            history.push('/admin');
        } catch (error) {
            alert('Tente novamente');
        }
    }

    return(
        <div className='login-container'>
            <div className='login'>
                <h1>Categoria</h1>
                <br></br>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="input-category">Produto</label>
                        <input 
                            className="form-control" 
                            id="input-category"
                            value={category}
                            onChange={e => setCategory(e.target.value)}
                            required></input>
                    </div>
                    <button type="submit" className="btn">Salvar</button>
                </form>
            </div>
        </div>
    )
}