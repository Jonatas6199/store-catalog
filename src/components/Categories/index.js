import React, { useState, useEffect } from 'react';
import { FaPlus, FaPencilAlt } from 'react-icons/fa';
import { FiTrash2 } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';

// import api from '../../services/api';
import './styles.css';

export default function Categories(props){
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState({});
    const history = useHistory();

    useEffect(() => {
        // const response = await api
        const response = ['doce', 'salgado', 'azedo'];
        setCategories(response);
    }, []);

    function handleAddCategory(){
        localStorage.setItem('categoryId', '');
        localStorage.setItem('categoryName', '');
        history.push('/category');
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
        } catch (error) {
            
        }
    }

    return (
        <div className='categories-container'>
            <select className='dropdown' id='dropdown' onChange={filter}>
                <option key='-1' value='-1'>Todos</option>
                {categories.map((category, i) => (
                    <option key={i} value={i}>{category}</option>
                ))}
            </select>
            {props.isAdmin === 'Y' ? (
                <div className='btn-container'>
                    <button className='btn-action' onClick={handleAddCategory}>
                        <FaPlus size={22} color='#000'></FaPlus>
                    </button>
                    <button className='btn-action' onClick={handleUpdateCategory}>
                        <FaPencilAlt size={22} color='#000'></FaPencilAlt>
                    </button>
                    <button className='btn-action' onClick={handleDeleteCategory}>
                        <FiTrash2 size={22} color='#000'></FiTrash2>
                    </button>
                </div>
            ) : null}
        </div>
    )
}