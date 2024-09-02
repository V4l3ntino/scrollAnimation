"use client"
import { motion } from 'framer-motion'
import { useState } from 'react';
const Box = () => {
    const [style, setStyle] = useState(false)
    return ( 
        <motion.div
        initial={{x:-40, opacity: 0, filter: 'blur(100px)'}}
        whileInView={{ opacity:1, x:0, filter: 'blur(0px)'}}
        transition={{delay: 0.5}}
        viewport={{ margin: "-200px", once: false }}
        onViewportLeave={() => { setStyle(true) }}
        onViewportEnter={() => { setStyle(false)}}
        className={`bg-slate-50 rounded w-96 h-40 mb-5 ${style ? `backdrop-blur-3xl` : ``}`}></motion.div>
     );
}
 
export default Box;