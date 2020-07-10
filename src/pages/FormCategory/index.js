import React, { useState, useEffect } from 'react';
import { useHistory} from 'react-router-dom';

import './styles.css';
// import api from '../../services/api';

export default function FormCategory(){
    const history = useHistory();

    const [categoryName, setCategoryName] = useState(localStorage.getItem('categoryName'));
    const categoryId = localStorage.getItem('categoryId');

    useEffect(() => {
        // setCategory(localStorage.getItem('category'));
        // setId(localStorage.getItem('idCategory'));

        document.getElementById('input-category').value = categoryName;
    }, [categoryName]);

    async function handleSubmit(e){
        e.preventDefault();

        try {
            if(!categoryId){
                console.log('Cria')
            }
            else{
                console.log('atualiza');
            }

            console.log({
                categoryId,
                categoryName
            });

            history.push('/admin');
        } catch (error) {
            alert('Ocorreu um erro. Tente novamente');
        }
    }

    return(
        <div className='category-container'>
            <div className='category'>
                <h1>Categoria</h1>
                <br></br>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="input-category">Categoria</label>
                        <input 
                            className="form-control" 
                            id="input-category"
                            value={categoryName}
                            onChange={e => setCategoryName(e.target.value)}
                            required></input>
                    </div>
                    <button type="submit" className="btn">Salvar</button>
                </form>
            </div>
        </div>
    )
}