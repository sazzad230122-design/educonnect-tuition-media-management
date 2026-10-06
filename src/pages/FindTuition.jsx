import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import './FindTuition.css'

const tuitionPosts = [
  {
    id: 1,
    title: 'Mathematics Tutor Needed',
    subject: 'Mathematics',
    classLevel: 'Class 9',
    student: 'Female Student',
    location: 'Dhanmondi, Dhaka',
    area: 'Dhanmondi',
    salary: '৳5,000 - ৳6,000',
    days: '3 Days / Week',
    time: 'Evening',
    mode: 'Offline',
    posted: '2 hours ago',
    applicants: 8,
    verified: true,
    description:
      'Looking for an experienced Mathematics tutor for Class 9 student. Candidate should have strong academic background and good communication skills.',
  },
  {
    id: 2,
    title: 'English Tutor Required',
    subject: 'English',
    classLevel: 'Class 8',
    student: 'Male Student',
    location: 'Uttara, Dhaka',
    area: 'Uttara',
    salary: '৳4,500 - ৳5,500',
    days: '4 Days / Week',
    time: 'Afternoon',
    mode: 'Offline',
    posted: '5 hours ago',
    applicants: 12,
    verified: true,
    description:
      'Need a friendly English tutor who can improve grammar, writing, vocabulary and overall communication skills.',
  },
  {
    id: 3,
    title: 'Physics Tutor for HSC',
    subject: 'Physics',
    classLevel: 'HSC',
    student: 'Male Student',
    location: 'Mirpur, Dhaka',
    area: 'Mirpur',
    salary: '৳7,000 - ৳9,000',
    days: '3 Days / Week',
    time: 'Evening',
    mode: 'Offline',
    posted: '1 day ago',
    applicants: 6,
    verified: true,
    description:
      'Experienced Physics tutor required for HSC preparation with focus on board examination and conceptual understanding.',
  },
  {
    id: 4,
    title: 'ICT Tutor Needed',
    subject: 'ICT',
    classLevel: 'HSC',
    student: 'Female Student',
    location: 'Banani, Dhaka',
    area: 'Banani',
    salary: '৳5,000 - ৳6,500',
    days: '2 Days / Week',
    time: 'Morning',
    mode: 'Online',
    posted: '1 day ago',
    applicants: 5,
    verified: true,
    description:
      'Looking for an ICT tutor for HSC level. Online classes are preferred with practical programming guidance.',
  },
  {
    id: 5,
    title: 'Chemistry Tutor Required',
    subject: 'Chemistry',
    classLevel: 'SSC',
    student: 'Female Student',
    location: 'Mohammadpur, Dhaka',
    area: 'Mohammadpur',
    salary: '৳4,500 - ৳5,500',
    days: '3 Days / Week',
    time: 'Evening',
    mode: 'Offline',
    posted: '2 days ago',
    applicants: 9,
    verified: true,
    description:
      'Need a Chemistry tutor for SSC student. Tutor should be experienced in board exam preparation and problem solving.',
  },
  {
    id: 6,
    title: 'Biology Tutor for Class 10',
    subject: 'Biology',
    classLevel: 'Class 10',
    student: 'Male Student',
    location: 'Badda, Dhaka',
    area: 'Badda',
    salary: '৳4,000 - ৳5,000',
    days: '3 Days / Week',
    time: 'Afternoon',
    mode: 'Offline',
    posted: '2 days ago',
    applicants: 7,
    verified: true,
    description:
      'Looking for a dedicated Biology tutor who can provide clear explanations, notes and regular assessments.',
  },
  {
    id: 7,
    title: 'Higher Math Tutor Needed',
    subject: 'Higher Math',
    classLevel: 'HSC',
    student: 'Male Student',
    location: 'Farmgate, Dhaka',
    area: 'Farmgate',
    salary: '৳6,000 - ৳8,000',
    days: '3 Days / Week',
    time: 'Evening',
    mode: 'Offline',
    posted: '3 days ago',
    applicants: 11,
    verified: true,
    description:
      'Experienced Higher Math tutor required for HSC student with strong focus on admission preparation.',
  },
  {
    id: 8,
    title: 'Bangla Tutor Required',
    subject: 'Bangla',
    classLevel: 'Class 8',
    student: 'Female Student',
    location: 'Uttara, Dhaka',
    area: 'Uttara',
    salary: '৳3,500 - ৳4,500',
    days: '3 Days / Week',
    time: 'Morning',
    mode: 'Online',
    posted: '3 days ago',
    applicants: 4,
    verified: true,
    description:
      'Looking for an experienced Bangla tutor for literature, grammar and creative writing.',
  },
]

const subjects = [
  'All Subjects',
  'Mathematics',
  'English',
  'Physics',
  'ICT',
  'Chemistry',
  'Biology',
  'Higher Math',
  'Bangla',
]

const locations = [
  'All Locations',
  'Dhanmondi',
  'Uttara',
  'Mirpur',
  'Mohammadpur',
  'Banani',
  'Badda',
  'Farmgate',
]

const modes = [
  'Any Mode',
  'Online',
  'Offline',
]

const salaryOptions = [
  'Any Salary',
  'Under ৳5,000',
  '৳5,000 - ৳7,000',
  '৳7,000+',
]

const sortOptions = [
  'Recommended',
  'Newest First',
  'Highest Salary',
  'Most Applicants',
]

function FindTuition() {
  const [search, setSearch] = useState('')
  const [subject, setSubject] = useState('All Subjects')
  const [location, setLocation] = useState('All Locations')
  const [mode, setMode] = useState('Any Mode')
  const [salary, setSalary] = useState('Any Salary')
  const [sortBy, setSortBy] = useState('Recommended')

  const [showFilters, setShowFilters] = useState(true)
  const [favorites, setFavorites] = useState([])
  const [selectedTuition, setSelectedTuition] = useState(null)
  const [appliedTuition, setAppliedTuition] = useState(null)
  const [currentPage, setCurrentPage] = useState(1)

  const postsPerPage = 6

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }, [currentPage])

  useEffect(() => {
    setCurrentPage(1)
  }, [
    search,
    subject,
    location,
    mode,
    salary,
    sortBy,
  ])

  const toggleFavorite = (id) => {
    setFavorites((previous) =>
      previous.includes(id)
        ? previous.filter((item) => item !== id)
        : [...previous, id],
    )
  }

  const clearFilters = () => {
    setSearch('')
    setSubject('All Subjects')
    setLocation('All Locations')
    setMode('Any Mode')
    setSalary('Any Salary')
    setSortBy('Recommended')
    setCurrentPage(1)
  }

  const hasActiveFilters =
    search.trim() !== '' ||
    subject !== 'All Subjects' ||
    location !== 'All Locations' ||
    mode !== 'Any Mode' ||
    salary !== 'Any Salary'

  const filteredTuitions = useMemo(() => {
    let result = tuitionPosts.filter((tuition) => {
      const searchValue = search.toLowerCase().trim()

      const matchesSearch =
        !searchValue ||
        tuition.title.toLowerCase().includes(searchValue) ||
        tuition.subject.toLowerCase().includes(searchValue) ||
        tuition.classLevel.toLowerCase().includes(searchValue) ||
        tuition.area.toLowerCase().includes(searchValue) ||
        tuition.location.toLowerCase().includes(searchValue)

      const matchesSubject =
        subject === 'All Subjects' ||
        tuition.subject === subject

      const matchesLocation =
        location === 'All Locations' ||
        tuition.area === location

      const matchesMode =
        mode === 'Any Mode' ||
        tuition.mode === mode

      let matchesSalary = true

      if (salary === 'Under ৳5,000') {
        matchesSalary = tuition.salary.includes('3,') ||
          tuition.salary.includes('4,')
      }

      if (salary === '৳5,000 - ৳7,000') {
        matchesSalary =
          tuition.salary.includes('5,') ||
          tuition.salary.includes('6,')
      }

      if (salary === '৳7,000+') {
        matchesSalary =
          tuition.salary.includes('7,') ||
          tuition.salary.includes('8,') ||
          tuition.salary.includes('9,')
      }

      return (
        matchesSearch &&
        matchesSubject &&
        matchesLocation &&
        matchesMode &&
        matchesSalary
      )
    })

    result = [...result].sort((a, b) => {
      if (sortBy === 'Newest First') {
        return a.id - b.id
      }

      if (sortBy === 'Most Applicants') {
        return b.applicants - a.applicants
      }

      if (sortBy === 'Highest Salary') {
        const aSalary = Number(
          a.salary.match(/\d[\d,]*/)?.[0].replace(/,/g, '') || 0,
        )

        const bSalary = Number(
          b.salary.match(/\d[\d,]*/)?.[0].replace(/,/g, '') || 0,
        )

        return bSalary - aSalary
      }

      return b.id - a.id
    })

    return result
  }, [
    search,
    subject,
    location,
    mode,
    salary,
    sortBy,
  ])

  const totalPages = Math.max(
    1,
    Math.ceil(filteredTuitions.length / postsPerPage),
  )

  const currentTuitions = filteredTuitions.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage,
  )

  return (
    <main className="find-tuition-page">

      {/* ================= NAVBAR ================= */}

      <nav className="tuition-navbar">
        <div className="tuition-nav-container">

          <Link to="/" className="tuition-brand">
            <div className="tuition-brand-logo">
              E
            </div>

            <div className="tuition-brand-text">
              <strong>EduConnect</strong>
              <span>Tuition Media Management</span>
            </div>
          </Link>

          <div className="tuition-nav-links">
            <Link to="/">Home</Link>

            <Link to="/find-tutor">
              Find Tutor
            </Link>

            <Link
              to="/find-tuition"
              className="active"
            >
              Find Tuition
            </Link>

            <a href="/#features">
              Features
            </a>

            <a href="/#how-it-works">
              How It Works
            </a>
          </div>

          <div className="tuition-nav-actions">
            <Link
              to="/login"
              className="tuition-login-btn"
            >
              Login
            </Link>

            <Link
              to="/register"
              className="tuition-register-btn"
            >
              Get Started
              <span>→</span>
            </Link>
          </div>

        </div>
      </nav>

      {/* ================= HERO ================= */}

      <section className="tuition-hero">

        <div className="tuition-hero-glow tuition-glow-one"></div>
        <div className="tuition-hero-glow tuition-glow-two"></div>

        <div className="tuition-hero-content">

          <div className="tuition-hero-badge">
            <span className="hero-badge-dot"></span>
            <span>EXPLORE TUITION OPPORTUNITIES</span>
          </div>

          <h1>
            Find Your Next
            <span> Tuition Opportunity</span>
          </h1>

          <p>
            Discover verified tuition jobs that match your
            subject expertise, preferred location,
            teaching mode and schedule.
          </p>

          <div className="tuition-mini-stats">

            <div>
              <strong>500+</strong>
              <span>Active Tuitions</span>
            </div>

            <div className="tuition-mini-divider"></div>

            <div>
              <strong>50+</strong>
              <span>Subjects</span>
            </div>

            <div className="tuition-mini-divider"></div>

            <div>
              <strong>4.8/5</strong>
              <span>Platform Rating</span>
            </div>

          </div>

        </div>

      </section>

      {/* ================= SEARCH ================= */}

      <section className="tuition-search-section">

        <div className="tuition-search-card">

          <div className="search-card-top">

            <div>
              <span className="search-eyebrow">
                SMART TUITION SEARCH
              </span>

              <h2>
                Find the right opportunity
              </h2>

              <p>
                Search tuition posts using smart filters
                and find your perfect match.
              </p>
            </div>

            <button
              type="button"
              className={`filter-toggle-btn ${
                showFilters ? 'filter-open' : ''
              }`}
              onClick={() =>
                setShowFilters((previous) => !previous)
              }
            >
              <span>☷</span>
              <span>
                {showFilters
                  ? 'Hide Filters'
                  : 'Show Filters'}
              </span>
              <span>
                {showFilters ? '↑' : '↓'}
              </span>
            </button>

          </div>

          <div className="main-search-row">

            <div className="main-search-box">
              <span className="search-icon">
                ⌕
              </span>

              <input
                type="text"
                value={search}
                onChange={(event) =>
                  setSearch(event.target.value)
                }
                placeholder="Search tuition, subject, location..."
              />

              {search && (
                <button
                  type="button"
                  className="search-clear-btn"
                  onClick={() => setSearch('')}
                >
                  ×
                </button>
              )}
            </div>

            <div className="search-select-box">

              <span>◈</span>

              <select
                value={subject}
                onChange={(event) =>
                  setSubject(event.target.value)
                }
              >
                {subjects.map((item) => (
                  <option
                    key={item}
                    value={item}
                  >
                    {item}
                  </option>
                ))}
              </select>

              <span>⌄</span>

            </div>

            <div className="search-select-box">

              <span>⌖</span>

              <select
                value={location}
                onChange={(event) =>
                  setLocation(event.target.value)
                }
              >
                {locations.map((item) => (
                  <option
                    key={item}
                    value={item}
                  >
                    {item}
                  </option>
                ))}
              </select>

              <span>⌄</span>

            </div>

          </div>

          {showFilters && (
            <div className="advanced-filter-row">

              <div className="advanced-filter-box">

                <div className="advanced-filter-label">
                  <span>◉</span>

                  <div>
                    <strong>Teaching Mode</strong>
                    <small>
                      Online or offline
                    </small>
                  </div>
                </div>

                <div className="advanced-select-wrapper">

                  <select
                    value={mode}
                    onChange={(event) =>
                      setMode(event.target.value)
                    }
                  >
                    {modes.map((item) => (
                      <option
                        key={item}
                        value={item}
                      >
                        {item}
                      </option>
                    ))}
                  </select>

                  <span>⌄</span>

                </div>

              </div>

              <div className="advanced-filter-box">

                <div className="advanced-filter-label">
                  <span>৳</span>

                  <div>
                    <strong>Salary Range</strong>
                    <small>
                      Expected monthly salary
                    </small>
                  </div>
                </div>

                <div className="advanced-select-wrapper">

                  <select
                    value={salary}
                    onChange={(event) =>
                      setSalary(event.target.value)
                    }
                  >
                    {salaryOptions.map((item) => (
                      <option
                        key={item}
                        value={item}
                      >
                        {item}
                      </option>
                    ))}
                  </select>

                  <span>⌄</span>

                </div>

              </div>

              <button
                type="button"
                className={`clear-filter-btn ${
                  hasActiveFilters
                    ? 'has-filter'
                    : ''
                }`}
                onClick={clearFilters}
              >
                <span>↻</span>

                <div>
                  <strong>Reset</strong>
                  <small>Clear all</small>
                </div>
              </button>

            </div>
          )}

        </div>

      </section>

      {/* ================= RESULTS ================= */}

      <section className="tuition-main">

        <div className="tuition-results-top">

          <div className="results-heading">

            <div className="results-icon">
              ✦
            </div>

            <div>
              <span>
                AVAILABLE TUITION JOBS
              </span>

              <h2>
                {filteredTuitions.length}
                <small>
                  {filteredTuitions.length === 1
                    ? ' Opportunity Found'
                    : ' Opportunities Found'}
                </small>
              </h2>
            </div>

          </div>

          <div className="results-actions">

            <div className="favorite-summary">
              <span>♡</span>
              <strong>{favorites.length}</strong>
              <small>Saved</small>
            </div>

            <div className="sort-box">

              <label htmlFor="sortTuitions">
                Sort by
              </label>

              <div className="sort-select">

                <select
                  id="sortTuitions"
                  value={sortBy}
                  onChange={(event) =>
                    setSortBy(event.target.value)
                  }
                >
                  {sortOptions.map((item) => (
                    <option
                      key={item}
                      value={item}
                    >
                      {item}
                    </option>
                  ))}
                </select>

                <span>⌄</span>

              </div>

            </div>

          </div>

        </div>

        {/* Active Filters */}

        {hasActiveFilters && (
          <div className="active-filter-bar">

            <div className="active-filter-title">
              <span>⚡</span>
              Active Filters
            </div>

            {search && (
              <button
                type="button"
                className="active-filter-chip"
                onClick={() => setSearch('')}
              >
                Search: {search}
                <span>×</span>
              </button>
            )}

            {subject !== 'All Subjects' && (
              <button
                type="button"
                className="active-filter-chip"
                onClick={() =>
                  setSubject('All Subjects')
                }
              >
                {subject}
                <span>×</span>
              </button>
            )}

            {location !== 'All Locations' && (
              <button
                type="button"
                className="active-filter-chip"
                onClick={() =>
                  setLocation('All Locations')
                }
              >
                {location}
                <span>×</span>
              </button>
            )}

            {mode !== 'Any Mode' && (
              <button
                type="button"
                className="active-filter-chip"
                onClick={() =>
                  setMode('Any Mode')
                }
              >
                {mode}
                <span>×</span>
              </button>
            )}

            {salary !== 'Any Salary' && (
              <button
                type="button"
                className="active-filter-chip"
                onClick={() =>
                  setSalary('Any Salary')
                }
              >
                {salary}
                <span>×</span>
              </button>
            )}

          </div>
        )}

        {/* Cards */}

        {currentTuitions.length > 0 ? (
          <div className="tuition-grid">

            {currentTuitions.map((tuition) => {

              const isFavorite =
                favorites.includes(tuition.id)

              return (
                <article
                  className="tuition-card"
                  key={tuition.id}
                >

                  <div className="tuition-card-header">

                    <div className="tuition-subject-icon">
                      {tuition.subject === 'Mathematics'
                        ? '∑'
                        : tuition.subject === 'Physics'
                          ? '⚛'
                          : tuition.subject === 'English'
                            ? 'A'
                            : tuition.subject === 'ICT'
                              ? '</>'
                              : tuition.subject === 'Chemistry'
                                ? '⚗'
                                : tuition.subject === 'Biology'
                                  ? '🧬'
                                  : tuition.subject === 'Higher Math'
                                    ? 'π'
                                    : 'ক'}
                    </div>

                    <div className="tuition-header-actions">

                      {tuition.verified && (
                        <span className="verified-post">
                          ✓ Verified
                        </span>
                      )}

                      <button
                        type="button"
                        className={`tuition-favorite ${
                          isFavorite
                            ? 'is-favorite'
                            : ''
                        }`}
                        onClick={() =>
                          toggleFavorite(tuition.id)
                        }
                        aria-label="Save tuition"
                      >
                        {isFavorite ? '♥' : '♡'}
                      </button>

                    </div>

                  </div>

                  <div className="tuition-card-body">

                    <div className="tuition-posted">
                      <span>
                        ●
                      </span>
                      {tuition.posted}
                    </div>

                    <h3>
                      {tuition.title}
                    </h3>

                    <p className="tuition-student">
                      🎓 {tuition.student}
                    </p>

                    <div className="tuition-meta">

                      <div>
                        <span>▣</span>
                        <strong>
                          {tuition.classLevel}
                        </strong>
                      </div>

                      <div>
                        <span>⌖</span>
                        <strong>
                          {tuition.location}
                        </strong>
                      </div>

                      <div>
                        <span>◷</span>
                        <strong>
                          {tuition.time}
                        </strong>
                      </div>

                    </div>

                    <div className="tuition-details-row">

                      <div>
                        <small>Budget</small>
                        <strong>
                          {tuition.salary}
                        </strong>
                      </div>

                      <div>
                        <small>Schedule</small>
                        <strong>
                          {tuition.days}
                        </strong>
                      </div>

                    </div>

                    <div className="tuition-tags">

                      <span>
                        {tuition.subject}
                      </span>

                      <span>
                        {tuition.mode}
                      </span>

                      <span>
                        {tuition.applicants} Applied
                      </span>

                    </div>

                  </div>

                  <div className="tuition-card-footer">

                    <button
                      type="button"
                      className="view-tuition-btn"
                      onClick={() =>
                        setSelectedTuition(tuition)
                      }
                    >
                      <span>
                        View Details
                      </span>

                      <span>→</span>
                    </button>

                    <button
                      type="button"
                      className="apply-tuition-btn"
                      onClick={() =>
                        setAppliedTuition(tuition)
                      }
                    >
                      Apply Now
                    </button>

                  </div>

                </article>
              )
            })}

          </div>
        ) : (
          <div className="no-tuitions">

            <div className="no-tuitions-icon">
              ⌕
            </div>

            <span>
              NO MATCH FOUND
            </span>

            <h2>
              No tuition opportunities found
            </h2>

            <p>
              We couldn't find any tuition post matching
              your current filters. Try adjusting your
              search criteria.
            </p>

            <button
              type="button"
              onClick={clearFilters}
            >
              ↻ Reset All Filters
            </button>

          </div>
        )}

        {/* Pagination */}

        {filteredTuitions.length > postsPerPage && (
          <div className="tuition-pagination">

            <button
              type="button"
              disabled={currentPage === 1}
              onClick={() =>
                setCurrentPage((page) =>
                  Math.max(1, page - 1),
                )
              }
            >
              ← Previous
            </button>

            <div>
              {Array.from(
                { length: totalPages },
                (_, index) => index + 1,
              ).map((page) => (
                <button
                  type="button"
                  key={page}
                  className={
                    currentPage === page
                      ? 'active'
                      : ''
                  }
                  onClick={() =>
                    setCurrentPage(page)
                  }
                >
                  {page}
                </button>
              ))}
            </div>

            <button
              type="button"
              disabled={currentPage === totalPages}
              onClick={() =>
                setCurrentPage((page) =>
                  Math.min(totalPages, page + 1),
                )
              }
            >
              Next →
            </button>

          </div>
        )}

      </section>

      {/* ================= CTA ================= */}

      <section className="tuition-cta">

        <div className="tuition-cta-glow"></div>

        <div className="tuition-cta-content">

          <span>
            LOOKING FOR THE RIGHT TUTOR?
          </span>

          <h2>
            Can't find what you're looking for?
          </h2>

          <p>
            Post your tuition requirement and let
            qualified tutors find you.
          </p>

          <div className="tuition-cta-actions">

            <Link
              to="/register"
              className="cta-primary-btn"
            >
              Post a Tuition
              <span>→</span>
            </Link>

            <Link
              to="/find-tutor"
              className="cta-secondary-btn"
            >
              Find a Tutor
              <span>↗</span>
            </Link>

          </div>

        </div>

      </section>

      {/* ================= FOOTER ================= */}

      <footer className="tuition-footer">

        <div className="tuition-footer-container">

          <div className="footer-brand">

            <Link
              to="/"
              className="tuition-brand"
            >
              <div className="tuition-brand-logo">
                E
              </div>

              <div className="tuition-brand-text">
                <strong>EduConnect</strong>
                <span>
                  Tuition Media Management
                </span>
              </div>
            </Link>

            <p>
              Making tuition management smarter,
              easier and more connected.
            </p>

          </div>

          <div className="footer-links">

            <div>
              <h4>Platform</h4>
              <Link to="/find-tutor">
                Find Tutor
              </Link>
              <Link to="/find-tuition">
                Find Tuition
              </Link>
              <Link to="/register">
                Create Account
              </Link>
            </div>

            <div>
              <h4>Company</h4>
              <Link to="/">
                About Us
              </Link>
              <Link to="/">
                How It Works
              </Link>
              <Link to="/">
                Features
              </Link>
            </div>

            <div>
              <h4>Support</h4>
              <Link to="/">
                Help Center
              </Link>
              <Link to="/">
                Contact Us
              </Link>
              <Link to="/">
                Privacy
              </Link>
            </div>

          </div>

        </div>

        <div className="footer-bottom">
          <span>
            © 2026 EduConnect. All rights reserved.
          </span>

          <span>
            Built for smarter tuition management.
          </span>
        </div>

      </footer>

      {/* ================= DETAILS MODAL ================= */}

      {selectedTuition && (
        <div
          className="tuition-modal-overlay"
          onClick={() =>
            setSelectedTuition(null)
          }
        >
          <div
            className="tuition-modal"
            onClick={(event) =>
              event.stopPropagation()
            }
          >

            <div className="modal-header">

              <div>
                <span>
                  VERIFIED TUITION POST
                </span>

                <h2>
                  {selectedTuition.title}
                </h2>
              </div>

              <button
                type="button"
                onClick={() =>
                  setSelectedTuition(null)
                }
              >
                ×
              </button>

            </div>

            <div className="modal-body">

              <div className="modal-title-row">

                <div className="modal-subject-icon">
                  ✦
                </div>

                <div>
                  <h3>
                    {selectedTuition.subject}
                  </h3>

                  <p>
                    {selectedTuition.classLevel}
                    {' • '}
                    {selectedTuition.mode}
                  </p>
                </div>

              </div>

              <div className="modal-info-grid">

                <div>
                  <small>Location</small>
                  <strong>
                    {selectedTuition.location}
                  </strong>
                </div>

                <div>
                  <small>Budget</small>
                  <strong>
                    {selectedTuition.salary}
                  </strong>
                </div>

                <div>
                  <small>Schedule</small>
                  <strong>
                    {selectedTuition.days}
                  </strong>
                </div>

                <div>
                  <small>Preferred Time</small>
                  <strong>
                    {selectedTuition.time}
                  </strong>
                </div>

                <div>
                  <small>Student</small>
                  <strong>
                    {selectedTuition.student}
                  </strong>
                </div>

                <div>
                  <small>Applicants</small>
                  <strong>
                    {selectedTuition.applicants}
                  </strong>
                </div>

              </div>

              <div className="modal-about">
                <span>
                  ABOUT THIS TUITION
                </span>

                <p>
                  {selectedTuition.description}
                </p>
              </div>

              <button
                type="button"
                className="modal-apply-btn"
                onClick={() => {
                  setSelectedTuition(null)
                  setAppliedTuition(
                    selectedTuition,
                  )
                }}
              >
                Apply for This Tuition →
              </button>

            </div>

          </div>
        </div>
      )}

      {/* ================= APPLY MODAL ================= */}

      {appliedTuition && (
        <div
          className="tuition-modal-overlay"
          onClick={() =>
            setAppliedTuition(null)
          }
        >
          <div
            className="apply-success-modal"
            onClick={(event) =>
              event.stopPropagation()
            }
          >

            <button
              type="button"
              className="modal-close-small"
              onClick={() =>
                setAppliedTuition(null)
              }
            >
              ×
            </button>

            <div className="success-icon">
              ✓
            </div>

            <span>
              APPLICATION REQUEST
            </span>

            <h2>
              Ready to apply?
            </h2>

            <p>
              You are applying for{' '}
              <strong>
                {appliedTuition.title}
              </strong>
              . Your application will be sent
              to the tuition poster.
            </p>

            <div className="success-mini-card">

              <div>
                <strong>
                  {appliedTuition.subject}
                </strong>

                <span>
                  {appliedTuition.location}
                </span>
              </div>

              <strong>
                {appliedTuition.salary}
              </strong>

            </div>

            <div className="apply-actions">

              <button
                type="button"
                className="cancel-btn"
                onClick={() =>
                  setAppliedTuition(null)
                }
              >
                Cancel
              </button>

              <button
                type="button"
                className="confirm-apply-btn"
                onClick={() =>
                  setAppliedTuition(null)
                }
              >
                Confirm Application →
              </button>

            </div>

          </div>
        </div>
      )}

    </main>
  )
}

export default FindTuition