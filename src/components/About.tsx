const About = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-8 md:px-20 py-16 text-white">
      {/* Bagian Teks */}
      <div className="md:w-1/2 text-left">
        <h2 className="text-sm font-bold uppercase tracking-widest">
          A Bit About Me
        </h2>
        <p className="text-lg mt-4 font-light leading-relaxed">
          I am a passionate Software Engineer and UI/UX Designer with a strong
          focus on building scalable and user-friendly digital experiences. With
          expertise in backend development, REST APIs, and modern frontend
          design, I strive to create seamless and intuitive applications. Beyond
          coding, I enjoy exploring new places and cultures, making traveling my
          second passion. Whether it's crafting efficient code or designing
          engaging user interfaces, I am always eager to learn and innovate in
          the ever-evolving tech industry. 🚀{" "}
          <span className="font-semibold">
            Let's build something great together!
          </span>
        </p>
      </div>

      {/* Bagian Gambar */}
      <div className="md:w-1/2 ">
        <img
          src="/images/group 3.png"
          alt="About"
          className="pl-10 w-[360px] h-[430px] mx-auto"
        />
      </div>
    </section>
  );
};

export default About;
