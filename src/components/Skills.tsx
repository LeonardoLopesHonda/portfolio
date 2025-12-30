import type skill from "../interfaces/skills";

interface ChildProps {
    skills: skill[];
}

export default function Skills({ skills }: ChildProps) {
    return <div className="w-full my-6 mb-4 text-white flex flex-col items-start gap-4">
        <p className="text-lg text-primary">My skills: </p>
        <ul className="w-full flex items-center justify-start flex-wrap gap-4 gap-y-6">
           {skills.map(skill =>
            <li className="flex items-center justify-center gap-2 hover:-translate-y-3 hover:scale-110 transition-all duration-500 ease-out"><img className="w-8" src={skill.image} alt={skill.name} /> {skill.name}</li>
           )} 
        </ul>
    </div>
}