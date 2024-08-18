import React from 'react';
import educationData from '../data/education.json';

function Education() {
  return (
    <section id="education">
      <h2>Education</h2>
      {educationData.map((edu, index) => (
        <div className="entry" key={index}>
          {edu.logo && (
            <img
              src={`/images/${edu.logo}`}
              alt={`${edu.university} logo`}
              className="entry-logo"
            />
          )}
          <div className="entry-content">
          <h3 className="entry-title">
              {edu.fieldOfStudy 
                ? `${edu.degree} in ${edu.fieldOfStudy}` 
                : edu.degree}
            </h3>
            <p className="entry-subtitle">{edu.university}</p>
              {edu.description && <p className="entry-description">{edu.description}</p>}
          </div>
          <span className="entry-date">
          {edu.endDate 
                ? `${edu.startDate} - ${edu.endDate || 'Present'}` 
                : edu.startDate}
                </span>
        </div>
      ))}
    </section>
  );
}

export default Education;