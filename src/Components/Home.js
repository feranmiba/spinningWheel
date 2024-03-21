import React, { useState } from 'react';
import { FaCakeCandles } from "react-icons/fa6";
import Cake from "./Image/birthday.jpeg"
import { Button } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

function Home() {

    const [showModal, setShowModal] = useState(Boolean)


   const visibility = () => {
   setShowModal(!showModal)
   }




  return (
    <motion.div  initial={{
      opacity: 0
    }}
    animate={{
      opacity: 1
    }}
    transition={{
      delay: 0.2,
      type: "tween",
      stiffness: 120,
      duration: 1
    }} className='flex justify-center p-10'>
      <div> 
        <h1 className='text-3xl font-semibold'>Hey you!</h1>
        <p className='flex justify-center mt-5'>It is Ayomide Oladele birthday <FaCakeCandles /></p>
        <p className='flex justify-center mt-5'><img src={Cake} alt='cake' className='rounded-2xl'/></p> 
        <p className=' text-xl flex justify-center mt-5'>
          Happy birthday to Ayomide Oladele ! Many more years to come and more achievements. We want to surprise her and you are going to be a part of it by participating in this color wheel to choose the color of the attire you would wear to her birthday party on Sunday 31st March, 2024.
        </p>
      <p className='mt-5'>
      <Button variant='contained' onClick={visibility}>Get Started</Button>
      </p> 
      </div>

      <AnimatePresence mode='wait'  initial={false} >
         {showModal && (
            <motion.form
            initial={{
            opacity: 0
            }}
            animate={{
            opacity: 1
            }}
            transition={{
            delay: 0.2,
            type: "tween",
            stiffness: 120,
            duration: 1
    }}
            className='fixed bg-[#eeffff] px-20 py-10 h-[40%]  w-[80%] shadow-2xl z-50 rounded-xl'>
            <div>
            <div className='text-left'>
            <p>FullName</p>
          <p className='mt-3 bg-white pr-10 pl-3 '>  <input type="text" placeholder='Olalade Aake' className='w-[120%] py-2 outline-none'/></p>
            </div>
            <Link to="/wheel"> <div className='mt-3'><Button variant='contained' onClick={visibility}>Choose colour</Button> </div> </Link>
            </div>

            </motion.form>
         )}
      </AnimatePresence>



    </motion.div>
  );
}

export default Home;