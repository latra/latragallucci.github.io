import React from 'react';
import awardsData from '../data/awards.json';

function Awards() {
  if (awardsData.length === 0) {
    return null;
  }
  return (
    <section id="awards">
      <h2>Awards</h2>
      {awardsData.map((award, index) => (
        <div className="entry" key={index}>
          <div className="entry-content">
            <h3 className="entry-title">{award.event} - {award.challenge}</h3>
            <h3 className="entry-subtitle">{award.name}</h3>
            <div  className="entry-content">
              <p className="entry-description">
                {award.description}
              </p>
              <p className="entry-description">
              {award.link && (
              <p className="project-url">
                <b>Project:</b> <a href={award.link} target="_blank" rel="noopener noreferrer">
                  {award.link.replace(/^https?:\/\//, '')}
                </a>
              </p>
            )}
              </p>
            </div>
          </div>
          <div className="entry-date">
            {award.date}<br></br><br></br>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Awards;