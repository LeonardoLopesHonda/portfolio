import { motion } from "motion/react"

interface props {
    url: string;
    alt?: string;
}

export default function Profile({ url, alt = '' }: props) {
    return <div className="w-full mx-auto my-4 self-start flex justify-center lg:justify-start">
        <motion.img 
            initial={{ scale: 0 }} 
            animate={{ scale: 1 }} 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ 
                type: "spring",
                damping: 15,
                duration: 2
            }}
            className="w-24 rounded-full" src={url} alt={alt} />
    </div>
}