import React from 'react'
import { ReactComponent as DropIcon } from "../../assests/icon/dropdown.svg";
import "./dashboard.scss";

const UsersPage = () => {

  const titles =[

          {
              icon: DropIcon,
              text: "organization",
            },
            {
              icon: DropIcon,
              text: "Username",
            },
            {
              icon: DropIcon,
              text: "Email",
            },
            {
              icon: DropIcon,
              text: "Phone number",
            },
            {
              icon: DropIcon,
              text: "Date joined",
            },
            {
              icon: DropIcon,
              text: "Status",
            },
    
        ];
    
  return (
    <section className="mainContents">
      
      <div className="title">
        {titles.map((title, id) =>(
          <div key={id} className="title-data">
              <p>{title.text}</p>
               <DropIcon/>
           </div>

          ))}
           </div>
      <div className="fields">
        <p>Lendsqr</p>
        <p>Adedeji</p>
        <p>adedeji@lendsqr.com</p>
        <p>08078903721</p>
        <p>May 15, 2020 10:00 AM</p>
        <button className="btn-inactive">Inactive</button>
        <p className="dots-line">...</p>
        
      </div >
      <hr/>
      <div className="fields">
        <p>Irorun</p>
        <p>Debby Ogana</p>
        <p>debby2@irorun.com</p>
        <p>08160780928</p>
        <p>Apr 30, 2020 10:00 AM</p>
        <button className="btn-pending">Pending</button>
        <p className="dots-line">...</p>
        
      </div>
      <hr/>
      <div className="fields">
        <p>Lendstar</p>
        <p>Grace Effiom</p>
        <p>grace@lendstar.com</p>
        <p>07060780922</p>
        <p>Apr 30, 2020 10:00 AM</p>
        <button className="btn-blacklist">Blacklisted</button>
        <p className="dots-line">...</p>
      </div>
      <hr/>
      <div className="fields">
        <p>Lendstar</p>
        <p>Tosin Dokunmu</p>
        <p>tosin@lendsqr.com</p>
        <p>08160780928</p>
        <p>Apr 30, 2020 10:00 AM</p>
        <button className="btn-pending">Pending</button>
        <p className="dots-line">...</p>
      </div>
      <hr/>
      <div className="fields">
        <p>Lendstar</p>
        <p>Grace Effiom</p>
        <p>grace@lendstar.com</p>
        <p>07060780922</p>
        <p>Apr 30, 2020 10:00 AM</p>
        <button className="btn-active">Active</button>
        <p className="dots-line">...</p>
      </div>
      <hr/>
      <div className="fields">
        <p>Lendstar</p>
        <p>Grace Effiom</p>
        <p>grace@lendstar.com</p>
        <p>07060780922</p>
        <p>Apr 30, 2020 10:00 AM</p>
        <button className="btn-active">Active</button>
        <div className="dots-line">
          <i>.</i>
          <i>.</i>
          <i>.</i>
        </div>
      </div>
      <hr/>
      <div className="fields">
        <p>Lendstar</p>
        <p>Grace Effiom</p>
        <p>grace@lendstar.com</p>
        <p>07060780922</p>
        <p>Apr 30, 2020 10:00 AM</p>
        <button className="btn-blacklist">Blacklisted</button>
        <p className="dots-line">...</p>
      </div>
      <hr/>
      <div className="fields">
        <p>Lendstar</p>
        <p>Tosin Dokunmu</p>
        <p>tosin@lendsqr.com</p>
        <p>08160780928</p>
        <p>Apr 30, 2020 10:00 AM</p>
        <button className="btn-inactive">Inactive</button>
        <p className="dots-line">...</p>
      </div>
      <hr/>
      <div className="fields">
        <p>Lendstar</p>
        <p>Grace Effiom</p>
        <p>grace@lendstar.com</p>
        <p>07060780922</p>
        <p>Apr 30, 2020 10:00 AM</p>
        <button className="btn-inactive">Inactive</button>
          <p className="dots-line">...</p>
      </div>

    </section>
  )
}

export default UsersPage

