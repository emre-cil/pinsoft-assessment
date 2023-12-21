import { BrowserRouter } from 'react-router-dom';
import Routing from './routes/Routing';
import React from 'react';

const App = () => {
  return (
    <BrowserRouter>
      <CssBaseline />
      <Routing />
    </BrowserRouter>
  );
};

export default App;
