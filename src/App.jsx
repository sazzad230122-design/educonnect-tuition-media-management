import { Link, Route, Routes } from 'react-router-dom'

import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'
import ForgotPassword from './pages/ForgotPassword.jsx'
import FindTutor from './pages/FindTutor.jsx'
import FindTuition from './pages/FindTuition.jsx'
import TuitionDetails from './pages/TuitionDetails.jsx'
import TutorProfile from './pages/TutorProfile.jsx'

import './App.css'

function Home() {
  return (
    <div className="app">

      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-container">

          <Link to="/" className="brand">
            <div className="brand-icon">E</div>

            <div className="brand-text">
              <h2>EduConnect</h2>
              <span>Tuition Media Management</span>
            </div>
          </Link>

          <div className="nav-links">

            <Link to="/" className="active">
              Home
            </Link>

            <Link to="/find-tutor">
              Find Tutor
            </Link>

            <Link to="/find-tuition">
              Find Tuition
            </Link>

            <a href="#features">
              Features
            </a>

            <a href="#how-it-works">
              How It Works
            </a>

            <a href="#about">
              About
            </a>

          </div>

          <div className="nav-actions">

            <Link to="/login" className="login-btn">
              Login
            </Link>

            <Link to="/register" className="get-started-btn">
              Get Started
            </Link>

          </div>

        </div>
      </nav>

      {/* Hero */}
      <section className="hero">

        <div className="hero-container">

          <div className="hero-content">

            <span className="hero-label">
              TUITION MEDIA MANAGEMENT
            </span>

            <h1>
              Connect Students
              <br />
              With the <span>Right Tutor</span>
            </h1>

            <p>
              EduConnect makes tuition management simple.
              Find verified tutors, discover tuition opportunities,
              and connect with the right people in one platform.
            </p>

            <div className="hero-buttons">

              <Link
                to="/find-tutor"
                className="primary-hero-btn"
              >
                Find a Tutor →
              </Link>

              <Link
                to="/find-tuition"
                className="secondary-hero-btn"
              >
                Find Tuition
              </Link>

            </div>

            <div className="hero-stats">

              <div>
                <strong>500+</strong>
                <span>Students</span>
              </div>

              <div>
                <strong>200+</strong>
                <span>Verified Tutors</span>
              </div>

              <div>
                <strong>1,000+</strong>
                <span>Tuition Posts</span>
              </div>

            </div>

          </div>

          {/* Dashboard Preview */}
          <div className="hero-dashboard">

            <div className="dashboard-window">

              <div className="dashboard-top">

                <div className="dashboard-dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>

                <span className="dashboard-title">
                  EduConnect Dashboard
                </span>

              </div>

              <div className="dashboard-body">

                <div className="dashboard-sidebar">

                  <div className="mini-logo">
                    E
                  </div>

                  <div className="sidebar-line active"></div>
                  <div className="sidebar-line"></div>
                  <div className="sidebar-line"></div>
                  <div className="sidebar-line"></div>
                  <div className="sidebar-line"></div>

                </div>

                <div className="dashboard-content">

                  <div className="dashboard-heading">

                    <div>
                      <small>Welcome back</small>
                      <h3>Student Dashboard</h3>
                    </div>

                    <div className="online-badge">
                      ● Online
                    </div>

                  </div>

                  <div className="dashboard-cards">

                    <div className="mini-card">
                      <span>Students</span>
                      <strong>500+</strong>
                    </div>

                    <div className="mini-card">
                      <span>Tutors</span>
                      <strong>200+</strong>
                    </div>

                    <div className="mini-card">
                      <span>Tuition</span>
                      <strong>1K+</strong>
                    </div>

                  </div>

                  <div className="dashboard-section">

                    <div className="section-title">
                      <strong>Recent Activity</strong>
                      <span>View all</span>
                    </div>

                    <div className="activity-item">

                      <div className="activity-avatar">
                        R
                      </div>

                      <div>
                        <strong>
                          New tutor application
                        </strong>

                        <small>
                          Mathematics Tutor · 5 min ago
                        </small>
                      </div>

                    </div>

                    <div className="activity-item">

                      <div className="activity-avatar">
                        N
                      </div>

                      <div>
                        <strong>
                          New tuition posted
                        </strong>

                        <small>
                          Physics · Dhanmondi · 12 min ago
                        </small>
                      </div>

                    </div>

                  </div>

                </div>

              </div>

            </div>

            <div className="floating-card tutor-floating-card">

              <div className="floating-avatar">
                R
              </div>

              <div>
                <strong>Rahim Ahmed</strong>
                <span>✓ Verified Tutor</span>
              </div>

              <div className="floating-rating">
                ★ 4.9
              </div>

            </div>

            <div className="floating-card student-floating-card">

              <span className="floating-check">
                ✓
              </span>

              <div>
                <strong>Tuition Matched</strong>
                <span>Perfect match found</span>
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* Features */}
      <section
        className="features-section"
        id="features"
      >

        <div className="section-container">

          <div className="section-heading">

            <span>
              PLATFORM FEATURES
            </span>

            <h2>
              Everything You Need in One Platform
            </h2>

            <p>
              A complete platform designed to make
              tuition management easier for students,
              tutors, and administrators.
            </p>

          </div>

          <div className="features-grid">

            <div className="feature-card">

              <div className="feature-icon">
                🔎
              </div>

              <h3>
                Find the Right Tutor
              </h3>

              <p>
                Search tutors by subject, location,
                experience, rating, and budget.
              </p>

            </div>

            <div className="feature-card">

              <div className="feature-icon">
                🎓
              </div>

              <h3>
                Find Tuition Jobs
              </h3>

              <p>
                Tutors can discover suitable tuition
                opportunities and apply easily.
              </p>

            </div>

            <div className="feature-card">

              <div className="feature-icon">
                ✓
              </div>

              <h3>
                Verified Profiles
              </h3>

              <p>
                Connect with verified tutors and
                trusted platform users.
              </p>

            </div>

            <div className="feature-card">

              <div className="feature-icon">
                ⚡
              </div>

              <h3>
                Smart Management
              </h3>

              <p>
                Manage applications, payments,
                reviews, notifications, and more.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* How It Works */}
      <section
        className="how-section"
        id="how-it-works"
      >

        <div className="section-container">

          <div className="section-heading">

            <span>
              HOW IT WORKS
            </span>

            <h2>
              Simple. Fast. Connected.
            </h2>

            <p>
              Get started with EduConnect in just
              a few simple steps.
            </p>

          </div>

          <div className="steps-grid">

            <div className="step-card">

              <div className="step-number">
                01
              </div>

              <h3>
                Create Account
              </h3>

              <p>
                Register as a student or tutor
                and create your profile.
              </p>

            </div>

            <div className="step-card">

              <div className="step-number">
                02
              </div>

              <h3>
                Find & Connect
              </h3>

              <p>
                Search for tutors or tuition
                opportunities that match your needs.
              </p>

            </div>

            <div className="step-card">

              <div className="step-number">
                03
              </div>

              <h3>
                Apply & Select
              </h3>

              <p>
                Send applications, review profiles,
                and select the right match.
              </p>

            </div>

            <div className="step-card">

              <div className="step-number">
                04
              </div>

              <h3>
                Start Learning
              </h3>

              <p>
                Connect with your selected tutor
                and begin your learning journey.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="cta-section">

        <div className="cta-container">

          <div>

            <span>
              READY TO GET STARTED?
            </span>

            <h2>
              Make Tuition Management Smarter
            </h2>

            <p>
              Join EduConnect and discover a better
              way to connect students and tutors.
            </p>

          </div>

          <Link
            to="/register"
            className="cta-button"
          >
            Create Your Account →
          </Link>

        </div>

      </section>

      {/* Footer */}
      <footer
        className="footer"
        id="about"
      >

        <div className="footer-container">

          <div className="footer-brand">

            <div className="footer-brand-row">

              <div className="brand-icon">
                E
              </div>

              <div className="brand-text">

                <h3>
                  EduConnect
                </h3>

                <span>
                  Tuition Media Management
                </span>

              </div>

            </div>

            <p>
              Connecting students and tutors through
              a smarter tuition management platform.
            </p>

          </div>

          <div className="footer-column">

            <h4>
              Platform
            </h4>

            <Link to="/find-tutor">
              Find Tutor
            </Link>

            <Link to="/find-tuition">
              Find Tuition
            </Link>

            <a href="#features">
              Features
            </a>

            <a href="#how-it-works">
              How It Works
            </a>

          </div>

          <div className="footer-column">

            <h4>
              Account
            </h4>

            <Link to="/login">
              Login
            </Link>

            <Link to="/register">
              Register
            </Link>

          </div>

        </div>

        <div className="footer-bottom">
          © 2026 EduConnect. All rights reserved.
        </div>

      </footer>

    </div>
  )
}

function App() {
  return (
    <Routes>

      <Route
        path="/"
        element={<Home />}
      />

      <Route
        path="/login"
        element={<Login />}
      />

      <Route
        path="/register"
        element={<Register />}
      />

      <Route
        path="/forgot-password"
        element={<ForgotPassword />}
      />

      <Route
        path="/find-tutor"
        element={<FindTutor />}
      />

      <Route
        path="/tutor/:id"
        element={<TutorProfile />}
      />

      <Route
        path="/find-tuition"
        element={<FindTuition />}
      />

      <Route
        path="/tuition/:id"
        element={<TuitionDetails />}
      />

    </Routes>
  )
}

export default App