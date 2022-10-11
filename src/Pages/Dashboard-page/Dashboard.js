import React from 'react'
import CardList from '../../Components/Card/CardList'
import DashboardConponent from '../../Components/Dashboard'
import Sidebar from '../../Components/SideBar'
import TopNav from '../../Components/TopNavBar/Navbar'
import './dashboard.scss'

const Dashboard = () => {
  return (
    <div className="layout">
        <Sidebar />
        <div className="main-contents">
          <TopNav  position="absolute"/>
          <div className="main-hero">
              <h3>Users</h3>
          <CardList />
          <DashboardConponent/>
          </div>
        </div>
        
    </div>
  )
}

export default Dashboard