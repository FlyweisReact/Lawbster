/** @format */

import React from "react";

const UserSide = () => {
  return (
    <>
      <div className="UserSideBar">

        <div className="two-Sec">
        <div className="l">
          <i class="fa-solid fa-right-from-bracket"></i>
          <p>Log out</p>
        </div>

          <div>
            <img src="./Images/95.png" alt="" />
          </div>
        </div>

        <div>
          <img src="./Images/96.png" alt="" />
          <p>Suhani Shukla</p>
          <hr />
        </div>

        <button>My Lawyers</button>
        <button>Instant Appointment</button>
        <button>Saved Documents</button>
        <button>Book Appointment</button>
        <button>Legal Services</button>
        <button> <i class="fa-solid fa-play"></i> Download our app now</button>

      </div>
    </>
  );
};

export default UserSide;
