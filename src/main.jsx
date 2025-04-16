import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import DoctorContextProvider from './context/DoctorContext';
import { BrowserRouter } from 'react-router-dom';


createRoot(document.getElementById('root')).render(
  <DoctorContextProvider>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </DoctorContextProvider>
);
