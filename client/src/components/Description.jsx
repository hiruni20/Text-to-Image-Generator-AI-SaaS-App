import React from 'react'
import { assets } from '../assets/assets'
import { motion } from "motion/react"

const Description = () => {
  return (
    <motion.div 
    initial={{ opacity: 0.2, y: 100 }}
    transition={{ duration: 1 }}
    whileInView={{ opacity: 1, y:0 }}
    viewport={{ once: true }}
    className='flex flex-col items-center justify-center my-24 p-6 md:px-28'>
        <h1 className='text-3xl sm:text-4xl font-semibold'>Create AI Images</h1>
        <p className='text-gray-500 mb-8'>Turn your imagination into visuals</p>

        <div className='flex flex-col gap-5 md:gap-14 md:flex-row items-center '>
            <img src={assets.sample_img_1} alt="" className='w-80 xl:w-96 rounded-lg' />

            <div className=''>
                <h2 className='text-3xl font-medium max-w-lg mb-4'>Introdusing the AI-powerd Text to image Generetor</h2>
                <p className='text-gray-600 mb-4'>Imagify lets you create stunning images just by typing what you imagine! Simply enter a text prompt, 
                    and the AI will instantly turn your words into beautiful, realistic pictures. Whether you need artwork, designs, or creative visuals,
                     this tool helps you bring your ideas to life in seconds no design skills required!</p>
                    <p className='text-gray-600'>Whether you’re designing, exploring creativity, or just having fun, 
                        it helps you visualize your imagination effortlessly. You can preview, 
                        download, and share your creations with ease. Perfect for artists, students, 
                        and anyone who loves bringing ideas to life through AI.</p>

            </div>
        </div>
    </motion.div>
  )
}

export default Description