import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './compoments/Layout';
import Home from './compoments/Home';

function App() {

  return (
    <Routes>
      {/* // <Route path="*" element={<NotFoundPage />} /> */}
      <Route path="/" element={<Layout />}>
        {/* <Route index element={<Navigate to="/mektep" />} /> */}
        <Route index element={<Home />} />
     
      </Route>
    </Routes>
  );
}

export default App;
