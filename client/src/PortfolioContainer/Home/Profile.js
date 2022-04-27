import React from 'react';
import Typical from 'react-typical';


export default function Profile() {
  return (
    <div className='profile-container'>
      <div className='profile-parent'>
        <div className='profile-details'>
          <div className='colz'>
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
                      "Diehard F1 fan 🏎", 1300,
                    ]}
                  />
                </h1>
              </span>
            </div>

          </div>

        </div>

      </div>

    </div>
  )
}