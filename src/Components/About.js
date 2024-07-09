import React from 'react';
import { IoPeopleSharp } from 'react-icons/io5';
import { MdEditDocument } from 'react-icons/md';
import { HiClipboardDocument } from 'react-icons/hi2';

function About() {
  return (
    <div
      name="About"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-28 shadow-md bg-gray-100 p-8 rounded-lg"
    >
      <h1 className="text-3xl font-bold mb-10 text-center">How do I refer?</h1>
      <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-8">
        <div className="flex flex-col items-center bg-white p-6 rounded-full shadow-lg w-64 h-64 text-center">
          <IoPeopleSharp className="text-5xl mb-4 text-blue-500" />
          <p className="text-sm text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac leo vel ligula consequat feugiat.</p>
        </div>
        <div className="flex flex-col items-center bg-white p-6 rounded-full shadow-lg w-64 h-64 text-center">
          <MdEditDocument className="text-5xl mb-4 text-blue-500" />
          <p className="text-sm text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac leo vel ligula consequat feugiat.</p>
        </div>
        <div className="flex flex-col items-center bg-white p-6 rounded-full shadow-lg w-64 h-64 text-center">
          <HiClipboardDocument className="text-5xl mb-4 text-blue-500" />
          <p className="text-sm text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac leo vel ligula consequat feugiat.</p>
        </div>
        
      </div>
      <div className="flex items-center justify-center mt-4">
  <button
    className="bg-blue-500 text-black px-4 py-2 rounded-md hover:bg-blue-800 hover:text-white transition-all"
    title="Refer this website"
  >
    Refer Now
  </button>
</div>

    </div>
  );
}

export default About;
