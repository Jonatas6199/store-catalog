import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import './styles.css';
// import api from '../../services/api';

export default function FormContact(){
    const history = useHistory();

    const contactId = localStorage.getItem('contactId');
    const [contactEmail, setContactEmail] = useState(localStorage.getItem('contactEmail'));
    const [contactNumber, setContactNumber] = useState(localStorage.getItem('contactNumber'));
    const [contactFacebook, setContactFacebook] = useState(localStorage.getItem('contactFaceBook'));
    const [contactInstagram, setContactInstagram] = useState(localStorage.getItem('contactInstagram'));
    const [contactTwitter, setContactTwitter] = useState(localStorage.getItem('contactTwitter'));
    const [contactYoutube, setContactYoutube] = useState(localStorage.getItem('contactYoutube'));

    useEffect(() => {
        document.getElementById('input-email').value = contactEmail !== 'undefined' ? contactEmail : '';
        document.getElementById('input-number').value = contactNumber !== 'undefined' ? contactNumber : '';
        document.getElementById('input-facebook').value = contactFacebook !== 'undefined' ? contactFacebook : '';
        document.getElementById('input-instagram').value = contactInstagram !== 'undefined' ? contactInstagram : '';
        document.getElementById('input-twitter').value = contactTwitter !== 'undefined' ? contactTwitter : '';
        document.getElementById('input-youtube').value = contactYoutube !== 'undefined' ? contactYoutube : '';
    });

    async function handleSubmit(e){
        e.preventDefault();

        try {
            // console.log({
            //     productId,
            // });

            history.push('/admin');
        } catch (error) {
            alert('Ocorreu um erro. Tente novamente');
        }
    }

    return(
        <div className='contact-container'>
            <div className='contact'>
                <h1>Contato</h1>
                <br></br>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="input-email">E-mail</label>
                        <input 
                            className="form-control" 
                            id="input-email"
                            value={contactEmail}
                            onChange={e => setContactEmail(e.target.value)}
                            ></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="input-number">Número de telefone</label>
                        <input 
                            className="form-control" 
                            id="input-number"
                            value={contactNumber}
                            onChange={e => setContactNumber(e.target.value)}
                            ></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="input-facebook">Facebook</label>
                        <input 
                            className="form-control" 
                            id="input-facebook"
                            value={contactFacebook}
                            onChange={e => setContactFacebook(e.target.value)}
                            ></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="input-instagram">Instagram</label>
                        <input 
                            className="form-control" 
                            id="input-instagram"
                            value={contactInstagram}
                            onChange={e => setContactInstagram(e.target.value)}
                            ></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="input-twitter">Twitter</label>
                        <input 
                            className="form-control" 
                            id="input-twitter"
                            value={contactTwitter}
                            onChange={e => setContactTwitter(e.target.value)}
                            ></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="input-youtube">Youtube</label>
                        <input 
                            className="form-control" 
                            id="input-youtube"
                            value={contactYoutube}
                            onChange={e => setContactYoutube(e.target.value)}
                            ></input>
                    </div>
                    <button type="submit" className="btn">Salvar</button>
                </form>
            </div>
        </div>
    )
}