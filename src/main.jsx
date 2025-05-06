import './index.css'

import { App } from './App.jsx';
import { createRoot } from 'react-dom/client'

const handleClick = (label) => {
  alert(`You clicked ${label}`);
};

createRoot(document.getElementById('root')).render(
  <App />
);

