import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import AISolutionsPage from './pages/AISolutionsPage';
import ServicesPage from './pages/ServicesPage';
import AgentsPage from './pages/AgentsPage';
import RAGPage from './pages/RAGPage';
import DemoPage from './pages/DemoPage';
import AdvancedNeuralNetworks from './pages/solutions/AdvancedNeuralNetworks';
import NLPPage from './pages/solutions/NLPPage';
import ComputerVisionPage from './pages/solutions/ComputerVisionPage';
import ReinforcementLearningPage from './pages/solutions/ReinforcementLearningPage';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black text-white">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/ai-solutions" element={<AISolutionsPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/agents" element={<AgentsPage />} />
          <Route path="/rag" element={<RAGPage />} />
          <Route path="/demo" element={<DemoPage />} />
          <Route path="/solutions/neural-networks" element={<AdvancedNeuralNetworks />} />
          <Route path="/solutions/nlp" element={<NLPPage />} />
          <Route path="/solutions/computer-vision" element={<ComputerVisionPage />} />
          <Route path="/solutions/reinforcement-learning" element={<ReinforcementLearningPage />} />
        </Routes>
      </div>
    </Router>
  );
}