import React from 'react'
import "./Profile.scss"
import { FaTrashAlt } from 'react-icons/fa'

const Profile = () => {
  return (
    <section className='profile-sec --flex-center --100vh --bg-primary'>
        <div className='container'>
          <h2 className='--text-light'>User Profile App</h2>
          <div className="profile --card --flex-between --p">
            <img src="https://i.ibb.co/kXjQ7bH/Portrait-of-a-happy-young-woman-at-home.jpg" alt="profile image" />
            <div className="desc">
              <h4 className='--text-light'>Name: John Doe</h4>
              <p className='--text-light'>Job: Web Developer</p>
            </div>
            <FaTrashAlt size={18} className='icon'/>
          </div>
          <button className='--btn --btn-danger'>Clear All</button>
        </div>
    </section>
  )
}

export default Profile