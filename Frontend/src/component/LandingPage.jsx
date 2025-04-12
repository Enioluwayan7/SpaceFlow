import React from 'react';
import { Link } from 'react-router-dom';
import { Building, Calendar, CheckCircle, Clock, Users } from "lucide-react";
import '../css/LandPage.css'



function LandingPage() {
    return (
        <div className="page-container">
            <header className='main-header'>
                <div className='header-container'>
                    <div className='logo-container'>
                        <span>SPACEFLOW</span>
                    </div>
                    <div className='nav-links'>
                        <button className='login-btn'>Login</button>
                        <button className='signup-btn'>Sign Up</button>
                    </div>
                </div>
            </header>
            <main className='main-content'>
                <section className='hero-section'>
                    <div className='hero-container'>
                        <h2 className='hero-title'>Welcome to SpaceFlow</h2>
                        <p className='hero-description'>Book Desks, Meeting rooms and Event Spaces with Ease. <br /> Manage your workspace efficiently.</p>
                        <div className='hero-buttons'>
                            <button className='getstart-btn'>Get started</button>
                            <button className='workspace-btn'>Browse Workspaces</button>
                        </div>
                    </div>
                </section>
                <section className="features-section">
          <div className="features-grid">
            <div className="feature-card">
              <Calendar className="feature-icon" />
              <h3 className="feature-title">Easy Booking</h3>
              <p className="feature-description">Book workspaces in seconds with our intuitive interface</p>
            </div>
            <div className="feature-card">
              <Clock className="feature-icon" />
              <h3 className="feature-title">Real-time Updates</h3>
              <p className="feature-description">Receive notifications and reminders about your bookings</p>
            </div>
            <div className="feature-card">
              <CheckCircle className="feature-icon" />
              <h3 className="feature-title">Flexible Management</h3>
              <p className="feature-description">Easily reschedule, cancel, or extend your bookings</p>
            </div>
            <div className="feature-card">
              <Users className="feature-icon" />
              <h3 className="feature-title">Role-based Access</h3>
              <p className="feature-description">Different permissions for employees, learners, and admins</p>
            </div>
            <div className="feature-card">
              <Building className="feature-icon" />
              <h3 className="feature-title">Multiple Spaces</h3>
              <p className="feature-description">Book desks, meeting rooms, and event spaces</p>
            </div>
            <div className="feature-card">
              <Calendar className="feature-icon" />
              <h3 className="feature-title">Analytics</h3>
              <p className="feature-description">Track workspace usage and optimize your resources</p>
            </div>
          </div>
        </section>
      </main>
      <footer className="main-footer">
        <div className="footer-container">
          <p className="copyright-text">
            © 2025 WorkspaceHub. All rights reserved.
          </p>
        </div>
      </footer>
                     
            
        </div>
    );
}

export default LandingPage;