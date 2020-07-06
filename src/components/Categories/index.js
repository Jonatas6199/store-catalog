import React, { useState, useEffect } from 'react';
import { FaPlus } from 'react-icons/fa';

// import api from '../../services/api';
import './styles.css';

export default function Categories(props){
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        // const response = await api
        const response = ['doce', 'salgado', 'azedo'];
        // console.log(props.isAdmin);
        setCategories(response);
    }, []);

    return (
        <div className='categories-container'>
            <select className='dropdown'>
                <option key='0' value='todos'>Todos</option>
                {categories.map((category, i) => (
                    <option key={i} value={category}>{category}</option>
                ))}
            </select>
            {props.isAdmin === 'Y' ? (
                <button className='btn-add'>
                    <FaPlus size={16} color='#000'></FaPlus>
                </button>
            ) : null}
        </div>
    )
}