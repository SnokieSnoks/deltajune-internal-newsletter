import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Christmas2025 from './pages/Christmas2025';
import { AudioPlayerProvider } from './contexts/AudioPlayerProvider';
import DynamicTitle from './components/DynamicTitle';

function App() {
  return (
    <AudioPlayerProvider>
      <BrowserRouter>
        <DynamicTitle/>
        <Routes>
          <Route path="/" element={<Christmas2025 />} />
        </Routes>
      </BrowserRouter>
    </AudioPlayerProvider>
  );
}

export default App;
