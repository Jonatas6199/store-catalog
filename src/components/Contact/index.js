import React, { useState, useEffect } from 'react';
import { FaWhatsapp, FaYoutube, FaEnvelope, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';

// import api from '../../services/api';
import './styles.css';

export default function Contact(props) {
  const [contact, setContact] = useState({});

  const history = useHistory();

  useEffect(() => {
    // const response = await api.get('')
    const response = {
      contactId: 1,
      contactNumber: '(11)98874-2688',
      contactYoutube: 'text',
      contactEmail: 'a@gmail.com'
    };
    setContact(response);
  }, []);

  function handleChangeContact(){
    localStorage.setItem('contactId', contact.contactId);
    localStorage.setItem('contactNumber', contact.contactNumber);
    localStorage.setItem('contactEmail', contact.contactEmail);
    localStorage.setItem('contactFaceBook', contact.contactFacebook);
    localStorage.setItem('contactInstagram', contact.contactInstagram);
    localStorage.setItem('contactTwitter', contact.contactTwitter);
    localStorage.setItem('contactYoutube', contact.contactYoutube);
    
    history.push('/contact');
  }

  return (
    <div className='contato col-md-auto'>
      <h3><strong>Contato</strong></h3>
      {contact.contactNumber ? (
        <div className='contact-items'>
          <FaWhatsapp size={18} color='#c8c9c7'></FaWhatsapp>
          {contact.contactNumber}
        </div>
      ) : null}
      {contact.contactYoutube ? (
        <div className='contact-items'>
          <FaYoutube size={18} color='#c8c9c7'></FaYoutube>
          {contact.contactYoutube}
        </div>
      ) : null}
      {contact.contactEmail ? (
        <div className='contact-items'>
          <FaEnvelope size={18} color='#c8c9c7'></FaEnvelope>
          {contact.contactEmail}
        </div>
      ) : null}
      {contact.contactFacebook ? (
        <div className='contact-items'>
          <FaFacebook size={18} color='#c8c9c7'></FaFacebook>
          {contact.contactFacebook}
        </div>
      ) : null}
      {contact.contactInstagram ? (
        <div className='contact-items'>
          <FaInstagram size={18} color='#c8c9c7'></FaInstagram>
          {contact.contactInstagram}
        </div>
      ) : null}
      {contact.contactTwitter ? (
        <div className='contact-items'>
          <FaTwitter size={18} color='#c8c9c7'></FaTwitter>
          {contact.contactTwitter}
        </div>
      ) : null}
      {props.isAdmin === 'Y' ? (
        <button className='btn btn-contact' onClick={handleChangeContact}>Alterar</button>
      ) : null}
    </div>
  );
}