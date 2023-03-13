import React, { useState } from "react";
import UserNav from "./UserNav";
import UserSide from "./UserSide";

const HOC = (Wcomponenet) => {
  return function Component() {
    const [hamb, setHamb] = useState(true);
    return (
      <>
        <section className="flex overflow-x-hidden">
          {/* Sidebar */}
          <div
            
          >
            <UserSide hamb={hamb} setHamb={setHamb} />
          </div>
          {/* Components & Navbar */}
          <div
            className={
              hamb
                ? " transition-all px-4 py-2  bg-white duration-150 w-full h-screen"
                : " w-full h-screen  px-4 py-2  bg-white z-50 transition-all duration-150 "
            }
          >
            <UserNav hamb={hamb} setHamb={setHamb} />
            <div className="my-6 text-white h-[87%] wcomp overflow-y-auto" id='wcomp'>
              <Wcomponenet />
            </div>
          </div>
        </section>
      </>
    );
  };
};

export default HOC;
