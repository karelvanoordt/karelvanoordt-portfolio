import React from 'react';


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
          </div>
        </div>
      </div>
    </div>
  )
}
