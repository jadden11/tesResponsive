const Clients = () => {
  return (
    <section className="px-9 sm:px-12 py-44 text-white">
      <div className="max-w-4xl mx-auto text-center">
        {/* Judul */}
        <h1 className="text-2xl sm:text-3xl font-extralight font-poppins">
          Experience as a{" "}
          <span className="font-semibold">Software engineer</span> at the
          company
        </h1>
      </div>

      {/* Logo Container */}
      <div className="mt-12 flex flex-col md:flex-row justify-center gap-4 md:gap-10 px-6 md:px-10 items-center">
        <img
          src="/images/tiket.svg"
          alt="Tiket"
          className="w-32 h-10 md:w-40 md:h-40"
        />
        <img
          src="/images/jakpro 1.svg"
          alt="Jakpro"
          className="w-32 h-10 md:w-40 md:h-40 md:-translate-y-1"
        />
        <img
          src="/images/g8.svg"
          alt="Jakpro"
          className="w-32 h-10 md:w-40 md:h-40 md:-translate-y-1"
        />
      </div>
    </section>
  );
};

export default Clients;
