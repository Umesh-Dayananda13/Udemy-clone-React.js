import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';
import Navbar from './components/navbar';
import Topic from './components/Topic';
import Pop from './components/pop';
import Recommended from './components/recom';
import Footer from './components/footer';
import Sale from './components/saleimage';
import Categories from './components/categories';


const root = ReactDOM.createRoot(document.getElementById('hello'));


root.render(<>
  <Navbar />
  <Categories />
  <Sale />
  <Recommended />
  <Topic />
  <Pop />
  <Footer /> 
</>
  
);
