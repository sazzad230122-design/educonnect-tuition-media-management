
import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Login.css'

function StudentLogin() {
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()

    if (!email.trim() || !password) {
      alert('Please enter your email and password.')
      return
    }

    alert(
      'Student Login UI is ready! Backend authentication will be connected next.'
    )
  }

  return (
    <main className="login-page">
      <div className="login-container">
        <Link to="/" className="login-brand">
          <div className="brand-logo">E</div>
          <h1>EduConnect</h1>
          <p>Tuition Media Management</p>
          <span className="brand-tagline">
            Find the Right Tutor for Your Learning Journey
          </span>
        </Link>

        <section className="login-card">
          <div className="login-header">
            <span className="login-eyebrow">STUDENT PORTAL</span>
            <h2>Student Login</h2>
            <p>
              Welcome back! Sign in to find tutors, explore tuition
              opportunities, and manage your learning journey.
            </p>
          </div>

          <form className="login-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="student-email">Email Address</label>
              <input
                id="student-email"
                name="email"
                type="email"
                placeholder="Enter your student email"
                autoComplete="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <div className="password-label">
                <label htmlFor="student-password">Password</label>
                <Link to="/forgot-password">Forgot password?</Link>
              </div>

              <div className="password-wrapper">
                <input
                  id="student-password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Enter your password"
                  autoComplete="current-password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  required
                />

                <button
                  type="button"
                  className="password-toggle"
                  onClick={() => setShowPassword((previous) => !previous)}
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? '🙈' : '👁'}
                </button>
              </div>
            </div>

            <button type="submit" className="login-button">
              <span>Sign In as Student</span>
              <span aria-hidden="true">→</span>
            </button>
          </form>

          <div className="login-divider">
            <span>NEW TO EDUCONNECT?</span>
          </div>

          <p className="register-text">
            Create a student account to connect with the right tutor.
          </p>

          <Link to="/register" className="register-button">
            Create Student Account <span aria-hidden="true">↗</span>
          </Link>

          <div className="login-divider">
            <span>ARE YOU A TUTOR?</span>
          </div>

          <Link to="/tutor-login" className="register-button">
            Go to Tutor Login <span aria-hidden="true">→</span>
          </Link>
        </section>

        <Link to="/" className="back-home">
          <span aria-hidden="true">←</span> Back to Home
        </Link>

        <p className="login-footer">
          © 2026 EduConnect · Tuition Media Management
        </p>
      </div>
    </main>
  )
}

export default StudentLogin
