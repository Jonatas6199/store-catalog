import React, { useState, useEffect } from 'react';
import { FaPencilAlt, FaPlus } from 'react-icons/fa';
import { FiTrash2 } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';

import './styles.css';
import doce from '../../assets/Doce.jpg';

export default function Products(props){
    const history = useHistory();

    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState({});
    const [products, setProducts] = useState([]);
    const [allProducts, setAllProducts] = useState([]);

    useEffect(() => {
        // const response = [];

        setProducts([{
            productId: "1",
            productName: 'brigadeiro',
            productDescription: 'chocolate',
            productPrice: '7,99',
            categoryId: '1'
        },{
            productId: "2",
            productName: 'beijinho',
            productDescription: 'beijinho',
            productPrice: '4,99',
            categoryId: '2'
        },
        {
            productId: "3",
            productName: 'brigadeiro',
            productDescription: 'chocolate',
            productPrice: '17,90',
            categoryId: '3'
        },
        {
            productId: "4",
            productName: 'brigadeiro',
            productDescription: 'chocolate',
            productPrice: '7,99',
            categoryId: '1'
        }]);
        setAllProducts([{
            productId: "1",
            productName: 'brigadeiro',
            productDescription: 'chocolate',
            productPrice: '7,99',
            categoryId: '1'
        },{
            productId: "2",
            productName: 'beijinho',
            productDescription: 'beijinho',
            productPrice: '4,99',
            categoryId: '2'
        },
        {
            productId: "3",
            productName: 'brigadeiro',
            productDescription: 'chocolate',
            productPrice: '17,90',
            categoryId: '3'
        },
        {
            productId: "4",
            productName: 'brigadeiro',
            productDescription: 'chocolate',
            productPrice: '7,99',
            categoryId: '1'
        }]);

    }, []);

    useEffect(() => {
        // const response = await api
        const response = ['doce', 'salgado', 'azedo'];
        if(props.isAdmin === 'Y'){
            localStorage.setItem('categories', response);
        }
        setCategories(response);
    }, [props.isAdmin]);

    function handleUpdateProduct(p){
        localStorage.setItem('productId', p.productId);
        localStorage.setItem('productName', p.productName);
        localStorage.setItem('productDescription', p.productDescription);
        localStorage.setItem('productPrice', p.productPrice);
        localStorage.setItem('categoryId', p.categoryId);

        history.push('/product');
    }

    async function handleDeleteProduct(id){
        console.log(id);
    }

    function handleUpdateCategory(){
        if(!selectedCategory.id || selectedCategory.id === -1){
            return;
        }

        localStorage.setItem('categoryId', selectedCategory.id);
        localStorage.setItem('categoryName', selectedCategory.category);
        history.push('/category');
    }

    async function handleDeleteCategory(){
        try {
            // await 
            if(!selectedCategory.id || selectedCategory.id === -1){
                return;
            }
            console.log('deleted ' + selectedCategory.id);
        } catch (error) {
            alert('Erro ao deletar categoria');
        }
    }

    async function filter(e){
        try {
            setSelectedCategory({
                id: e.target.value,
                category: e.target.options[e.target.selectedIndex].text
            });
            
            if(e.target.value === '-1'){
                setProducts(allProducts);
            }
            else{
                setProducts(allProducts.filter(product => product.categoryId === e.target.value))
            }
        } catch (error) {
            alert('Ocorreu um erro. Tente novamente');
        }
    }

    return(
        <>
        <div className='categories-container'>
            <select className='dropdown' id='dropdown' onChange={filter}>
                <option key='-1' value='-1'>Todos</option>
                {categories.map((category, i) => (
                    <option key={i} value={i + 1}>{category}</option>
                ))}
            </select>
            {props.isAdmin === 'Y' ? (
                <div className='btn-container'>
                    <Link to='/category'>
                        <FaPlus size={22} color='#000'></FaPlus>
                    </Link>
                    <button className='btn-action' onClick={handleUpdateCategory}>
                        <FaPencilAlt size={22} color='#000'></FaPencilAlt>
                    </button>
                    <button className='btn-action' onClick={handleDeleteCategory}>
                        <FiTrash2 size={22} color='#000'></FiTrash2>
                    </button>
                </div>
            ) : null}
        </div>
        <div className='products-container container'>
            <div className="products row">
                {products.map(product => (
                    <div className="card col-lg-3" key={product.productId}>
                        <img className="card-img-top" src={doce} alt={product.productName}></img>
                        <div className="card-body">
                            <h5 className="card-title">{product.productName}</h5>
                            <p className="card-text">{product.productDescription}</p>
                            <strong>R${product.productPrice}</strong>
                        </div>
                        {props.isAdmin === 'Y' ? (
                            <div className='btn-group'>
                                <button className='btn-action'onClick={() => handleUpdateProduct(product)} >
                                    <FaPencilAlt size={20} color='#000'></FaPencilAlt>
                                </button>
                                <button className='btn-action' onClick={() => handleDeleteProduct(product.productId)}>
                                    <FiTrash2 size={20} color='#000'></FiTrash2>
                                </button>
                            </div>
                        ) : null}
                    </div>
                ))}
                {props.isAdmin === 'Y' ? (
                    <div className="card col-sm-3" id='plus-button'>
                        <Link to='/product'>
                            <FaPlus size={32} color='#000'></FaPlus>
                        </Link>
                    </div>
                ) : null}
            </div>
        </div>
        </>
    )
}