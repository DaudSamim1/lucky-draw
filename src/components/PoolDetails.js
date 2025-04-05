import React from 'react';
import { useParams } from 'react-router-dom';

function PoolDetails() {
  const { poolId } = useParams();

  // Sample data for demonstration
  const users = [
    { name: 'Alice Bob Charlie', amount: '10rs', status: 'Joined' },
    { name: 'Bob', amount: '50rs', status: 'Pending' },
    { name: 'Charlie', amount: '100rs', status: 'Joined' },
    { name: 'Alice Bob Charlie', amount: '10rs', status: 'Joined' },
    { name: 'Bob', amount: '50rs', status: 'Pending' },
    { name: 'Charlie', amount: '100rs', status: 'Joined' },
  ];

  return (
    <div className="container">
      <h1>Enter Lucky Draw of {poolId}rs</h1>
      <p>Maximum users for the pool: 10 users</p>
      <div className="button-container">
        <a href={`tel:*786*1*1*1*03044519969*${poolId}#`} className="join-button-link">
          <button className="join-button">
            JOIN LUCKY DRAW
          </button>
        </a>
      </div>
      <table className="styled-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.name}</td>
              <td>{poolId} rs</td>
              <td>{user.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PoolDetails; 