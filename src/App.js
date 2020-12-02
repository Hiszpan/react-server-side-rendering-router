import React, { useState } from 'react';
import Home from './Home';

export default () => {
  const [name, setName] = useState('Backend name');

  return <Home clickHandler={setName} name={name} />;
};