import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'primereact/resources/themes/nova/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
