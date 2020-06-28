import React from 'react';
import { useHistory } from 'react-router-dom';

import './styles.css';

export default function Page2(){
    const history = useHistory();

    function returnHome(){
        history.push('/');
    }

    return(
        <button className='btn-return' onClick={returnHome}>Ir para Home</button>
    )
}