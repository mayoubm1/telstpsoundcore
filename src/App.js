import { Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import MotifLibrary from './components/MotifLibrary';
import TimelineViewer from './components/TimelineViewer';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/library" element={<MotifLibrary />} />
          <Route path="/timeline" element={<TimelineViewer />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;