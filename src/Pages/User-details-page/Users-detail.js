import React, {useState, useEffect} from 'react'
// import Buttons from '../../Components/Button/SmallButton'
// import Buttonsmall from '../../Components/Button/SmallButton2'
import Sidebar from '../../Components/SideBar'
import TopNav from '../../Components/TopNavBar/Navbar'
import UsersDetail from '../../Components/Users-detail/Detail'
import axios from 'axios'
import './Users-detail.scss'

const DetailsDashboard = () => {
    const [users, setUsers] = useState([]);
    const [errors, setErrors] = useState("");

    const fetchUsers = ()=>{
        axios.get("https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users")
        .then(response => {
            setUsers(response.data)
            console.log(response.data)
        })
        .catch(error =>{
            setErrors("Sorry, something went wrong!")
        })
    }
    useEffect(() =>{
        fetchUsers()
    },[])
  return (
      <>
    <div className="layout">
        
        <Sidebar position="absolute"/>
        <div className="main-content">
          <TopNav position="absolute" />
          <div className="main-hero">
          
        <div className="button-group">
        <p className="user-details">User Details</p>
        <div className="button">
          {/* <Buttons>Blacklist User</Buttons>
          <Buttonsmall>Activate User</Buttonsmall> */}
          </div>
          </div>
          
              <UsersDetail users={users} errors={errors}/>
          </div>
        </div>
        
    </div>
    </>
  )
}

export default DetailsDashboard