

import { useMemo, useState } from 'react'

import { Link } from 'react-router-dom'

import './FindTutor.css'



function FindTutor() {

  const [search, setSearch] = useState('')

  const [subject, setSubject] = useState('All Subjects')

  const [location, setLocation] = useState('All Locations')

  const [availability, setAvailability] = useState('Any Availability')
  const [teachingMode, setTeachingMode] = useState('All Teaching Modes')
  const [activeVideoTutor, setActiveVideoTutor] = useState(null)

  const [rating, setRating] = useState('Any Rating')

  const [experience, setExperience] = useState('Any Experience')

  const [sortBy, setSortBy] = useState('Recommended')

  const [savedTutors, setSavedTutors] = useState([])



  const tutors = [

    {

      id: 1,

      name: 'Rahim Ahmed',

      subject: 'Physics Tutor',

      rating: 4.9,

      reviews: 48,

      experience: '5 Years Experience',

      experienceYears: 5,

      location: 'Pabna Sadar',

      availability: 'Evening',

      price: '৳6,000 / month',

      priceValue: 6000,

      education: 'B.Sc. in Physics',

      mode: 'Online & Offline',

      students: 32,

      verified: true,

      tags: ['Physics', 'HSC', 'SSC', 'Math'],

      bio: 'Experienced physics tutor focused on clear concepts, problem solving and exam preparation.',

    },



    {

      id: 2,

      name: 'Nusrat Jahan',

      subject: 'English Tutor',

      rating: 4.8,

      reviews: 36,

      experience: '4 Years Experience',

      experienceYears: 4,

      location: 'Rajshahi City',

      availability: 'Afternoon & Evening',

      price: '৳5,000 / month',

      priceValue: 5000,

      education: 'M.A. in English',

      mode: 'Online & Offline',

      students: 27,

      verified: true,

      tags: ['English', 'Grammar', 'IELTS', 'Writing'],

      bio: 'Friendly English tutor helping students improve grammar, writing, communication and confidence.',

    },



    {

      id: 3,

      name: 'Tanvir Hasan',

      subject: 'Mathematics Tutor',

      rating: 4.9,

      reviews: 52,

      experience: '6 Years Experience',

      experienceYears: 6,

      location: 'Dhaka',

      availability: 'Evening',

      price: '৳7,000 / month',

      priceValue: 7000,

      education: 'B.Sc. in Mathematics',

      mode: 'Online',

      students: 41,

      verified: true,

      tags: ['Math', 'Higher Math', 'HSC', 'SSC'],

      bio: 'Specialized in mathematics and higher mathematics with strong focus on board and admission preparation.',

    },



    {

      id: 4,

      name: 'Sadia Rahman',

      subject: 'Chemistry Tutor',

      rating: 4.7,

      reviews: 29,

      experience: '3 Years Experience',

      experienceYears: 3,

      location: 'Pabna Town',

      availability: 'Morning & Evening',

      price: '৳4,500 / month',

      priceValue: 4500,

      education: 'B.Sc. in Chemistry',

      mode: 'Online & Offline',

      students: 21,

      verified: true,

      tags: ['Chemistry', 'SSC', 'HSC', 'Science'],

      bio: 'Dedicated chemistry tutor who makes difficult topics simple through practical examples and regular practice.',

    },



    {

      id: 5,

      name: 'Arif Hossain',

      subject: 'ICT Tutor',

      rating: 4.8,

      reviews: 31,

      experience: '5 Years Experience',

      experienceYears: 5,

      location: 'Ishwardi',

      availability: 'Afternoon & Evening',

      price: '৳5,500 / month',

      priceValue: 5500,

      education: 'B.Sc. in CSE',

      mode: 'Online',

      students: 24,

      verified: true,

      tags: ['ICT', 'Programming', 'HSC', 'Web'],

      bio: 'ICT and programming tutor focused on practical learning, programming fundamentals and HSC preparation.',

    },



    {

      id: 6,

      name: 'Mim Akter',

      subject: 'Biology Tutor',

      rating: 4.6,

      reviews: 24,

      experience: '2 Years Experience',

      experienceYears: 2,

      location: 'Rajshahi City',

      availability: 'Morning & Evening',

      price: '৳4,000 / month',

      priceValue: 4000,

      education: 'B.Sc. in Biology',

      mode: 'Online & Offline',

      students: 18,

      verified: true,

      tags: ['Biology', 'SSC', 'HSC', 'Science'],

      bio: 'Passionate biology tutor helping students understand concepts through diagrams, examples and practice.',

    },

  ]



  const filteredTutors = useMemo(() => {

    const keyword = search.toLowerCase().trim()



    const filtered = tutors.filter((tutor) => {

      const searchMatch =

        tutor.name.toLowerCase().includes(keyword) ||

        tutor.subject.toLowerCase().includes(keyword) ||

        tutor.location.toLowerCase().includes(keyword) ||

        tutor.tags.some((tag) =>

          tag.toLowerCase().includes(keyword)

        )



      const subjectMatch =

        subject === 'All Subjects' ||

        tutor.subject.includes(subject) ||

        tutor.tags.includes(subject)



      const locationMatch =

        location === 'All Locations' ||

        tutor.location === location



      const availabilityMatch =

        availability === 'Any Availability' ||

        tutor.availability.includes(availability)



      const teachingModeMatch =
        teachingMode === 'All Teaching Modes' ||
        (teachingMode === 'Online / Video' && tutor.mode.includes('Online')) ||
        (teachingMode === 'In-Person' && tutor.mode.includes('Offline'))

      const ratingMatch =

        rating === 'Any Rating' ||

        tutor.rating >= Number(rating)



      let experienceMatch = true



      if (experience === '1 - 3 Years') {

        experienceMatch =

          tutor.experienceYears >= 1 &&

          tutor.experienceYears <= 3

      }



      if (experience === '4 - 5 Years') {

        experienceMatch =

          tutor.experienceYears >= 4 &&

          tutor.experienceYears <= 5

      }



      if (experience === '6+ Years') {

        experienceMatch =

          tutor.experienceYears >= 6

      }



      return (

        searchMatch &&

        subjectMatch &&

        locationMatch &&

        availabilityMatch &&

        teachingModeMatch &&

        ratingMatch &&

        experienceMatch

      )

    })



    return [...filtered].sort((a, b) => {

      if (sortBy === 'Highest Rating') {

        return b.rating - a.rating

      }



      if (sortBy === 'Most Experienced') {

        return b.experienceYears - a.experienceYears

      }



      if (sortBy === 'Lowest Price') {

        return a.priceValue - b.priceValue

      }



      if (sortBy === 'Highest Price') {

        return b.priceValue - a.priceValue

      }



      return b.rating - a.rating

    })

  }, [

    search,

    subject,

    location,

    availability,

    teachingMode,

    rating,

    experience,

    sortBy,

  ])



  const toggleSaveTutor = (id) => {

    setSavedTutors((previous) =>

      previous.includes(id)

        ? previous.filter((item) => item !== id)

        : [...previous, id]

    )

  }



  const resetFilters = () => {

    setSearch('')

    setSubject('All Subjects')

    setLocation('All Locations')

    setAvailability('Any Availability')

    setTeachingMode('All Teaching Modes')

    setRating('Any Rating')

    setExperience('Any Experience')

    setSortBy('Recommended')

  }



  return (

    <div className="find-tutor-page">



      {/* =========================================

          PAGE HEADER

      ========================================= */}



      <section className="find-tutor-header">



        <span className="tutor-page-badge">

          ✨ Verified Tutor Marketplace

        </span>



        <h1>

          Find the Right Tutor

          <span> for You</span>

        </h1>



        <p>

          Discover experienced and verified tutors based on

          subject, location, availability, rating and experience.

        </p>



      </section>



      {/* =========================================

          SEARCH

      ========================================= */}



      <section className="tutor-search-section">



        <div className="search-box">



          <span className="search-icon">

            🔍

          </span>



          <input

            type="text"

            placeholder="Search by tutor name, subject or location..."

            value={search}

            onChange={(e) =>

              setSearch(e.target.value)

            }

          />



          <button type="button">

            Search

          </button>



        </div>



      </section>



      {/* =========================================

          MAIN CONTENT

      ========================================= */}



      <div className="tutor-content">



        {/* =========================================

            FILTER SIDEBAR

        ========================================= */}



        <aside className="filter-card">



          <div className="filter-header">



            <div>

              <span>

                REFINE SEARCH

              </span>



              <h3>

                Filter Tutors

              </h3>

            </div>



            <div className="filter-icon">

              ⚙️

            </div>



          </div>



          {/* Subject */}



          <div className="filter-group">



            <label htmlFor="subject">

              📚 Subject

            </label>



            <select

              id="subject"

              value={subject}

              onChange={(e) =>

                setSubject(e.target.value)

              }

            >

              <option>All Subjects</option>

              <option>Mathematics</option>

              <option>English</option>

              <option>Physics</option>

              <option>Chemistry</option>

              <option>ICT</option>

              <option>Biology</option>

            </select>



          </div>



          {/* Location */}



          <div className="filter-group">



            <label htmlFor="location">

              📍 Location

            </label>



            <select

              id="location"

              value={location}

              onChange={(e) =>

                setLocation(e.target.value)

              }

            >

              <option>All Locations</option>

              <option>Pabna Sadar</option>

              <option>Pabna Town</option>

              <option>Ishwardi</option>

              <option>Rajshahi City</option>

              <option>Dhaka</option>

            </select>



          </div>



          {/* Availability */}



          <div className="filter-group">



            <label htmlFor="availability">

              🕐 Availability

            </label>



            <select

              id="availability"

              value={availability}

              onChange={(e) =>

                setAvailability(e.target.value)

              }

            >

              <option>

                Any Availability

              </option>

              <option>

                Morning

              </option>

              <option>

                Afternoon

              </option>

              <option>

                Evening

              </option>

            </select>



          </div>



          {/* Teaching Mode */}
          <div className="filter-group">
            <label htmlFor="teachingMode">💻 Teaching Mode</label>
            <select
              id="teachingMode"
              value={teachingMode}
              onChange={(e) => setTeachingMode(e.target.value)}
            >
              <option>All Teaching Modes</option>
              <option>Online / Video</option>
              <option>In-Person</option>
            </select>
          </div>

          {/* Rating */}



          <div className="filter-group">



            <label htmlFor="rating">

              ⭐ Rating

            </label>



            <select

              id="rating"

              value={rating}

              onChange={(e) =>

                setRating(e.target.value)

              }

            >

              <option value="Any Rating">

                Any Rating

              </option>



              <option value="4.9">

                4.9+ Rating

              </option>



              <option value="4.8">

                4.8+ Rating

              </option>



              <option value="4.7">

                4.7+ Rating

              </option>



              <option value="4.5">

                4.5+ Rating

              </option>

            </select>



          </div>



          {/* Experience */}



          <div className="filter-group">



            <label htmlFor="experience">

              🏆 Experience

            </label>



            <select

              id="experience"

              value={experience}

              onChange={(e) =>

                setExperience(e.target.value)

              }

            >

              <option>

                Any Experience

              </option>



              <option>

                1 - 3 Years

              </option>



              <option>

                4 - 5 Years

              </option>



              <option>

                6+ Years

              </option>

            </select>



          </div>



          {/* Active Filter */}



          <div className="filter-summary">



            <span>

              Active Filters

            </span>



            <strong>

              {

                [

                  subject !== 'All Subjects',

                  location !== 'All Locations',

                  availability !== 'Any Availability',

                  rating !== 'Any Rating',

                  experience !== 'Any Experience',

                ].filter(Boolean).length

              }

            </strong>



          </div>



          {/* Reset */}



          <button

            type="button"

            className="reset-filter"

            onClick={resetFilters}

          >

            ↻ Reset Filters

          </button>



        </aside>



        {/* =========================================

            RESULTS

        ========================================= */}



        <main className="tutor-results">



          <div className="results-header">



            <div>



              <span className="results-label">

                VERIFIED TUTORS

              </span>



              <h2>

                Available Tutors

              </h2>



              <p>

                {filteredTutors.length} tutor

                {filteredTutors.length !== 1

                  ? 's'

                  : ''}{' '}

                found

              </p>



            </div>



            <div className="sort-wrapper">



              <span>

                Sort by

              </span>



              <select

                className="sort-select"

                value={sortBy}

                onChange={(e) =>

                  setSortBy(e.target.value)

                }

              >

                <option>

                  Recommended

                </option>



                <option>

                  Highest Rating

                </option>



                <option>

                  Most Experienced

                </option>



                <option>

                  Lowest Price

                </option>



                <option>

                  Highest Price

                </option>

              </select>



            </div>



          </div>



          {/* =========================================

              TUTOR CARDS

          ========================================= */}



          {filteredTutors.length > 0 ? (



            <div className="tutor-list">



              {filteredTutors.map((tutor) => {



                const isSaved =

                  savedTutors.includes(tutor.id)



                return (



                  <article

                    className="tutor-card"

                    key={tutor.id}

                  >



                    {/* Verified */}



                    <div className="verified-badge">

                      ✓ Verified

                    </div>

                    {tutor.mode.includes('Online') && (
                      <div className="online-video-badge">
                        ▶ Online / Video Available
                      </div>
                    )}



                    {/* =================================

                        TUTOR HEADER

                    ================================= */}



                    <div className="tutor-card-top">



                      <div className="tutor-avatar">

                        {tutor.name

                          .split(' ')

                          .map((word) => word[0])

                          .join('')

                          .slice(0, 2)}

                      </div>



                      <div className="tutor-info">



                        <div className="tutor-name-row">



                          <h2>

                            {tutor.name}

                          </h2>



                          <span className="verified-icon">

                            ✓

                          </span>



                        </div>



                        <p className="tutor-role">

                          {tutor.subject}

                        </p>



                        <div className="tutor-rating">



                          <span className="stars">

                            ★★★★★

                          </span>



                          <strong>

                            {tutor.rating}

                          </strong>



                          <span>

                            ({tutor.reviews} reviews)

                          </span>



                        </div>



                      </div>



                      <button

                        type="button"

                        className={`save-button ${

                          isSaved ? 'saved' : ''

                        }`}

                        onClick={() =>

                          toggleSaveTutor(tutor.id)

                        }

                        aria-label="Save tutor"

                      >

                        {isSaved ? '♥' : '♡'}

                      </button>



                    </div>



                    {/* =================================

                        TUTOR DETAILS BOXES

                    ================================= */}



                    <div className="tutor-details">



                      <div className="detail-item">



                        <div className="detail-icon">

                          🎓

                        </div>



                        <div>

                          <small>

                            Education

                          </small>



                          <strong>

                            {tutor.education}

                          </strong>

                        </div>



                      </div>



                      <div className="detail-item">



                        <div className="detail-icon">

                          🏆

                        </div>



                        <div>

                          <small>

                            Experience

                          </small>



                          <strong>

                            {tutor.experience}

                          </strong>

                        </div>



                      </div>



                      <div className="detail-item">



                        <div className="detail-icon">

                          📍

                        </div>



                        <div>

                          <small>

                            Location

                          </small>



                          <strong>

                            {tutor.location}

                          </strong>

                        </div>



                      </div>



                      <div className="detail-item">



                        <div className="detail-icon">

                          🕐

                        </div>



                        <div>

                          <small>

                            Availability

                          </small>



                          <strong>

                            {tutor.availability}

                          </strong>

                        </div>



                      </div>



                      <div className="detail-item">



                        <div className="detail-icon">

                          👨‍🎓

                        </div>



                        <div>

                          <small>

                            Students Taught

                          </small>



                          <strong>

                            {tutor.students}+

                          </strong>

                        </div>



                      </div>



                      <div className="detail-item">



                        <div className="detail-icon">

                          💻

                        </div>



                        <div>

                          <small>

                            Teaching Mode

                          </small>



                          <strong>

                            {tutor.mode}

                          </strong>

                        </div>



                      </div>



                    </div>



                    {/* =================================

                        BIO

                    ================================= */}



                    <div className="tutor-description">



                      <p>

                        {tutor.bio}

                      </p>



                    </div>



                    {/* =================================

                        TAGS

                    ================================= */}



                    <div className="tutor-tags">



                      {tutor.tags.map((tag) => (

                        <span key={tag}>

                          {tag}

                        </span>

                      ))}



                    </div>



                    {/* =================================

                        BOTTOM

                    ================================= */}



                    <div className="tutor-bottom">



                      <div className="price-box">



                        <small>

                          MONTHLY FEE

                        </small>



                        <strong>

                          {tutor.price}

                        </strong>



                      </div>



                      <div className="tutor-actions">



                        <button
                          type="button"
                          className="watch-intro-btn"
                          onClick={() => setActiveVideoTutor(tutor)}
                        >
                          ▶ Watch Intro
                        </button>

                        <Link

                          to={`/tutor/${tutor.id}`}

                          className="view-profile-btn"

                        >

                          View Profile

                          <span>

                            →

                          </span>

                        </Link>



                        <Link

                          to="/register"

                          className="hire-tutor-btn"

                        >

                          Hire Tutor

                        </Link>



                        <button

                          type="button"

                          className="contact-tutor-btn"

                        >

                          💬 Contact

                        </button>



                      </div>



                    </div>



                  </article>

                )

              })}



            </div>



          ) : (



            <div className="no-results">



              <div className="no-results-icon">

                🔍

              </div>



              <h3>

                No Tutors Found

              </h3>



              <p>

                Try changing your search or filters

                to find more tutors.

              </p>



              <button

                type="button"

                onClick={resetFilters}

              >

                Clear All Filters

              </button>



            </div>



          )}



        </main>



      </div>

      {activeVideoTutor && (
        <div
          className="video-intro-overlay"
          role="presentation"
          onClick={() => setActiveVideoTutor(null)}
        >
          <section
            className="video-intro-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="video-intro-title"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="video-intro-close"
              onClick={() => setActiveVideoTutor(null)}
              aria-label="Close introduction"
            >
              ×
            </button>
            <div className="video-intro-screen">
              <span className="video-intro-play">▶</span>
              <p>Tutor Introduction</p>
              <small>Video preview area</small>
            </div>
            <h2 id="video-intro-title">{activeVideoTutor.name}</h2>
            <p>{activeVideoTutor.subject} · {activeVideoTutor.mode}</p>
            <p className="video-intro-note">
              This is a frontend preview. The tutor's real introduction video can be connected later
              when video links and backend profile management are added.
            </p>
            <button
              type="button"
              className="video-intro-done"
              onClick={() => setActiveVideoTutor(null)}
            >
              Close Preview
            </button>
          </section>
        </div>
      )}

    </div>

  )

}
export default FindTutor


