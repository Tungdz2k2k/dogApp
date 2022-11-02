import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import "swiper/css/bundle";
import reportWebVitals from './reportWebVitals';
import App from "./App";
import {ThemeProvider} from './ThemeContext'
import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App tab="home" />);
// ReactDOM.render(
//     <React.StrictMode>
//         <ThemeProvider>
//             <App />
//         </ThemeProvider>
//     </React.StrictMode>,
//     document.getElementById('root')
// );
reportWebVitals();