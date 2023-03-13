/** @format */

import React from "react";

const UserSide = () => {
  return (
    <>
      {/* <div className="UserSideBar">

        <div className="two-Sec">
        <div className="left">
          <i class="fa-solid fa-right-from-bracket"></i>
          <p>Log out</p>
        </div>

          <div className="right">
            <img src="./Images/95.png" alt="" />
            <p>₹5,000</p>
          </div>
        </div>

        <div className="center">
          <img src="./Images/97.png" alt="" />
          <p>Suhani Shukla</p>
         <div className="empty"></div>
        </div>

        <button>My Lawyers</button>
        <button>Instant Appointment</button>
        <button>Saved Documents</button>
        <button>Book Appointment</button>
        <button>Legal Services</button>
        <button className="lastOne"> <i class="fa-solid fa-play"></i> Download our app now</button>

      </div> */}


      <div
        className="p-4"
        style={{
          backgroundColor: "#263544",
        }}
      >
        <div className="w-full md:hidden relative  mb-4">
          <RiCloseLine
            onClick={() => setHamb(!hamb)}
            className="text-3xl  absolute top-2 sm:hover:rotate-[228deg] transition-transform font-bold right-2 sm:hover:text-[22px] text-[rgb(241,146,46)] cursor-pointer"
          />
        </div>
        <figure className="flex  flex-col items-center">
          <span
            className="font-bold text-[rgb(241,146,46)]"
            style={{ fontSize: "2rem", textAlign: "center", color: "#fff" }}
          >
            Admin Panel
          </span>
        </figure>
        <nav className="py-6">
          <span
            className="flex my-3 items-center cursor-pointer text-gray-900    tracking-wider p-2 rounded-sm"
            style={{ color: "#aac0bb" }}
          >Logout
          </span>
        </nav>
      </div>
    </>
  );
};

export default UserSide;
