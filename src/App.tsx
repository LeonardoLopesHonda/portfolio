import Button from "./components/Button"
import Profile from "./components/Profile"
import Skills from "./components/Skills"
import type Skill from "./interfaces/skills"
import profile from "./assets/profile.png"

function App() {
  const dev_skills: Skill[] = [
    {
      name: "Javascript",
      image: "https://skillicons.dev/icons?i=js",
    },
    {
      name: "React",
      image: "https://skillicons.dev/icons?i=react",
    },
    {
      name: "Next",
      image: "https://skillicons.dev/icons?i=nextjs",
    },
    {
      name: "NodeJs",
      image: "https://skillicons.dev/icons?i=nodejs",
    },
    {
      name: "Postgres",
      image: "https://skillicons.dev/icons?i=postgres",
    },
    {
      name: "Supabase",
      image: "https://skillicons.dev/icons?i=supabase",
    },
    {
      name: "TailwindCSS",
      image: "https://skillicons.dev/icons?i=tailwind",
    },
  ]

  return (
    <section className='flex flex-col w-full h-full items-center justify-center'>
      <Profile url={profile} alt="My profile photo" />
      <main className='w-3/5 text-justify'>
        <h1 className='text-2xl text-primary mb-2'>Hi, I'm Leonardo.</h1>
        <p className='text-primary'>I'm a <b className='text-white'>Frontend Software Engineer</b>, based in Brazil. I approach software development pragmatically, prioritizing clarity, maintainability, and real-world impact.
          Influenced by <i>The Pragmatic Programmer</i>, I focus on practical solutions, thoughtful trade-offs, and continuous improvement.
          Currently open to frontend and fullstack engineering opportunities.</p>
      </main>
      <Skills skills={dev_skills} />
      <Button btn_type="mail" value="Contact Me" href="mailto:leonardolopeshonda@gmail.com" />
    </section>
  )
}

export default App
