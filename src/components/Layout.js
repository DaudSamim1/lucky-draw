import { Link } from 'react-router-dom';
import '../App.css';

function Layout({ children }) {
  return (
    <div>
      <header className="navbar">
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/pool">Pool</Link></li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
      <footer className="footer">
        <p style={{ color: 'white', textAlign: 'center' }}>Lucky Draw &copy; 2025</p>
      </footer>
    </div>
  );
}

export default Layout; 