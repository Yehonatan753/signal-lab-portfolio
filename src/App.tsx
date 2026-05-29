import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Index from './pages/Index';
import LegalPage from './pages/LegalPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/privacy" element={<LegalPage />} />
        <Route path="/terms" element={<LegalPage />} />
        <Route path="/copyright" element={<LegalPage />} />
        <Route path="/data-processing" element={<LegalPage />} />
      </Routes>
    </BrowserRouter>
  );
}
