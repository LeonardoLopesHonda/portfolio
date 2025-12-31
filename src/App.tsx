import Button from "./components/Button"
import Profile from "./components/Profile"
import Skills from "./components/Skills"
import profile from "./assets/profile.png"
import type skill from "./interfaces/skills"
import type socials from "./interfaces/socials"
import Header from "./components/Header"
import Socials from "./components/Socials"

function App() {
  const dev_skills: skill[] = [
    {
      name: "Javascript",
      image: "https://skillicons.dev/icons?i=js",
    },
    {
      name: "Typescript",
      image: "https://skillicons.dev/icons?i=ts",
    },
    {
      name: "React",
      image: "https://skillicons.dev/icons?i=react",
    },
    {
      name: "TailwindCSS",
      image: "https://skillicons.dev/icons?i=tailwind",
    },
    {
      name: "Next",
      image: "https://skillicons.dev/icons?i=nextjs",
    },
    {
      name: "Laravel",
      image: "https://skillicons.dev/icons?i=laravel",
    },
    {
      name: "NodeJs",
      image: "https://skillicons.dev/icons?i=nodejs",
    },
    {
      name: "MySQL",
      image: "https://skillicons.dev/icons?i=mysql",
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
      name: "Jest",
      image: "https://skillicons.dev/icons?i=jest",
    },
    {
      name: "Cypress",
      image: "https://skillicons.dev/icons?i=cypress",
    },
    {
      name: "Amazon Web Services",
      image: "https://skillicons.dev/icons?i=aws",
    },
  ]
  
  const socials: socials[] = [
    {
      name: "Github",
      url: "https://github.com/LeonardoLopesHonda"
    },
    {
      name: "Linkedin",
      url: "https://www.linkedin.com/in/leonardo-honda/"
    },
  ]

  return (
    <>
      <Header>
        <Socials socials={socials} />
      </Header>
      <section className='w-10/12 flex flex-col lg:w-3/5 lg:h-full items-center justify-center'>
        <Profile url={profile} alt="My profile photo" />
        <main className='w-full text-justify'>
          <h1 className='text-center text-2xl text-primary mb-8 lg:text-start'>Hi, I'm <b className='text-white'>Leonardo</b>.</h1>
          <p className='text-primary'>I'm a <b className='text-white'>Frontend Software Engineer</b>, based in Brazil. I approach software development pragmatically, prioritizing clarity, maintainability, and real-world impact.
            Influenced by <i>The Pragmatic Programmer</i>, I focus on practical solutions, thoughtful trade-offs, and continuous improvement.
            Currently open to frontend and fullstack engineering opportunities.</p>
        </main>
        <Skills skills={dev_skills} />
        <div className="w-full flex">
          <Button btn_type="mail" value="Contact Me" href="mailto:leonardolopeshonda@gmail.com" />
        </div>
      </section>
    </>
  )
}

export default App
