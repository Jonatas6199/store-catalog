import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import './styles.css';
// import api from '../../services/api';

export default function FormProduct(){
    const history = useHistory();

    const productId = localStorage.getItem('productId');
    const [productName, setProductName] = useState(localStorage.getItem('productName'));
    const [productDescription, setProductDescription] = useState(localStorage.getItem('productDescription'));
    const [productPrice, setProductPrice] = useState(localStorage.getItem('productPrice'));
    // const [categoryId, setCategoryId] = useState(localStorage.getItem('categoryId'));

    useEffect(() => {
        document.getElementById('input-name').value = productName;
        document.getElementById('input-description').value = productDescription;
        document.getElementById('input-price').value = productPrice;
    });

    async function handleSubmit(e){
        e.preventDefault();

        try {
            if(!productId){
                console.log('Cria')
            }
            else{
                console.log('atualiza');
            }

            console.log({
                productId,
                productName,
                productDescription,
                productPrice,
                // categoryId
            });

            history.push('/admin');
        } catch (error) {
            alert('Ocorreu um erro. Tente novamente');
        }
    }

    return(
        <div className='product-container'>
            <div className='product'>
                <h1>Produto</h1>
                <br></br>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="input-name">Nome</label>
                        <input 
                            className="form-control" 
                            id="input-name"
                            value={productName}
                            onChange={e => setProductName(e.target.value)}
                            required></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="input-description">Descrição</label>
                        <input 
                            className="form-control" 
                            id="input-description"
                            value={productDescription}
                            onChange={e => setProductDescription(e.target.value)}
                            required></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="input-price">Preço</label>
                        <input 
                            type='number'
                            min='0.01'
                            step='any'
                            className="form-control" 
                            id="input-price"
                            value={productPrice}
                            onChange={e => setProductPrice(e.target.value)}
                            required></input>
                    </div>
                    <button type="submit" className="btn">Salvar</button>
                </form>
            </div>
        </div>
    )
}