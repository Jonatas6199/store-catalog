import React, { useState, useEffect } from 'react';
import { FaPencilAlt, FaPlus } from 'react-icons/fa';
import { FiTrash2 } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';

import './styles.css';

export default function Products(props){
    const history = useHistory();

    const [products, setProducts] = useState([]);

    useEffect(() => {
        // const response = [];

        setProducts([{
            productId: "1",
            productName: 'brigadeiro',
            productDescription: 'chocolate',
            productPrice: '7,99'
        },{
            productId: "2",
            productName: 'beijinho',
            productDescription: 'beijinho',
            productPrice: '4,99'
        }]);
    }, []);

    function handleUpdateProduct(p){
        localStorage.setItem('productId', p.productId);
        localStorage.setItem('productName', p.productName);
        localStorage.setItem('productDescription', p.productDescription);
        localStorage.setItem('productPrice', p.productPrice);

        history.push('/product');
    }

    async function handleDeleteCategory(id){
        console.log(id);
    }

    return(
        <div className='products-container container'>
            <div className="products row">
                {products.map(product => (
                    <div className="card col-lg-3 align-items-stretch" key={product.productId}>
                        <img className="card-img-top" src="..." alt="A"></img>
                        <div className="card-body">
                            <h5 className="card-title">{product.productName}</h5>
                            <p className="card-text">{product.productDescription}</p>
                            <strong>{product.productPrice}</strong>
                        </div>
                        {props.isAdmin === 'Y' ? (
                            <div className='btn-group'>
                                <button className='btn-action'onClick={() => handleUpdateProduct(product)} >
                                    <FaPencilAlt size={20} color='#000'></FaPencilAlt>
                                </button>
                                <button className='btn-action' onClick={() => handleDeleteCategory(product.productId)}>
                                    <FiTrash2 size={20} color='#000'></FiTrash2>
                                </button>
                            </div>
                        ) : null}
                    </div>
                ))}
                <div className="card col-lg-3 d-flex align-items-stretch">
                    <img className="card-img-top" src="..." alt="A"></img>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
                <div className="card col-lg-3 d-flex align-items-stretch">
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