import React from 'react';
import pic from '../Images/home.jpg';

function Home() {
  return (
    <>
      <div
        name="Refer and Earn"
        className="max-w-screen-xl container mx-auto px-4 md:px-20 my-28 shadow-md bg-gray-200"
      >
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1">
            <span className="text-xl">Welcome to My Website</span>
            <div className="flex space-x-1 text-2xl md:text-4xl">
              <h1>Hello Welcome to the Refer and Earn Website </h1>
            </div>
            <br />
            <p className="text-sm md:text-md text-justify">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Commodi at vero ad ut nobis error voluptates sit excepturi. 
              Autem dolorem quaerat consequatur dicta sit earum eius cum placeat culpa dolorum
              consectetur repellendus dolores minima, praesentium saepe enim tempora illo voluptate.
            </p>
            <br />
            <div className="flex space-x-4">
              <button
                className="bg-blue-500 text-black px-4 py-2 rounded-md hover:bg-blue-800 hover:text-white transition-all"
                title="Refer this website"
              >
                Refer Here 
              </button>
              <button
                className="bg-blue-500 text-black px-4 py-2 rounded-md hover:bg-blue-800 hover:text-white transition-all"
                title="Earn from this website"
              >
                Earn Here
              </button>
            </div>
          </div>
          <div className="md:w-1/2 md:ml-48 md:mt-20 mt-8 order-1">
            <img
              src={pic}
              className="rounded-full md:w-[450px] md:h-[450px]"
              alt="Home"
            />
          </div>
        </div>
      </div>
      <hr />
    </>
  );
}

export default Home;
