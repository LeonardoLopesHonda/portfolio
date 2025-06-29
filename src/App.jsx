import Stars from "./particles/Stars.jsx";

function App() {
  return (
    <div className="App container shadow-2xl">
      <Stars />
      {/** Card */}
      <div className="bg-primary border-bg-primary m-auto flex w-11/12 flex-col content-around items-start rounded-xl border-[.5px] px-4 py-6 font-sans shadow-md shadow-cyan-900 backdrop-blur-[.5px] lg:w-3/4 lg:rounded-2xl lg:p-10 lg:text-xl lg:backdrop-blur-[2px]">
        <span className="text-white-accent font-mono text-[16px]">
          Hi, my name is
        </span>
        <h1 className="text-primary-contrast font-san-francisco mt-2 text-[40px] font-bold lg:mb-3 lg:text-6xl">
          Leonardo Lopes Honda
        </h1>
        <h1 className="text-secondary-contrast font-san-francisco mt-1 mb-3 text-[40px] font-bold lg:mb-6 lg:text-6xl">
          I build applications for the web.
        </h1>
        <span className="text-secondary-contrast font-san-francisco mb-6 text-[18px] lg:w-1/2 lg:text-xl">
          I'm a software engineer based in Corumbá, Brazil specializing in
          building (and occasionally designing) exceptional web applications,
          and everything in between.
        </span>
        <button className="text-light-green hover:bg-active rounded-md border-[1px] bg-transparent px-6 py-4 font-mono text-[14px] transition-all hover:cursor-pointer">
          Get in Touch
        </button>
      </div>
    </div>
  );
}

export default App;
