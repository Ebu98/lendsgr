import React from "react";
import "./detail.scss";
import User from "./User";

function UsersDetail({users, errors}) {
  

  return (
    <section>
    
      <User users={users} errors={errors}/>
      {users.map((user, id) =>{
            return(
      <div key={user.id} className="user-detail">
        <h5>personal information</h5>
        
        <div className="personal-info">
          <div>
            <p>Full Name</p>
            <h4>{user.profile.firstName} {user.profile.lastName}</h4>
          </div>
          <div>
            <p>Phone Number</p>
            <h4>{user.profile.phoneNumber}</h4>
          </div>
          <div>
            <p>Email Address</p>
            <h4>{user.profile.address}</h4>
          </div>
          <div>
            <p>Bvn</p>
            <h4>{user.profile.bvn}</h4>
          </div>
          <div>
            <p>Gender</p>
            <h4>{user.profile.gender}</h4>
          </div>
        </div>
            
        <div className="marital-info">
          <div>
            <p>Marital Status</p>
            <h4>Single</h4>
          </div>
          <div>
            <p>children</p>
            <h4>None</h4>
          </div>
          <div>
            <p>Type of residence</p>
            <h4>Parent's Appartment</h4>
          </div>
        </div>
        <hr className="line" />
        <h5>Education and Employment</h5>
        <div className="personal-info">
          <div>
            <p>level of education</p>
            <h4>{user.education.level}</h4>
          </div>
          <div>
            <p>employment status</p>
            <h4>{user.education.employmentStatus}</h4>
          </div>
          <div>
            <p>sector of employment</p>
            <h4>{user.education.sector}</h4>
          </div>
          <div>
            <p>Duration of employment</p>
            <h4>{user.education.duration}</h4>
          </div>
        </div>
        <div className="marital-info">
          <div>
            <p>office email</p>
            <h4>{user.education.officeEmail}</h4>
          </div>
          <div>
            <p>Monthly income</p>
            <h4>₦200,000.00- ₦400,000.00</h4>
          </div>
          <div>
            <p>loan repayment</p>
            <h4>{user.education.loanRepayment}</h4>
          </div>
        </div>
        <hr className="line" />
        <h5>Socials</h5>
        <div className="marital-info">
          <div>
            <p>Twitter</p>
            <h4>@grace_effiom</h4>
          </div>
          <div>
            <p>Facebook</p>
            <h4>Grace Effiom</h4>
          </div>
          <div>
            <p>Instagram</p>
            <h4>@grace_effiom</h4>
          </div>
        </div>
        <hr className="line" />

        <h5>Guarantor</h5>
        <div className="personal-info">
          <div>
            <p>Full Name</p>
            <h4>Debby Ogana</h4>
          </div>
          <div>
            <p>Phone Number</p>
            <h4>070276427289</h4>
          </div>
          <div>
            <p>Email Address</p>
            <h4>debby@gmail.com</h4>
          </div>
          <div>
            <p>Relationship</p>
            <h4>Sister</h4>
          </div>
        </div>
        <hr className="line" />
        <div className="personal-info">
          <div>
            <p>Full Name</p>
            <h4>Debby Ogana</h4>
          </div>
          <div>
            <p>Phone Number</p>
            <h4>070276427289</h4>
          </div>
          <div>
            <p>Email Address</p>
            <h4>debby@gmail.com</h4>
          </div>
          <div>
            <p>Relationship</p>
            <h4>Sister</h4>
          </div>
        </div>
        <hr className="line" />
      </div>
      )
        })}
    </section>
  );
}

export default UsersDetail;
