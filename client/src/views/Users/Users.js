import React, {useState, useEffect} from 'react';
import './Users.css'
import Navbar from '../../component/Navbar/Navbar';
import Footer from '../../component/Footer/Footer';
import axios from 'axios';

function Users() {
  const [verifiedUsers, setVerifiedUsers] = useState([]);
  const [unverifiedUsers, setUnverifiedUsers] = useState([]);

  const loadUsers = async () =>{
    const {data} = await axios.get(`/users-with-verification`)

    setVerifiedUsers(data?.data?.verifiedUsers);
    setUnverifiedUsers(data?.data?.nonVerifiedUsers)
  }

  useEffect(() =>{
    loadUsers();
  }, []);

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
