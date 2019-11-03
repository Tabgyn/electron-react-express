import React, { useState, useEffect } from 'react';

import api from './services/api';

function App() {
  const [label, setLabel] = useState([]);

  useEffect(() => {
    async function loadLabel() {
      const response = await api.get('/');

      setLabel(response.data);
    }

    loadLabel();
  }, [label]);

  return (
    <div>
      { label && <span>{label}</span>}
    </div>
  );
}

export default App;
