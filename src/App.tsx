import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AudioPlayerProvider } from './contexts/AudioPlayerProvider';
import DynamicTitle from './components/DynamicTitle';
import Archive from './pages/Archive';
import Christmas2025 from './pages/newsletters/Christmas2025';
import Summer2026 from './pages/newsletters/Summer2026';

function App() {
  return (
    <AudioPlayerProvider>
      <BrowserRouter>
        <DynamicTitle/>
        <Routes>
          <Route path="/summer2026" element={<Summer2026 />} />
          <Route path="/christmas2025" element={<Christmas2025 />} />

          <Route path="/" element={<Archive />} />
        </Routes>
      </BrowserRouter>
    </AudioPlayerProvider>
  );
}

export default App;
