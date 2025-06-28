function App() {
  return (
    <div className="container shadow-2xl">
      {/** Card */}
      <div className="bg-primary m-auto flex w-3/4 flex-col content-around items-start rounded-2xl p-10 font-sans text-xl shadow-2xl backdrop-blur-[2px]">
        <span className="text-white-accent font-mono">Hi, my name is</span>
        <h1 className="text-primary-contrast font-san-francisco mt-2 mb-3 text-6xl font-bold">
          Leonardo Lopes Honda
        </h1>
        <h1 className="text-secondary-contrast font-san-francisco mt-1 mb-6 text-6xl font-bold">
          I build applications for the web.
        </h1>
        <span className="text-secondary-contrast font-san-francisco mb-6 w-1/2 text-xl">
          I'm a software engineer based in Corumbá, Brazil specializing in
          building (and occasionally designing) exceptional web applications,
          and everything in between.
        </span>
        <button className="text-light-green hover:bg-active rounded-md border-[1px] bg-transparent px-6 py-4 font-mono transition-all hover:cursor-pointer">
          Get in Touch
        </button>
      </div>
    </div>
  );
}

export default App;
