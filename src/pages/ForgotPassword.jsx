import { useState } from 'react'
import { Link } from 'react-router-dom'
import './ForgotPassword.css'

function ForgotPassword() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()

    if (!email.trim()) {
      return
    }

    setSubmitted(true)
  }

  return (
    <main className="forgot-page">
      <div className="forgot-container">

        {/* Brand */}
        <Link to="/" className="forgot-brand">
          <div className="forgot-logo">E</div>

          <h1>EduConnect</h1>

          <p>Tuition Media Management</p>

          <span>
            Connecting Students with the Right Tutors
          </span>
        </Link>

        {/* Card */}
        <section className="forgot-card">

          <div className="forgot-icon">
            🔐
          </div>

          <div className="forgot-header">
            <span className="forgot-eyebrow">
              ACCOUNT RECOVERY
            </span>

            <h2>Forgot your password?</h2>

            <p>
              No worries. Enter your email address and
              we'll help you get back into your account.
            </p>
          </div>

          {!submitted ? (
            <form
              className="forgot-form"
              onSubmit={handleSubmit}
            >
              <div className="form-group">
                <label htmlFor="forgotEmail">
                  Email Address
                </label>

                <input
                  id="forgotEmail"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  autoComplete="email"
                  value={email}
                  onChange={(event) =>
                    setEmail(event.target.value)
                  }
                  required
                />
              </div>

              <button
                type="submit"
                className="forgot-submit"
              >
                <span>Send Reset Link</span>
                <span aria-hidden="true">→</span>
              </button>
            </form>
          ) : (
            <div className="success-message">
              <div className="success-icon">
                ✓
              </div>

              <h3>Check your inbox</h3>

              <p>
                If an account exists for
                <strong> {email}</strong>, you'll
                receive password reset instructions.
              </p>

              <button
                type="button"
                className="try-again-button"
                onClick={() => setSubmitted(false)}
              >
                Try another email
              </button>
            </div>
          )}

          {/* Back Login */}
          <div className="forgot-footer">
            <Link to="/login">
              <span aria-hidden="true">←</span>
              Back to Login
            </Link>
          </div>

        </section>

        {/* Back Home */}
        <Link
          to="/"
          className="forgot-back-home"
        >
          <span aria-hidden="true">←</span>
          Back to Home
        </Link>

        <p className="forgot-copyright">
          © 2026 EduConnect · Tuition Media Management
        </p>

      </div>
    </main>
  )
}

export default ForgotPassword