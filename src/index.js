
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ReactDOM from 'react-dom';




import App from './App';
import Product from './Product';



ReactDOM.render(
  <BrowserRouter>
  <Routes>
       <Route exact path='/' element={<App/>}></Route>
       <Route exact path='Product' element={<Product/>}></Route>
  </Routes>
  
  </BrowserRouter>
  ,document.getElementById('root')
);

