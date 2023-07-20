import React from 'react';
import ReactDOMClient from 'react-dom/client';
import App from './app.js';
import LandingPage from './screens/Responsive/index.tsx';
import 'src/styles/global.css';

const app = document.getElementById('app');
const root = ReactDOMClient.createRoot(app);
root.render(<LandingPage />);
