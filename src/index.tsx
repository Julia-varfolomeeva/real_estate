import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import './index.css';
import CssBaseline from '@mui/material/CssBaseline';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <React.StrictMode>
        <CssBaseline />
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>
);
