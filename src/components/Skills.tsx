import type skill from "../interfaces/skills";

import { motion } from "motion/react"

interface ChildProps {
    skills: skill[];
}

const ulVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 1.5
        }
    }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function Skills({ skills }: ChildProps) {
    return <div className="w-full my-6 mb-4 text-white flex flex-col items-start gap-4">
        <motion.p 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ delay: 1.25 }}
            className="text-lg text-primary">My skills: 
        </motion.p>
        <motion.ul 
            variants={ulVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.25 }}
            className="w-full flex items-center justify-start flex-wrap gap-4 gap-y-6">
           {skills.map((skill, index) =>
            <motion.li 
                key={index} 
                variants={itemVariants} 
                whileHover={{ 
                    scale: 1.15,
                    y: -10
                }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center gap-2">
                    <img className="w-8" src={skill.image} alt={skill.name} /> {skill.name}
            </motion.li>
           )} 
        </motion.ul>
    </div>
}