import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App1 from './pages/App1';
import App2 from './pages/App2';
import App3 from './pages/App3';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<App1 />} />
          <Route path="/app2" element={<App2 />} />
          <Route path="/app3" element={<App3 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;