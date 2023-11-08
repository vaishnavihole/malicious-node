import React from 'react';
import './Users.css'
import Navbar from '../../component/Navbar/Navbar';
import Footer from '../../component/Footer/Footer';

const usersData = [
  { id: 1, name: 'User 1', email: 'user1@example.com', verified: true },
  { id: 2, name: 'User 2', email: 'user2@example.com', verified: false },
  { id: 3, name: 'User 3', email: 'user3@example.com', verified: true },
  { id: 1, name: 'User 1', email: 'user1@example.com', verified: true },
  { id: 2, name: 'User 2', email: 'user2@example.com', verified: false },
  { id: 3, name: 'User 3', email: 'user3@example.com', verified: true },
];

function Users() {
  const verifiedUsers = usersData.filter((user) => user.verified);
  const unverifiedUsers = usersData.filter((user) => !user.verified);

  return (
<>
<Navbar/>
<div>
      <div className="user-cards">
        <div className="column verified">
          <h3>Verified Users</h3>
          {verifiedUsers.map((user) => (
            <div key={user.id} className="user-card">
              <h4>{user.name}</h4>
              <p>Email: {user.email}</p>
            </div>
          ))}
        </div>
        <div className="column unverified">
          <h3>Unverified Users</h3>
          {unverifiedUsers.map((user) => (
            <div key={user.id} className="user-card">
              <h4>{user.name}</h4>
              <p>Email: {user.email}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
    <Footer/>
</>
  );
}

export default Users;
