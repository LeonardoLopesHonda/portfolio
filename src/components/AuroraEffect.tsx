import { useEffect, type ReactNode } from "react";

import { motion, useMotionTemplate, useMotionValue, animate } from "motion/react"; 

interface ChildProps {
    children: ReactNode;
}

const COLORS = ["#F0DB4F", "#007ACC", "#24BBBC", "#E12B22", "#81CD39", "#336791", "#2EAA72", "#99424F"]

export default function({ children }: ChildProps) {
    const color = useMotionValue(COLORS[0]);
    const backgroundImage = useMotionTemplate`radial-gradient(145% 145% at 50% 0%, #020617 50%, ${ color })`

    useEffect(() => {
        animate(color, COLORS, {
            ease: 'easeInOut',
            duration: 30,
            repeat: Infinity,
            repeatType: 'mirror',
        })
    })

    return (
        <motion.section 
            className="relative grid min-h-fit 
            place-content-center overflow-hidden 
            bg-gray-950 lg:px-4 lg:py-24"
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }}
            transition={{ delay: .25 }}
            style={{ 
                backgroundImage,
            }}>
            <div className="relative z-10 flex flex-col items-center">
                { children }
            </div>
        </motion.section>
    );
}