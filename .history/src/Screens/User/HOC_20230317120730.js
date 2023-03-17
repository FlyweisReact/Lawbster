import React, { useState } from "react";
import Footer from "../../Component/Footer";
import UserNav from "./UserNav";
import UserSide from "./UserSide";

const HOC = (Wcomponenet) => {
  return function Component() {
    const [hamb, setHamb] = useState(true);
    return (
      <>
        <section className='HocSection' >
          <div className={hamb ? 'HocSide' : 'd-none'}>
            <UserSide hamb={hamb} setHamb={setHamb} />
          </div>

          <div  className='HocNav' style={{}}>
            <UserNav hamb={hamb} setHamb={setHamb} />
            <div>
              <Wcomponenet />
            </div>
          </div>
          

        </section>

        <Footer />

        
      </>
    );
  };
};

export default HOC;
