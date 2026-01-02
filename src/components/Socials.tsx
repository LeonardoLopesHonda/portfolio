import type socials from "../interfaces/socials";

import { motion } from "motion/react"

interface ChildProps {
    socials: socials[];
}

export default function Socials({ socials }: ChildProps) {
    return <ul className="w-10/12 px-4 flex justify-around lg:mx-0 lg:w-fit lg:gap-8 text-white">
        {socials.map(social =>
        <motion.li 
            initial={{ scale: 0 }} 
            animate={{ scale: 1 }}
            transition={{ 
                delay: 2.85,
                type: "spring"
            }}
            className="flex items-center gap-4 hover:text-gray-500">
            <a className="flex items-center gap-2 " href={social.url}>
                {social.name}
            </a>
        </motion.li>
        )}
    </ul>
}