import React from 'react';
import './styles.css';

export default function Info(props) {
  return (
    <p>Edit <code>{props.code}</code> and save to reload.</p>
  );
}