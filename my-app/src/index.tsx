import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {User} from "./06/06";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <User />
  </React.StrictMode>
);
