import React from 'react';
import contact1 from "../assets/contact1.png";

const Contact = () => {
  return (
    <>
      <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
        <form className='flex flex-col max-w-[600px] w-full'>
          <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contact</p>
            <img src={contact1} alt="" style={{ marginTop: "5%", width: "600px" }} />
            <p className='text-gray-300 py-4'>I'm open to freelance work and internship opportunities - feel free to connect with me and discuss further.
              <br /> Phone : 9118859567
              <br />
              Email : taranshchellani121@gmail.com</p>
          </div>
          <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-0 mx-auto flex items-center'>Let's Collaborate</button>
        </form>
      </div>
    </>

  )
}

export default Contact