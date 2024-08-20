import React from 'react';
import awardsData from '../data/awards.json';

function Awards() {
  if (awardsData.length === 0) {
    return null;
  }
  return (
    <section id="awards">
      <h2>Awards</h2>
      <div className="entry">
        <div className="entry-content">
            <h3 className="entry-title">HackUPC 2023</h3>
            <h3 className="entry-subtitle">Vueling Party Appventure</h3>
            <div  className="entry-content">
              <p className="entry-description">
                A multiplatform videogame app created using unity and connected with a LAN server for enhance the flight experience.
              </p>
              <p className="entry-description">
                <b>Project:</b> <a href='https://devpost.com/software/vueling-party-appventure'  target="_blank" rel="noopener noreferrer">devpost.com/software/vueling-party-appventure</a>
              </p>

            </div>

          </div>
          
          <div className="project-url">
            May 2023<br></br><br></br>
            Vueling Challenge 1st Place <i class="fa-solid fa-trophy"></i><br></br>
            HackUPC 2nd Place <i class="fa-solid fa-trophy"></i>

          </div>
        </div>
     
    </section>
  );
}

export default Awards;