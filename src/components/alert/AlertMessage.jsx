import React from 'react';
import Alert from 'react-bootstrap/Alert';

export const AlertMessage = ({ text }) => {

  return (
    <Alert key={text} variant='danger'>
      { text }
    </Alert>
  )
}
