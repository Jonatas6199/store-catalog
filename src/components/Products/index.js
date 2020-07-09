import React, { useState, useEffect } from 'react';
import { FaPencilAlt, FaPlus } from 'react-icons/fa';
import { FiTrash2 } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import './styles.css';

export default function Products(props){
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // const response = [];

        setProducts([{
            id: "1",
            name: 'brigadeiro',
            descricao: 'chocolate',
            preco: '7,99'
        },{
            id: "2",
            name: 'beijinho',
            descricao: 'beijinho',
            preco: '4,99'
        }]);
    }, []);

    async function handleDeleteCategory(id){
        console.log(id);
    }

    return(
        <div className='products-container container'>
            <div className="products row">
                {products.map(product => (
                    <div className="card col-sm-3" key={product.id}>
                        <img className="card-img-top" src="..." alt="A"></img>
                        <div className="card-body">
                            <h5 className="card-title">{product.name}</h5>
                            <p className="card-text">{product.descricao}</p>
                            <strong>{product.preco}</strong>
                        </div>
                        {props.isAdmin === 'Y' ? (
                            <div>
                                <button className='btn-add'>
                                    <FaPencilAlt size={18} color='#000'></FaPencilAlt>
                                </button>
                                <button className='btn-add' onClick={() => handleDeleteCategory(product.id)}>
                                    <FiTrash2 size={18} color='#000'></FiTrash2>
                                </button>
                            </div>
                        ) : null}
                    </div>
                ))}
                <div className="card col-sm-3">
                    <img className="card-img-top" src="..." alt="A"></img>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
                <div className="card col-sm-3">
                    <img className="card-img-top" src="..." alt="B"></img>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
                {props.isAdmin === 'Y' ? (
                    <div className="card col-sm-3" id='plus-button'>
                    <Link to='/product'>
                        <FaPlus size={32} color='#000'></FaPlus>
                    </Link>
                </div>
                ) : null}
            </div>
        </div>
    )
}