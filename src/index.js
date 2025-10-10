import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Product from './components/product';
import { createRoot } from 'react-dom/client';

const rootElement=document.getElementById('root');
const root=createRoot(rootElement);
root.render(<Product/>)
