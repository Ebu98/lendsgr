import React from 'react'
import user from '../../assests/image/user-profile.png'
import './User.scss'

function User({users, errors}) {
  return (
    <div className="user-container">
        <div className="user-profile-infor">
            <div className="profile-image"><img src={user} alt=""/></div>
            <div>
                <h3>Grace Effiom</h3>
                <p>LSQFf587g90</p>
            </div>
            <div>
                <p>User’s Tier</p>
                <p></p>
            </div>
            <div>
                <h3>₦200,000.00</h3>
                <p>9912345678/Providus Bank</p>
            </div>
            
        </div>
        <div className="user-infor">
                <h5>General Details</h5>
                <h4>Documents</h4>
                <h4>Bank Details</h4>
                <h4>Loans</h4>
                <h4>Savings</h4>
                <h4>App And System</h4>
            </div>

    </div>
  )
}

export default User