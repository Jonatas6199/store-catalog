import React, { useState, useEffect } from 'react';
import { FaWhatsapp, FaYoutube, FaEnvelope } from 'react-icons/fa';

import api from '../../services/api';
import './styles.css';

export default function Info(props) {
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
    <div className='contato'>
      <h3>Contato</h3>
      {contact.whatsapp !== undefined ? (
        <div>
          <FaWhatsapp size={16} color='#c8c9c7'></FaWhatsapp>
          {contact.whatsapp}
        </div>
      ) : null}
      {contact.youtube !== undefined ? (
        <div>
          <FaYoutube size={16} color='#c8c9c7'></FaYoutube>
          {contact.youtube}
        </div>
      ) : null}
      {contact.email !== undefined ? (
        <div>
          <FaEnvelope size={16} color='#c8c9c7'></FaEnvelope>
          {contact.email}
        </div>
      ) : null}
    </div>
  );
}