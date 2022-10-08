import React from 'react'
import CardList from '../../Components/Card/CardList'
import MainPage from '../../Components/Main'
import Sidebar from '../../Components/SideBar'
import TopNav from '../../Components/TopNavBar/Navbar'
import './Dashboard.scss'

const Dashboard = () => {
  return (
    <div className="layout">
        <Sidebar position="absolute"/>
        <div className="main-content">
          <TopNav position="absolute" />
          <div className="main-hero">
          <CardList />
          <MainPage />
          </div>
        </div>
        
    </div>
  )
}

export default Dashboard