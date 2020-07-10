import React, { useState, useEffect } from 'react';
import { FaWhatsapp, FaYoutube, FaEnvelope, FaFacebook, FaInstagram } from 'react-icons/fa';

// import api from '../../services/api';
import './styles.css';

export default function Contact() {
  const [contact, setContact] = useState({});

  useEffect(() => {
    // const response = await api.get('')
    const response = {
      whatsapp: '(11)98874-2688',
      youtube: 'text',
      email: 'a@gmail.com'
    };
    setContact(response);

  }, []);

  return (
    <div className='contato col-md-auto'>
      <h3><strong>Contato</strong></h3>
      {contact.whatsapp !== undefined ? (
        <div className='contact-items'>
          <FaWhatsapp size={18} color='#c8c9c7'></FaWhatsapp>
          {contact.whatsapp}
        </div>
      ) : null}
      {contact.youtube !== undefined ? (
        <div className='contact-items'>
          <FaYoutube size={18} color='#c8c9c7'></FaYoutube>
          {contact.youtube}
        </div>
      ) : null}
      {contact.email !== undefined ? (
        <div className='contact-items'>
          <FaEnvelope size={18} color='#c8c9c7'></FaEnvelope>
          {contact.email}
        </div>
      ) : null}
      {contact.facebook !== undefined ? (
        <div className='contact-items'>
          <FaFacebook size={18} color='#c8c9c7'></FaFacebook>
          {contact.facebook}
        </div>
      ) : null}
      {contact.instagram !== undefined ? (
        <div className='contact-items'>
          <FaInstagram size={18} color='#c8c9c7'></FaInstagram>
          {contact.instagram}
        </div>
      ) : null}
    </div>
  );
}