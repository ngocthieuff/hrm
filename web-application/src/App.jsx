import './App.css';
import { LoadedList } from './pages/LoadedList';
import { LandingPage } from './pages/LandingPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/list" element={<LoadedList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
