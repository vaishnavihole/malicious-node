// Homepage.js
import React from 'react';
import './Home.css';
import Footer from '../../component/Footer/Footer';
import Navbar from '../../component/Navbar/Navbar';

function Homepage() {
    return (
        <>
            <Navbar />
            <div className='homepage-container'>
                <h1>Welcome to Malicious Node</h1>
                <p>
                    Malicious Node is a cutting-edge project dedicated to exploring and understanding the behavior of malicious nodes in various network environments. Our mission is to provide insights into the detection and mitigation of these nodes to enhance network security.
                </p>
                <div className="feature-cards">
                    <div className="feature-card">
                        <h2>Unauthorized Activity</h2>
                        <p>Explore and analyze unauthorized activities in network environments.</p>
                    </div>
                    <div className="feature-card">
                        <h2>Data Tampering</h2>
                        <p>Investigate data tampering incidents and their impact on network security.</p>
                    </div>
                    <div className="feature-card">
                        <h2>Network Disruption</h2>
                        <p>Understand network disruptions and their implications for network stability.</p>
                    </div>
                    <div className="feature-card">
                        <h2>False Information</h2>
                        <p>Analyze the spread of false information and its effects on network communication.</p>
                    </div>
                    <div className="feature-card">
                        <h2>Malware Propagation</h2>
                        <p>Study malware propagation in network environments and ways to mitigate it.</p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Homepage;
