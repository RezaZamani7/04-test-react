import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Products from './components/functional/products';
import { createRoot } from 'react-dom/client';

const rootElement=document.getElementById('root');
const root=createRoot(rootElement);
root.render(<Products/>)
