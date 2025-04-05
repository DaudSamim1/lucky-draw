import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import { useNavigate } from 'react-router-dom';
import Home from './components/Home';
import Pool from './components/Pool';
import NotFound from './components/NotFound';
import Layout from './components/Layout';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/pool" element={<Pool />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
