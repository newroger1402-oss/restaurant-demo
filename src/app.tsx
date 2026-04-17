import { HashRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import { SocialFab, ScrollToTop } from './components/common';
import {
  HomePage,
  ServicesPage,
  AboutPage,
  ContactPage,
  FAQPage,
} from './pages';

function AppContent() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/faq" element={<FAQPage />} />
      </Routes>
      <SocialFab />
    </>
  );
}

function App() {
  return (
    <HelmetProvider>
      <HashRouter>
        <AppContent />
      </HashRouter>
    </HelmetProvider>
  );
}

export default App;