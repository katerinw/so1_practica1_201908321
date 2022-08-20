

import { BrowserRouter, Routes, Route } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import 'semantic-ui-css/semantic.min.css';
import ReactDOM from 'react-dom/client';
import React from 'react';
import './index.css';



//Component
import Auto from "./Auto/Auto";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Auto/>} />
    </Routes>
  </BrowserRouter>
);

reportWebVitals();