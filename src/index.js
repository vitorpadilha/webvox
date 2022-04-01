import React from 'react';
import './index.css';
import Paperbase from './components/Paperbase';
import * as ReactDOMClient from 'react-dom/client';

const container = document.getElementById('root');

// Create a root.
const root = ReactDOMClient.createRoot(container);

// Initial render: Render an element to the root.
root.render(<React.StrictMode>
  <Paperbase />
</React.StrictMode>);
