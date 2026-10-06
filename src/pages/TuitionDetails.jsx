import { Link, useParams } from 'react-router-dom'
import './TuitionDetails.css'

const tuitions = [
  {
    id: 1,
    title: 'Physics Tutor Needed for Class 10',
    className: 'Class 10',
    subject: 'Physics',
    location: 'Mirpur, Dhaka',
    salary: '৳8,000 - ৳10,000',
    days: '4 Days / Week',
    time: 'Evening',
    students: 1,
    posted: '2 hours ago',
    urgent: true,
    gender: 'Any',
    medium: 'English Version',
    description:
      'A dedicated Physics tutor is required for a Class 10 student. The tutor should be experienced in SSC Physics and able to explain concepts clearly.',
  },
  {
    id: 2,
    title: 'Mathematics Tutor for SSC Student',
    className: 'Class 10',
    subject: 'Mathematics',
    location: 'Dhanmondi, Dhaka',
    salary: '৳7,000 - ৳9,000',
    days: '4 Days / Week',
    time: 'Afternoon',
    students: 1,
    posted: '5 hours ago',
    urgent: false,
    gender: 'Any',
    medium: 'Bangla Version',
    description:
      'Looking for an experienced Mathematics tutor for an SSC student. The tutor should have strong knowledge of SSC Mathematics.',
  },
  {
    id: 3,
    title: 'English & Bangla Tutor Required',
    className: 'Class 8',
    subject: 'English',
    location: 'Uttara, Dhaka',
    salary: '৳6,000 - ৳8,000',
    days: '3 Days / Week',
    time: 'Evening',
    students: 1,
    posted: '1 day ago',
    urgent: false,
    gender: 'Any',
    medium: 'Bangla Version',
    description:
      'An English and Bangla tutor is required for a Class 8 student. Good communication skills and teaching experience are preferred.',
  },
  {
    id: 4,
    title: 'Biology Tutor Needed for HSC',
    className: 'HSC',
    subject: 'Biology',
    location: 'Bashundhara, Dhaka',
    salary: '৳10,000 - ৳13,000',
    days: '4 Days / Week',
    time: 'Morning',
    students: 1,
    posted: '1 day ago',
    urgent: true,
    gender: 'Any',
    medium: 'English Version',
    description:
      'An experienced Biology tutor is needed for an HSC student. The tutor should have good knowledge of HSC Biology and admission preparation.',
  },
  {
    id: 5,
    title: 'Chemistry Tutor for HSC Student',
    className: 'HSC',
    subject: 'Chemistry',
    location: 'Mohammadpur, Dhaka',
    salary: '৳8,000 - ৳11,000',
    days: '3 Days / Week',
    time: 'Evening',
    students: 1,
    posted: '2 days ago',
    urgent: false,
    gender: 'Any',
    medium: 'English Version',
    description:
      'Looking for a skilled Chemistry tutor for HSC level. The tutor should be able to teach both theoretical and practical concepts.',
  },
  {
    id: 6,
    title: 'ICT Tutor Required',
    className: 'Class 9',
    subject: 'ICT',
    location: 'Banani, Dhaka',
    salary: '৳7,000 - ৳10,000',
    days: '3 Days / Week',
    time: 'Afternoon',
    students: 1,
    posted: '2 days ago',
    urgent: false,
    gender: 'Any',
    medium: 'Bangla Version',
    description:
      'An ICT tutor is required for a Class 9 student. Basic programming and ICT concepts should be explained clearly.',
  },
  {
    id: 7,
    title: 'Mathematics Tutor for Class 9',
    className: 'Class 9',
    subject: 'Mathematics',
    location: 'Pallabi, Dhaka',
    salary: '৳6,000 - ৳8,000',
    days: '4 Days / Week',
    time: 'Evening',
    students: 1,
    posted: '3 days ago',
    urgent: false,
    gender: 'Any',
    medium: 'Bangla Version',
    description:
      'A Mathematics tutor is required for a Class 9 student. The tutor should be patient and experienced in school-level Mathematics.',
  },
  {
    id: 8,
    title: 'Bangla Tutor Needed',
    className: 'Class 7',
    subject: 'Bangla',
    location: 'Gulshan, Dhaka',
    salary: '৳6,000 - ৳9,000',
    days: '3 Days / Week',
    time: 'Morning',
    students: 1,
    posted: '3 days ago',
    urgent: false,
    gender: 'Any',
    medium: 'Bangla Version',
    description:
      'A Bangla tutor is required for a Class 7 student. The tutor should have good knowledge of Bangla grammar and literature.',
  },
  {
    id: 9,
    title: 'Computer Science Tutor',
    className: 'University',
    subject: 'Computer Science',
    location: 'Khilgaon, Dhaka',
    salary: '৳10,000 - ৳15,000',
    days: '3 Days / Week',
    time: 'Evening',
    students: 1,
    posted: '4 days ago',
    urgent: false,
    gender: 'Any',
    medium: 'English Version',
    description:
      'A Computer Science tutor is required for a university student. Strong programming and computer science fundamentals are preferred.',
  },
]

function TuitionDetails() {
  const { id } = useParams()

  const tuition = tuitions.find(
    (item) => item.id === Number(id)
  )

  if (!tuition) {
    return (
      <div className="tuition-details-page">

        <div className="details-not-found">

          <div className="not-found-icon">
            🔎
          </div>

          <h2>
            Tuition Not Found
          </h2>

          <p>
            The tuition opportunity you are looking for
            does not exist.
          </p>

          <Link
            to="/find-tuition"
            className="back-tuition-btn"
          >
            ← Back to Find Tuition
          </Link>

        </div>

      </div>
    )
  }

  const handleApply = () => {
    alert(
      `Application for "${tuition.title}" will open here.`
    )
  }

  return (
    <div className="tuition-details-page">

      {/* Navbar */}
      <nav className="details-navbar">

        <div className="details-nav-container">

          <Link
            to="/"
            className="details-brand"
          >

            <div className="details-brand-icon">
              E
            </div>

            <div>
              <h2>
                EduConnect
              </h2>

              <span>
                Tuition Media Management
              </span>
            </div>

          </Link>

          <div className="details-nav-links">

            <Link to="/">
              Home
            </Link>

            <Link to="/find-tutor">
              Find Tutor
            </Link>

            <Link
              to="/find-tuition"
              className="active"
            >
              Find Tuition
            </Link>

          </div>

          <div className="details-nav-actions">

            <Link
              to="/login"
              className="details-login"
            >
              Login
            </Link>

            <Link
              to="/register"
              className="details-register"
            >
              Get Started
            </Link>

          </div>

        </div>

      </nav>

      {/* Breadcrumb */}
      <section className="details-breadcrumb-section">

        <div className="details-container">

          <div className="details-breadcrumb">

            <Link to="/">
              Home
            </Link>

            <span>›</span>

            <Link to="/find-tuition">
              Find Tuition
            </Link>

            <span>›</span>

            <span>
              Details
            </span>

          </div>

        </div>

      </section>

      {/* Main */}
      <main className="details-main">

        <div className="details-container">

          {/* Back */}
          <Link
            to="/find-tuition"
            className="details-back-link"
          >
            ← Back to Tuition Listings
          </Link>

          <div className="details-layout">

            {/* Left */}
            <div className="details-left">

              <div className="details-card">

                <div className="details-card-top">

                  <div>

                    {tuition.urgent && (
                      <span className="details-urgent">
                        URGENT
                      </span>
                    )}

                    <span className="details-label">
                      TUITION OPPORTUNITY
                    </span>

                    <h1>
                      {tuition.title}
                    </h1>

                    <div className="details-posted">
                      Posted {tuition.posted}
                    </div>

                  </div>

                  <button
                    type="button"
                    className="details-favorite"
                    onClick={() =>
                      alert('Added to favorites')
                    }
                  >
                    ♡
                  </button>

                </div>

                <div className="details-tags">

                  <span>
                    📚 {tuition.subject}
                  </span>

                  <span>
                    🎓 {tuition.className}
                  </span>

                  <span>
                    📍 {tuition.location}
                  </span>

                </div>

                {/* Description */}
                <div className="details-section">

                  <h2>
                    About This Tuition
                  </h2>

                  <p>
                    {tuition.description}
                  </p>

                </div>

                {/* Information */}
                <div className="details-section">

                  <h2>
                    Tuition Information
                  </h2>

                  <div className="information-grid">

                    <div className="information-item">
                      <span className="information-icon">
                        📍
                      </span>

                      <div>
                        <small>
                          Location
                        </small>

                        <strong>
                          {tuition.location}
                        </strong>
                      </div>
                    </div>

                    <div className="information-item">
                      <span className="information-icon">
                        🎓
                      </span>

                      <div>
                        <small>
                          Class
                        </small>

                        <strong>
                          {tuition.className}
                        </strong>
                      </div>
                    </div>

                    <div className="information-item">
                      <span className="information-icon">
                        📚
                      </span>

                      <div>
                        <small>
                          Subject
                        </small>

                        <strong>
                          {tuition.subject}
                        </strong>
                      </div>
                    </div>

                    <div className="information-item">
                      <span className="information-icon">
                        📅
                      </span>

                      <div>
                        <small>
                          Schedule
                        </small>

                        <strong>
                          {tuition.days}
                        </strong>
                      </div>
                    </div>

                    <div className="information-item">
                      <span className="information-icon">
                        🕒
                      </span>

                      <div>
                        <small>
                          Preferred Time
                        </small>

                        <strong>
                          {tuition.time}
                        </strong>
                      </div>
                    </div>

                    <div className="information-item">
                      <span className="information-icon">
                        👥
                      </span>

                      <div>
                        <small>
                          Students
                        </small>

                        <strong>
                          {tuition.students}
                        </strong>
                      </div>
                    </div>

                  </div>

                </div>

                {/* Requirements */}
                <div className="details-section">

                  <h2>
                    Requirements
                  </h2>

                  <div className="requirements-list">

                    <div>
                      <span>✓</span>
                      {tuition.gender} gender tutor accepted
                    </div>

                    <div>
                      <span>✓</span>
                      {tuition.medium} preferred
                    </div>

                    <div>
                      <span>✓</span>
                      Good communication and teaching skills
                    </div>

                    <div>
                      <span>✓</span>
                      Regular attendance is expected
                    </div>

                  </div>

                </div>

              </div>

            </div>

            {/* Right */}
            <aside className="details-right">

              <div className="apply-card">

                <span className="apply-label">
                  MONTHLY FEE
                </span>

                <h2>
                  {tuition.salary}
                </h2>

                <p>
                  Negotiable based on experience
                </p>

                <button
                  type="button"
                  className="apply-button"
                  onClick={handleApply}
                >
                  Apply for This Tuition →
                </button>

                <div className="apply-note">
                  ✓ Free to apply
                  <br />
                  ✓ Application will be reviewed
                  <br />
                  ✓ Connect after approval
                </div>

              </div>

              <div className="safety-card">

                <div className="safety-icon">
                  🛡️
                </div>

                <div>
                  <h3>
                    Stay Safe
                  </h3>

                  <p>
                    Never share sensitive personal
                    information before verifying
                    the tuition details.
                  </p>
                </div>

              </div>

            </aside>

          </div>

        </div>

      </main>

      {/* Footer */}
      <footer className="details-footer">

        <div className="details-footer-container">

          <div>

            <div className="details-footer-brand">

              <div className="details-brand-icon">
                E
              </div>

              <div>
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

          <div className="details-footer-column">

            <h4>
              Platform
            </h4>

            <Link to="/">
              Home
            </Link>

            <Link to="/find-tutor">
              Find Tutor
            </Link>

            <Link to="/find-tuition">
              Find Tuition
            </Link>

          </div>

          <div className="details-footer-column">

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

        <div className="details-footer-bottom">
          © 2026 EduConnect. All rights reserved.
        </div>

      </footer>

    </div>
  )
}

export default TuitionDetails