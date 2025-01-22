import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import DoctorContextProvider from './context/DoctorContext';


createRoot(document.getElementById('root')).render(
  <DoctorContextProvider>
    <App />
  </DoctorContextProvider>
);
