import React from 'react'
import PropTypes from 'prop-types'
import './SubjectCard.css'

const SubjectCard = props => {
  return (
    <div className="subject-card" onClick={(event) => props.openSubject(event, props.code)}>
      <div className="subject-img-container"><img className="subject-img" src={props.image} alt={props.subject} /></div>
      <h3 className="subject-name">{props.subject}</h3>
      <p className="subject-desc">{props.code}</p>
      <p className="subject-desc">{props.students} students enrolled</p>
      <p className="subject-desc">Credits: {props.credits}</p>
      <p className="subject-desc">Semester: {props.semester}</p>
    </div>
  )
}

SubjectCard.propTypes = {
  image: PropTypes.string,
  subject: PropTypes.string,
  code: PropTypes.string,
  students: PropTypes.number,
  credits: PropTypes.number,
  semester: PropTypes.number,
  openSubject: PropTypes.func,
}

export default SubjectCard
