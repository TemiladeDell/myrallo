import SearchBar from "../SearchBar/SearchBar";

function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center overflow-hidden px-6 py-28">

      {/* Dotted Background */}

      <div className="absolute top-8 h-72 w-72 rounded-full bg-blue-100 blur-3xl opacity-60"></div>

      <div className="absolute inset-0 bg-[radial-gradient(circle,#60a5fa_1.2px,transparent_1.2px)] bg-size-[26px_26px] opacity-20"></div>

      {/* Hero Content */}

      <div className="relative z-10 flex w-full flex-col items-center">

        <h1 className="mb-4 text-6xl font-extrabold text-slate-900">
          Myrallo
        </h1>

        <p className="mb-10 text-lg text-slate-500">
          Free tools to get work done faster.
        </p>

        <div className="gap-8 w-full max-w-2xl">
            <SearchBar />
        </div>
      </div>

    </section>
  );
}

export default Hero;