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
