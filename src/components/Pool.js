import '../App.css';

function Pool() {
  return (
    <div className="container">
      <h1>Select the pool to join lucky draw</h1>
      <div className="card-container">
        <a href="/pool/10" className="card">
          <h2>10rs</h2>
        </a>
        <a href="/pool/50" className="card">
          <h2>50rs</h2>
        </a>
        <a href="/pool/100" className="card">
          <h2>100rs</h2>
        </a>
      </div>
    </div>
  );
}  

export default Pool;
