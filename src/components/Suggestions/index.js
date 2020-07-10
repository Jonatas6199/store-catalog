import React, { useState } from 'react';

// import api from '../../services/api';
import './styles.css';

export default function Suggestions(){
    const [email, setEmail] = useState('');
    const [suggestion, setSuggestion] = useState('');

    function handleSubmitSuggestion(e){
        e.preventDefault();

        try {
            console.log({email, suggestion});
        } catch (error) {
            alert('Erro ao enviar a sugestão. Tente novamente');
        }
    }

    return(
        <div className='sugestoes col-md-4'>
          <h3><strong>Sugestões</strong></h3>
          <p>Envie sua sugestão para nós!</p>
          <form onSubmit={handleSubmitSuggestion}>
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
                <label htmlFor="input-suggestion">Sugestão</label>
                <input
                    className="form-control" 
                    id="input-suggestion" 
                    value={suggestion}
                    onChange={e => setSuggestion(e.target.value)}
                    required></input>
            </div>
            <button type="submit" className="btn">Enviar</button>
          </form>
        </div>
    )
}