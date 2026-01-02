import { motion } from "motion/react"

interface props {
    btn_type?: string;
    value: string;
    href?: string;
}

export default function Button({ btn_type = '', value, href = "" }: props) {
    return btn_type === 'mail' ?
    <motion.a 
        initial={{ scale: 0 }} 
        animate={{ scale: 1 }} 
        transition={{ 
            type: "spring",
            delay: 2.85
         }} 
        className="w-full mb-8 lg:w-1/3 mt-8 p-4 px-8 rounded-lg text-center hover:bg-amber-200 hover:-translate-y-1 hover:scale-105 bg-white transition-all ease-out duration-500" href={href}>{ value }</motion.a> : 
    <motion.button 
        initial={{ scale: 0 }} 
        animate={{ scale: 1 }} 
        transition={{ 
            type: "spring",
            delay: 2.85
         }} 
        className="w-full mb-8 lg:w-1/3 mt-8 p-4 px-8 rounded-lg text-center hover:bg-amber-200 hover:-translate-y-1 hover:scale-105 bg-white transition-all ease-out duration-500">{ value }</motion.button> ;
}