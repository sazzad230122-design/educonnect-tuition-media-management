
import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Login.css'

function TutorLogin() {
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
      'Tutor Login UI is ready! Backend authentication will be connected next.'
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
            Connect with Students and Grow Your Teaching Career
          </span>
        </Link>

        <section className="login-card">
          <div className="login-header">
            <span className="login-eyebrow">TUTOR PORTAL</span>
            <h2>Tutor Login</h2>
            <p>
              Welcome back! Sign in to manage your tutor profile,
              explore tuition opportunities, and connect with students.
            </p>
          </div>

          <form className="login-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="tutor-email">Email Address</label>
              <input
                id="tutor-email"
                name="email"
                type="email"
                placeholder="Enter your tutor email"
                autoComplete="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <div className="password-label">
                <label htmlFor="tutor-password">Password</label>
                <Link to="/forgot-password">Forgot password?</Link>
              </div>

              <div className="password-wrapper">
                <input
                  id="tutor-password"
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
              <span>Sign In as Tutor</span>
              <span aria-hidden="true">→</span>
            </button>
          </form>

          <div className="login-divider">
            <span>NEW TO EDUCONNECT?</span>
          </div>

          <p className="register-text">
            Create a tutor account to showcase your expertise and
            connect with students.
          </p>

          <Link to="/register" className="register-button">
            Create Tutor Account <span aria-hidden="true">↗</span>
          </Link>

          <div className="login-divider">
            <span>ARE YOU A STUDENT?</span>
          </div>

          <Link to="/student-login" className="register-button">
            Go to Student Login <span aria-hidden="true">→</span>
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

export default TutorLogin
