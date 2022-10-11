import React from 'react'
import CardList from '../../Components/Card/CardList'
import Sidebar from '../../Components/SideBar'
import TopNav from '../../Components/TopNavBar/Navbar'
import UsersPage from '../../Components/Users-page-conponent'
import './Dashboard.scss'

const UserDashboard = () => {
  return (
    <div className="layout">
        <Sidebar />
        <div className="main-content">
          <TopNav  />
          <div className="main-hero">
            <h2>Users</h2>
          <CardList />
          <UsersPage/>
          </div>
        </div>
        
    </div>
  )
}

export default UserDashboard