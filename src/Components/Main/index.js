import React from 'react'
import Input from '../mainInput/input';
import './main.scss'


function MainPage() {

    const profile = [
        {
          field: "08078903721",
          value: "adedeji@lendsqr.com",
          date: "May 15, 2020 10:00 AM"
        },
        {
          field: "08078903721",
          value: "adedeji@lendsqr.com",
          date: "May 15, 2020 10:00 AM"
        },
        {
          field: "08078903721",
          value: "adedeji@lendsqr.com",
          date: "May 15, 2020 10:00 AM"
        },
        {
          field: "08078903721:",
          value: "adedeji@lendsqr.com",
          date: "May 15, 2020 10:00 AM"
        },
        {
          field: "08078903721:",
          value: "biola@fitted.ng",
          date: "May 15, 2020 10:00 AM"
        },
        {
          field: "08078903721",
          value: "adedeji@lendsqr.com",
          date: "May 15, 2020 10:00 AM"

        },
        {
          field: "08078903721",
          value: "adedeji@lendsqr.com",
          date: "May 15, 2020 10:00 AM"
        },
        {
            field: "08078903721",
            value: "adedeji@lendsqr.com",
            date: "May 15, 2020 10:00 AM"
          },
          {
            field: "08078903721",
            value: "adedeji@lendsqr.com",
            date: "May 15, 2020 10:00 AM"
          },
      ];

    
        // switch (color) {
        //     case "o":
        //       backgroundColor = "orange";
        //       break;
        //     case "r":
        //       backgroundColor = "red";
        //       break;
        //     case "g":
        //       backgroundColor = "green";
        //       break;
        //     case "p":
        //       backgroundColor = "purple";
        //       break;
        //  }

  return (
    <section className="main-wrapper">
      
    <div className="mainContent">
    <Input position="absolute"/>
        <div className="profile">
            {profile.map((item, i) => (
              <div key={i} className="field">
                <h6>{item.value}</h6>
                <p>{item.field}</p>
                <p>{item.date}</p>
                
              </div>
            ))}
          </div>
    </div>
    </section>
  )
}

export default MainPage