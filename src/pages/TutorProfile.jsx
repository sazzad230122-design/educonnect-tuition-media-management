import { Link, useParams } from 'react-router-dom'
import './TutorProfile.css'

const tutors = [
  {
    id: 1,
    name: 'Rahim Ahmed',
    initial: 'R',
    title: 'Physics Tutor',
    rating: '4.9',
    reviews: 48,
    education: 'M.Sc. in Physics',
    university: 'University of Dhaka',
    location: 'Mirpur, Dhaka',
    experience: '5 Years Experience',
    fee: '৳8,000 - ৳12,000',
    subjects: ['Physics', 'Mathematics'],
    classes: ['Class 9', 'Class 10', 'HSC'],
    medium: 'Bangla & English',
    gender: 'Male',
    availability: 'Evening',
    verified: true,
    about:
      'I am an experienced Physics tutor passionate about helping students understand difficult concepts in a simple and practical way. I focus on concept building, regular practice, and exam preparation.',
  },
  {
    id: 2,
    name: 'Tanvir Hasan',
    initial: 'T',
    title: 'Mathematics Tutor',
    rating: '4.8',
    reviews: 36,
    education: 'B.Sc. in Mathematics',
    university: 'University of Rajshahi',
    location: 'Dhanmondi, Dhaka',
    experience: '4 Years Experience',
    fee: '৳7,000 - ৳10,000',
    subjects: ['Mathematics', 'ICT'],
    classes: ['Class 8', 'Class 9', 'Class 10'],
    medium: 'Bangla & English',
    gender: 'Male',
    availability: 'Afternoon & Evening',
    verified: true,
    about:
      'I help students build strong mathematical fundamentals through clear explanations, problem solving, and regular practice sessions.',
  },
  {
    id: 3,
    name: 'Nusrat Jahan',
    initial: 'N',
    title: 'English Tutor',
    rating: '4.9',
    reviews: 42,
    education: 'M.A. in English',
    university: 'Jahangirnagar University',
    location: 'Uttara, Dhaka',
    experience: '6 Years Experience',
    fee: '৳8,000 - ৳11,000',
    subjects: ['English', 'Bangla'],
    classes: ['Class 6', 'Class 7', 'Class 8', 'SSC'],
    medium: 'Bangla & English',
    gender: 'Female',
    availability: 'Morning & Evening',
    verified: true,
    about:
      'I specialize in English grammar, writing, reading, and communication skills. My teaching approach is friendly, structured, and student-focused.',
  },
]

function TutorProfile() {
  const { id } = useParams()

  const tutor = tutors.find((item) => item.id === Number(id))

  if (!tutor) {
    return (
      <div className="tutor-not-found">
        <div className="not-found-icon">?</div>

        <h1>Tutor Not Found</h1>

        <p>
          Sorry, the tutor profile you are looking for does not exist.
        </p>

        <Link to="/find-tutor" className="back-tutors-btn">
          ← Back to Find Tutors
        </Link>
      </div>
    )
  }

  return (
    <div className="tutor-profile-page">

      {/* Navbar */}
      <nav className="profile-navbar">

        <div className="profile-nav-container">

          <Link to="/" className="profile-brand">

            <div className="profile-brand-icon">
              E
            </div>

            <div className="profile-brand-text">
              <h2>EduConnect</h2>
              <span>Tuition Media Management</span>
            </div>

          </Link>

          <div className="profile-nav-links">

            <Link to="/">
              Home
            </Link>

            <Link to="/find-tutor" className="active">
              Find Tutor
            </Link>

            <Link to="/find-tuition">
              Find Tuition
            </Link>

          </div>

          <div className="profile-nav-actions">

            <Link to="/login" className="profile-login-btn">
              Login
            </Link>

            <Link to="/register" className="profile-register-btn">
              Get Started
            </Link>

          </div>

        </div>

      </nav>

      {/* Breadcrumb */}
      <div className="profile-breadcrumb">

        <div className="profile-container">

          <Link to="/">
            Home
          </Link>

          <span>›</span>

          <Link to="/find-tutor">
            Find Tutor
          </Link>

          <span>›</span>

          <strong>
            {tutor.name}
          </strong>

        </div>

      </div>

      {/* Main Content */}
      <main className="profile-main">

        <div className="profile-container">

          <Link
            to="/find-tutor"
            className="profile-back-link"
          >
            ← Back to Tutors
          </Link>

          <div className="profile-layout">

            {/* Left Content */}
            <div className="profile-content">

              <section className="profile-card">

                <div className="profile-header">

                  <div className="profile-avatar-large">
                    {tutor.initial}
                  </div>

                  <div className="profile-header-info">

                    <div className="profile-name-row">

                      <h1>
                        {tutor.name}
                      </h1>

                      {tutor.verified && (
                        <span className="verified-badge">
                          ✓ Verified
                        </span>
                      )}

                    </div>

                    <p className="profile-title">
                      {tutor.title}
                    </p>

                    <div className="profile-rating">

                      <span className="star">
                        ★
                      </span>

                      <strong>
                        {tutor.rating}
                      </strong>

                      <span>
                        ({tutor.reviews} reviews)
                      </span>

                    </div>

                    <div className="profile-location">
                      📍 {tutor.location}
                    </div>

                  </div>

                  <button
                    className="profile-favorite"
                    type="button"
                    onClick={() => alert(`${tutor.name} added to favorites!`)}
                  >
                    ♡
                  </button>

                </div>

                <div className="profile-stats">

                  <div className="profile-stat">

                    <span className="stat-icon">
                      🎓
                    </span>

                    <div>
                      <small>Education</small>
                      <strong>{tutor.education}</strong>
                    </div>

                  </div>

                  <div className="profile-stat">

                    <span className="stat-icon">
                      💼
                    </span>

                    <div>
                      <small>Experience</small>
                      <strong>{tutor.experience}</strong>
                    </div>

                  </div>

                  <div className="profile-stat">

                    <span className="stat-icon">
                      🕐
                    </span>

                    <div>
                      <small>Availability</small>
                      <strong>{tutor.availability}</strong>
                    </div>

                  </div>

                </div>

              </section>

              {/* About */}
              <section className="profile-section-card">

                <div className="profile-section-heading">
                  <span>01</span>
                  <h2>About This Tutor</h2>
                </div>

                <p className="about-text">
                  {tutor.about}
                </p>

              </section>

              {/* Teaching Information */}
              <section className="profile-section-card">

                <div className="profile-section-heading">
                  <span>02</span>
                  <h2>Teaching Information</h2>
                </div>

                <div className="teaching-grid">

                  <div className="teaching-item">

                    <small>Subjects</small>

                    <div className="tag-list">

                      {tutor.subjects.map((subject) => (
                        <span key={subject}>
                          {subject}
                        </span>
                      ))}

                    </div>

                  </div>

                  <div className="teaching-item">

                    <small>Classes</small>

                    <div className="tag-list">

                      {tutor.classes.map((className) => (
                        <span key={className}>
                          {className}
                        </span>
                      ))}

                    </div>

                  </div>

                  <div className="teaching-item">

                    <small>Teaching Medium</small>

                    <strong>
                      {tutor.medium}
                    </strong>

                  </div>

                  <div className="teaching-item">

                    <small>Gender</small>

                    <strong>
                      {tutor.gender}
                    </strong>

                  </div>

                </div>

              </section>

              {/* Education */}
              <section className="profile-section-card">

                <div className="profile-section-heading">
                  <span>03</span>
                  <h2>Education</h2>
                </div>

                <div className="education-box">

                  <div className="education-icon">
                    🎓
                  </div>

                  <div>

                    <h3>
                      {tutor.education}
                    </h3>

                    <p>
                      {tutor.university}
                    </p>

                  </div>

                </div>

              </section>

              {/* Reviews */}
              <section className="profile-section-card">

                <div className="profile-section-heading">
                  <span>04</span>
                  <h2>Reviews & Ratings</h2>
                </div>

                <div className="review-summary">

                  <div className="review-score">
                    <strong>
                      {tutor.rating}
                    </strong>

                    <div>
                      ★★★★★
                    </div>

                    <span>
                      Based on {tutor.reviews} reviews
                    </span>
                  </div>

                  <div className="review-message">
                    <strong>
                      Excellent Tutor
                    </strong>

                    <p>
                      Students appreciate clear explanations,
                      regular practice, and friendly communication.
                    </p>
                  </div>

                </div>

              </section>

            </div>

            {/* Right Sidebar */}
            <aside className="profile-sidebar">

              <div className="hire-card">

                <span className="hire-label">
                  EXPECTED MONTHLY FEE
                </span>

                <div className="hire-fee">
                  {tutor.fee}
                </div>

                <p className="fee-note">
                  Fee may vary depending on class,
                  subject, and schedule.
                </p>

                <Link
                  to="/register"
                  className="contact-tutor-btn"
                >
                  Contact Tutor →
                </Link>

                <Link
                  to="/register"
                  className="apply-tuition-link"
                >
                  Create account to connect
                </Link>

              </div>

              <div className="trust-card">

                <div className="trust-icon">
                  ✓
                </div>

                <div>
                  <h3>Verified Profile</h3>

                  <p>
                    This tutor profile has been verified
                    by EduConnect.
                  </p>
                </div>

              </div>

              <div className="safety-card">

                <h3>
                  🛡️ Safety Tips
                </h3>

                <ul>

                  <li>
                    Verify tutor information before hiring.
                  </li>

                  <li>
                    Discuss fees and schedule clearly.
                  </li>

                  <li>
                    Use EduConnect for communication.
                  </li>

                </ul>

              </div>

            </aside>

          </div>

        </div>

      </main>

      {/* Footer */}
      <footer className="profile-footer">

        <div className="profile-footer-container">

          <div className="profile-footer-brand">

            <div className="profile-footer-brand-row">

              <div className="profile-brand-icon">
                E
              </div>

              <div className="profile-brand-text">

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

          <div className="profile-footer-column">

            <h4>Platform</h4>

            <Link to="/find-tutor">
              Find Tutor
            </Link>

            <Link to="/find-tuition">
              Find Tuition
            </Link>

          </div>

          <div className="profile-footer-column">

            <h4>Account</h4>

            <Link to="/login">
              Login
            </Link>

            <Link to="/register">
              Register
            </Link>

          </div>

        </div>

        <div className="profile-footer-bottom">
          © 2026 EduConnect. All rights reserved.
        </div>

      </footer>

    </div>
  )
}
export default TutorProfile