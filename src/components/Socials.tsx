import type socials from "../interfaces/socials";

interface ChildProps {
    socials: socials[];
}

export default function Socials({ socials }: ChildProps) {
    return <ul className="w-10/12 px-4 flex justify-around lg:mx-0 lg:w-fit lg:gap-8 text-white">
        {socials.map(social =>
        <li className="flex items-center gap-4 hover:-translate-y-1 hover:scale-105 hover:text-gray-500 transition-all duration-500 ease-out">
            <a className="flex items-center gap-2 " href={social.url}>
                {social.name}
            </a>
        </li>
        )} 
    </ul>
}