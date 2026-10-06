import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Register.css'

function Register() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  return (
    <div className="register-page">
      <div className="register-container">

        {/* Brand */}
        <div className="register-brand">
          <div className="register-logo">E</div>

          <h1>EduConnect</h1>

          <p>
            Create your account and get started
          </p>
        </div>

        {/* Register Card */}
        <div className="register-card">

          <div className="register-header">
            <h2>Create Account</h2>

            <p>
              Join students and tutors on EduConnect
            </p>
          </div>

          <form className="register-form">

            {/* Name */}
            <div className="form-row">

              <div className="form-group">
                <label htmlFor="firstName">
                  First Name
                </label>

                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  placeholder="Enter first name"
                  autoComplete="given-name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="lastName">
                  Last Name
                </label>

                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  placeholder="Enter last name"
                  autoComplete="family-name"
                />
              </div>

            </div>

            {/* Email */}
            <div className="form-group">
              <label htmlFor="registerEmail">
                Email Address
              </label>

              <input
                id="registerEmail"
                name="email"
                type="email"
                placeholder="Enter your email"
                autoComplete="email"
              />
            </div>

            {/* Phone */}
            <div className="form-group">
              <label htmlFor="phone">
                Phone Number
              </label>

              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="01XXXXXXXXX"
                autoComplete="tel"
              />
            </div>

            {/* Account Type */}
            <div className="form-group">
              <label htmlFor="role">
                Account Type
              </label>

              <select
                id="role"
                name="role"
                defaultValue=""
              >
                <option value="" disabled>
                  Select account type
                </option>

                <option value="student">
                  Student
                </option>

                <option value="tutor">
                  Tutor
                </option>
              </select>
            </div>

            {/* Password */}
            <div className="form-group">
              <label htmlFor="registerPassword">
                Password
              </label>

              <div className="register-password-wrapper">

                <input
                  id="registerPassword"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Create a password"
                  autoComplete="new-password"
                />

                <button
                  type="button"
                  className="register-password-toggle"
                  onClick={() =>
                    setShowPassword(!showPassword)
                  }
                  aria-label={
                    showPassword
                      ? 'Hide password'
                      : 'Show password'
                  }
                >
                  {showPassword ? '🙈' : '👁️'}
                </button>

              </div>
            </div>

            {/* Confirm Password */}
            <div className="form-group">
              <label htmlFor="confirmPassword">
                Confirm Password
              </label>

              <div className="register-password-wrapper">

                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type={
                    showConfirmPassword
                      ? 'text'
                      : 'password'
                  }
                  placeholder="Confirm your password"
                  autoComplete="new-password"
                />

                <button
                  type="button"
                  className="register-password-toggle"
                  onClick={() =>
                    setShowConfirmPassword(
                      !showConfirmPassword
                    )
                  }
                  aria-label={
                    showConfirmPassword
                      ? 'Hide password'
                      : 'Show password'
                  }
                >
                  {showConfirmPassword ? '🙈' : '👁️'}
                </button>

              </div>
            </div>

            {/* Terms */}
            <label className="terms-checkbox">
              <input
                type="checkbox"
                name="terms"
              />

              <span>
                I agree to the Terms of Service and Privacy Policy
              </span>
            </label>

            {/* Submit */}
            <button
              type="submit"
              className="register-submit"
            >
              Create Account
            </button>

          </form>

          {/* Login Link */}
          <p className="login-text">
            Already have an account?{' '}

            <Link to="/login">
              Sign in
            </Link>
          </p>

        </div>

        {/* Back Home */}
        <Link
          to="/"
          className="register-back-home"
        >
          ← Back to Home
        </Link>

      </div>
    </div>
  )
}

export default Register