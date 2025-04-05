import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import '../App.css';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h1>Welcome to Lucky Draw</h1>
      <div className="wheel">
        <button className="start-button" onClick={() => navigate('/pool')}>START</button>
      </div>
    </div>
  );
}

export default Home; 