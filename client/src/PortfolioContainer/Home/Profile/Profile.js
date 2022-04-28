import React from 'react';
import Typical from 'react-typical';
import '../Profile/Profile.css';

export default function Profile() {
  return (
    <div className='profile-container'>
      <div className='profile-parent'>
        <div className='profile-details'>
          <div className='colz'>
            <div className='colz-icon'>
              <a href='https://medium.com/@karelvanoordt' target="_blank">
                <i className='fa fa-medium'></i>
              </a>
              <a href='https://www.instagram.com/karelvanoordt/' target="_blank">
                <i className='fa fa-instagram'></i>
              </a>
              <a href='https://www.twitter.com/karelvanoordt/' target="_blank">
                <i className='fa fa-twitter'></i>
              </a>
              <a href='https://github.com/karelvanoordt' target="_blank">
                <i className='fa fa-github-square'></i>
              </a>
            </div>

            <div className='profile-details-name'>
              <span className='primary-text'>
                {" "}
                Hey, this is <span className='highlighted-text'>Karel</span>
              </span>
            </div>

            <div className='profile-details-role'>
              <span className='primary-text'>
                {" "}

                <h1>
                  {" "}
                  <Typical
                    loop={Infinity}
                    steps={[
                      "Full Stack Developer 🧑🏻‍💻", 1300,
                      "Ruby Enthusiast 💎", 1300,
                      "Pro cyclist wannabe 🚴🏻", 1300,
                      "Die-hard F1 fan 🏎", 1300,
                    ]}
                  />
                </h1>
                <span className='profile-role-tagline'>
                  Breaking into tech with more than 7 years of professional experience.
                </span>
               </span>
            </div>

            <div className='profile-options'>
              <a href='https://shorturl.at/dyC45' target='_blank' >
                <button className='btn primary-btn'>
                  {" "}
                  Get in touch {" "}
                </button>
              </a>
              <a href="karelvanoordt_RESUME.pdf" download='karelvanoordt_RESUME.pdf' >
                <button className='btn highlighted-btn'>Get Resume</button>
              </a>
            </div>
            <h4 className='under-construction'>
                  Website Portfolio still under construction
            </h4>
          </div>
        </div>
        <div className='profile-picture'>
          <div className='profile-picture-background'>

          </div>
        </div>

      </div>
    </div>
  )
}
