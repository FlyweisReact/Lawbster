import React from 'react'

const UserNav = () => {
  return (
    <>
  <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          backgroundColor: "#263544",
        }}
        className="my-1 rounded-sm  p-4 py-3 shadow-md items-center  bg-slate-200 space-x-4"
      >
      
        <div
          style={{ display: "flex", gap: "10px" }}
          className="items-center space-x-2  pr-2"
        >
          <section className="flex sm:ml-auto justify-end sm:w-full items-center space-x-2  pr-2">
            <figcaption className="tracking-wider pl-1 font-semibold">
              <div
                className="lg:text-base text-sm text-gray-900  uppercase"
                style={{ color: "#aac0bb" }}
              >
                Welcome
              </div>
            </figcaption>
          </section>
     
        </div>
      </div>

      {/* <div className='UserNav'>
        <div>
          <img src='./Images/logo.png' alt='' />
        </div>
        <div>
          <input type='/search' />

        </div>
      </div> */}
    </>
  )
}

export default UserNav