import type Skill from "../interfaces/skills";

interface ChildProps {
    skills: Skill[];
}

export default function Skills({ skills }: ChildProps) {
    return <div className="w-3/5 mt-6 text-white flex flex-col items-start gap-4">
        <p className="text-lg text-primary">My skills: </p>
        <ul className="w-11/12 m-auto flex items-center justify-center flex-wrap gap-4">
           {skills.map(skill =>
            <li className="flex items-center justify-center gap-2 hover:-translate-y-3 hover:scale-110 transition-all duration-500 ease-out"><img className="w-8" src={skill.image} alt={skill.name} /> {skill.name}</li>
           )} 
        </ul>
    </div>
}