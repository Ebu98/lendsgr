// import React from "react";
// import Input from "../mainInput/input";
// import { ReactComponent as DropIcon } from "../../assests/icon/dropdown.svg";
// import "./main.scss";
// // import TopNav from '../TopNavBar/Navbar';
// // import Sidebar from '../SideBar';
// // import CardList from '../Card/CardList';

// function UsersPage() {
//     const titles =[

//       {
//           icon: DropIcon,
//           text: "organization",
//         },
//         {
//           icon: DropIcon,
//           text: "Username",
//         },
//         {
//           icon: DropIcon,
//           text: "Email",
//         },
//         {
//           icon: DropIcon,
//           text: "Phone number",
//         },
//         {
//           icon: DropIcon,
//           text: "Date joined",
//         },
//         {
//           icon: DropIcon,
//           text: "Status",
//         },

//     ];

//   // return (
//   // <>
//   // <section className="main-wrapper">
//   // <Input  position="absolute" top="-234px"/>
//   //     <div className="profiles">

//   //     <div className="title">
//   //         {titles.map((title, id) =>(
//   //         <div key={id} className="title-data">
//   //             <p>{title.text}</p>
//   //             <DropIcon/>
//   //         </div>

//   //         ))}
//   //         </div>
//   //       {profile.map((item, i) => (
//   //         <div key={i} className="user-data">
//   //           <h6>{item.name}</h6>
//   //           <p>{item.username}</p>
//   //           <p>{item.email}</p>
//   //           <p>{item.phone}</p>
//   //           <p>{item.date}</p>
//   //         </div>
//   //       ))}
//   //     </div>
//   // </section>
//   // </>
//   // );
//   // }

//   const profile = [
//     {
//       username: "Tosin Dokunmu",
//       name: "Lendsqr",
//       phone: "08078903721",
//       email: "adedeji@lendsqr.com",
//       date: "May 15, 2020 10:00 AM",
//     },
//     {
//       username: "Tosin Dokunmu",
//       name: "Lendsqr",
//       phone: "08078903721",
//       email: "adedeji@lendsqr.com",
//       date: "May 15, 2020 10:00 AM",
//     },
//     {
//       username: "Tosin Dokunmu",
//       name: "Lendsqr",
//       phone: "08078903721",
//       email: "adedeji@lendsqr.com",
//       date: "May 15, 2020 10:00 AM",
//     },
//     {
//       username: "Tosin Dokunmu",
//       name: "Lendsqr",
//       phone: "08078903721:",
//       email: "adedeji@lendsqr.com",
//       date: "May 15, 2020 10:00 AM",
//     },
//     {
//       username: "Tosin Dokunmu",
//       name: "Lendsqr",
//       phone: "08078903721:",
//       email: "biola@fitted.ng",
//       date: "May 15, 2020 10:00 AM",
//     },
//     {
//       username: "Tosin Dokunmu",
//       name: "Lendsqr",
//       phone: "08078903721",
//       email: "adedeji@lendsqr.com",
//       date: "May 15, 2020 10:00 AM",
//     },
//     {
//       username: "Tosin Dokunmu",
//       name: "Lendsqr",
//       phone: "08078903721",
//       email: "adedeji@lendsqr.com",
//       date: "May 15, 2020 10:00 AM",
//     },
//     {
//       username: "Tosin Dokunmu",
//       name: "Lendsqr",
//       phone: "08078903721",
//       email: "adedeji@lendsqr.com",
//       date: "May 15, 2020 10:00 AM",
//     },
//     {
//       username: "Tosin Dokunmu",
//       name: "Lendsqr",
//       phone: "08078903721",
//       email: "adedeji@lendsqr.com",
//       date: "May 15, 2020 10:00 AM",
//     },
//   ];

//   // switch (color) {
//   //     case "o":
//   //       backgroundColor = "orange";
//   //       break;
//   //     case "r":
//   //       backgroundColor = "red";
//   //       break;
//   //     case "g":
//   //       backgroundColor = "green";
//   //       break;
//   //     case "p":
//   //       backgroundColor = "purple";
//   //       break;
//   //  }

//   return (
//     <section className="main-wrapper">
//       <div className="mainContent">
//         <Input position="absolute" />
//         <div className="profile">
//         <div className="title">
//         {titles.map((title, id) =>(
//           <div key={id} className="title-data">
//               <p>{title.text}</p>
//                <DropIcon/>
//            </div>

//           ))}
//            </div>
//           {profile.map((item, i) => (
//             <div key={i} className="fields">
//               <p>{item.name}</p>
//               <p>{item.username}</p>
//               <p>{item.email}</p>
//               <p>{item.phone}</p>
//               <p>{item.date}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default UsersPage;


import React from 'react'
import { ReactComponent as DropIcon } from "../../assests/icon/dropdown.svg";
import Input from '../mainInput/input';
import "./main.scss";

const UserPage = () => {

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
    <section className="mainContent2">
      <div className="title">
        {titles.map((title, id) =>(
          <div key={id} className="title-data">
              <p>{title.text}</p>
               <DropIcon/>
           </div>

          ))}
           </div>
           <Input/>
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

export default UserPage
