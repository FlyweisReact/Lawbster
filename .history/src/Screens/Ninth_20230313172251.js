/** @format */

import React from "react";
import HOC from "./User/HOC";

const Ninth = () => {
  return (
    <>
      <h4 className="centerNinthHeading">Upcoming Consultation</h4>

      <div className="NinthFirst">
        <div className="left">
          <div className="two-sec">
            <img src="./Images/90.png" alt="" className="leftImage" />

            <div className="mid">
              <h3>Advocate. Yash</h3>
              <h4>Legal Property Lawyer</h4>
              <h5>English, Hindi, Panjabi</h5>
              <div className="two">
                <h6>Exp: 21 yrs</h6>
                <img src="./Images/91.png" alt="" />
              </div>

              <h6>30 min. consultation</h6>
            </div>

            <div className="right">
              <h4>consultation fee</h4>
              <h5>₹2000</h5>

              <button>Consult now</button>
            </div>
          </div>

          <div className="two-sec">
            <img src="./Images/90.png" alt="" className="leftImage" />

            <div className="mid">
              <h3>Advocate. Yash</h3>
              <h4>Legal Property Lawyer</h4>
              <h5>English, Hindi, Panjabi</h5>
              <div className="two">
                <h6>Exp: 21 yrs</h6>
                <img src="./Images/91.png" alt="" />
              </div>

              <h6>30 min. consultation</h6>
            </div>

            <div className="right">
              <h4>consultation fee</h4>
              <h5>₹2000</h5>

              <button>Consult now</button>
            </div>
          </div>

          <div className="two-sec">
            <img src="./Images/90.png" alt="" className="leftImage" />

            <div className="mid">
              <h3>Advocate. Yash</h3>
              <h4>Legal Property Lawyer</h4>
              <h5>English, Hindi, Panjabi</h5>
              <div className="two">
                <h6>Exp: 21 yrs</h6>
                <img src="./Images/91.png" alt="" />
              </div>

              <h6>30 min. consultation</h6>
            </div>

            <div className="right">
              <h4>consultation fee</h4>
              <h5>₹2000</h5>

              <button>Consult now</button>
            </div>
          </div>

          <div className="two-sec">
            <img src="./Images/90.png" alt="" className="leftImage" />

            <div className="mid">
              <h3>Advocate. Yash</h3>
              <h4>Legal Property Lawyer</h4>
              <h5>English, Hindi, Panjabi</h5>
              <div className="two">
                <h6>Exp: 21 yrs</h6>
                <img src="./Images/91.png" alt="" />
              </div>

              <h6>30 min. consultation</h6>
            </div>

            <div className="right">
              <h4>consultation fee</h4>
              <h5>₹2000</h5>

              <button>Consult now</button>
            </div>
          </div>
        </div>

        <div className="rightFirst">
          <p className="head">Upcoming Consultation</p>

          <div className="two-Sec">
            <img src="./Images/90.png" alt="" />
            <div>
              <h5>Adv. Suhani</h5>
              <p>Legal advisor , Corporate Advisor </p>
              <p>English, Hindi, Punjabi</p>

              <div>
                <p>Exp: 21 yrs</p>
                <img src="./Images/91.png" alt="" />
              </div>
            </div>
          </div>

          <button>Consult</button>

          <div>
            <div>
              <p>/ Hearing Fees</p>
              <p>
                {" "}
                <span>₹3300/Hearing </span> ₹3300/Hearing{" "}
              </p>
            </div>

            <div>
              <p>Mins of consultation</p>
              <p>665644 mins</p>
            </div>
          </div>

          <p>Advocate Suhani Expertise</p>


          <div>
            <div>
              <img src='./Images/99.png' alt='' />
              <p>Legal <br /> Advisor</p>
            </div>
            <div>
              <img src='./Images/99.png' alt='' />
              <p>Corporate <br /> Advisor</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HOC(Ninth);
