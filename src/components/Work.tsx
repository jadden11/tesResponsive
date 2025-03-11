const Work = () => {
  return (
    <>
      <section className="py-16 text-white">
        <div className="max-w-4xl mx-auto text-center mb-32">
          <h1 className="text-2xl sm:text-3xl font-extralight font-poppins">
            Selected <span className="font-semibold">Works</span>
          </h1>
        </div>

        {/* Card 1 */}
        <div className="container mx-auto px-6 lg:px-20">
          <div className="flex flex-col md:flex-row items-center gap-12 ">
            {/* Gambar */}
            <div className="w-full md:w-1/2 flex justify-center">
              <img
                src="/images/card tiketcom.svg"
                alt="Real Estate Template"
                className="w-full md:w-4/5 rounded-lg shadow-lg"
              />
            </div>

            {/* Konten */}
            <div className="w-full md:w-1/2 text-left">
              <p className="text-xs font-semibold text-gray-400 uppercase font-inter tracking-widest">
                logical thinking
              </p>

              <h1 className="text-2xl md:text-xl font-light leading-tight mt-3 font-poppins">
                Developed <span className="font-bold">algorithms</span> and
                problem solving in programs
              </h1>

              <p
                className="text-gray-400 text-sm
            mt-3 font-poppins"
              >
                Website Feature
              </p>

              {/* Tombol */}
              {/* <button className="mt-7 px-4 py-1 font-light font-inter rounded-full border border-gray-500 text-white transition-all duration-300 hover:bg-white hover:text-black flex items-center gap-2">
                VIEW WORK
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button> */}
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="container mx-auto px-6 lg:px-20 py-14">
          <div className="flex flex-col md:flex-row-reverse items-center gap-12 pt-12">
            {/* Gambar */}
            <div className="w-full md:w-1/2 flex justify-center">
              <img
                src="/images/mobileapp2.webp"
                alt="Real Estate Template"
                className="w-full md:w-4/5 rounded-lg shadow-lg"
              />
            </div>

            {/* Konten */}
            <div className="w-full md:w-1/2 text-left">
              <p className="text-xs font-semibold text-gray-400 uppercase font-inter tracking-widest">
                Ecommerce App
              </p>

              <h1 className="text-2xl md:text-xl font-light leading-tight mt-3 font-poppins">
                Developed for UI <span className="font-bold">Cosmetic App</span>
              </h1>

              <p
                className="text-gray-400 text-sm
            mt-3 font-poppins"
              >
                Mobile Application
              </p>

              {/* Tombol */}
              {/* <button className="mt-7 px-4 py-1 font-light font-inter rounded-full border border-gray-500 text-white transition-all duration-300 hover:bg-white hover:text-black flex items-center gap-2">
                VIEW WORK
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button> */}
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="container mx-auto px-6 lg:px-20 py-14">
          <div className="flex flex-col md:flex-row items-center gap-12 pt-12">
            {/* Gambar */}
            <div className="w-full md:w-1/2 flex justify-center">
              <img
                src="/images/mobileapp.webp"
                alt="Real Estate Template"
                className="w-full md:w-4/5 rounded-lg shadow-lg"
              />
            </div>

            {/* Konten */}
            <div className="w-full md:w-1/2 text-left">
              <p className="text-xs font-semibold text-gray-400 uppercase font-inter tracking-widest">
                Flight App
              </p>

              <h1 className="text-2xl md:text-xl font-light leading-tight mt-3 font-poppins">
                developed a design concept for a real-time{" "}
                <span className="font-bold">flight-tracking</span> app
              </h1>

              <p
                className="text-gray-400 text-sm
            mt-3 font-poppins"
              >
                Mobile Application
              </p>

              {/* Tombol */}
              {/* <button className="mt-7 px-4 py-1 font-light font-inter rounded-full border border-gray-500 text-white transition-all duration-300 hover:bg-white hover:text-black flex items-center gap-2">
                VIEW WORK
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Work;
