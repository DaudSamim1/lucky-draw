import '../App.css';

function Pool() {
  return (
    <div className="container">
      <h1>Select the pool to join lucky draw</h1>
      <div className="card-container">
        <a href="tel:*786#" className="card">
          <h2>100rs</h2>
        </a>
        <a href="tel:*786#" className="card">
          <h2>500rs</h2>
        </a>
        <a href="tel:*786#" className="card">
          <h2>1000rs</h2>
        </a>
      </div>
    </div>
  );
} 

export default Pool;
