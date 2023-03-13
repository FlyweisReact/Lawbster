import React, { useState } from "react";
import UserNav from "./UserNav";
import UserSide from "./UserSide";

const HOC = (Wcomponenet) => {
  return function Component() {
    const [hamb, setHamb] = useState(true);
    return (
      <>
        <section className="flex overflow-x-hidden">
          <div
            
          >
            <UserSide hamb={hamb} setHamb={setHamb} />
          </div>
          {/* Components & Navbar */}
          <div
         
          >
            <UserNav hamb={hamb} setHamb={setHamb} />
            <div>
              <Wcomponenet />
            </div>
          </div>
        </section>
      </>
    );
  };
};

export default HOC;
