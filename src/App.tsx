import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import Index from './pages/Index';

export default function App() {
  return (
    <BrowserRouter>
      <>
        <Routes>
          <Route path="/" element={<Index />} />
        </Routes>
        <Analytics />
        <SpeedInsights />
      </>
    </BrowserRouter>
  );
}
