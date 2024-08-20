import React from 'react';
import volunteerData from '../data/volunteering.json';

function Education() {
  return (
    <section id="volunteering">
      <h2>Volunteering</h2>
      {volunteerData.map((edu, index) => (

        <div className="global_entry" key={index}>
          <div className="entry-logo">
          
            {edu.logo && (
                <img src={`/images/${edu.logo}`} alt={`${edu.university} logo`} className="entry-logo" />
            )}
          </div>
          <div className="entry-data">

            <div className="internal_entry">


              <div className="entry-content">
                <h3 className="entry-title"> {edu.associationName}</h3>
              </div>
              <span className="entry-date"> {edu.endDate ? `${edu.startDate} - ${edu.endDate || 'Present'}` : edu.startDate}</span>

            </div>
            <div className="internal_entry">
                {edu.description && <p className="entry-description">{edu.description}</p>}
            </div>
          </div>
        </div>

      ))}
    </section>
  );
}

export default Education;