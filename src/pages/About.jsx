function About() {
  return (
    <div className="min-h-[calc(100vh-80px)] py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <h1
          className="text-4xl font-bold text-center text-[#be8e8e] mb-16
                     transition-all duration-300
                     hover:scale-110 
                     hover:text-purple-200"
        >
          About Me
        </h1>
        <img
          src="/Profile.png"
          alt="Profile"
          className="rounded-full w-32 h-32 mx-auto mb-8 shadow-lg
                   transition-all duration-500 ease-in-out
                   hover:scale-125
                   hover:shadow-2xl
                   hover:rotate-6
                   cursor-pointer"
        />
        <div
          className="bg-white/60 backdrop-blur-sm rounded-3xl p-16 shadow-lg
                      transition-all duration-300
                      hover:bg-white/80
                      hover:shadow-2xl
                      hover:-translate-y-2"
        >
          <p
            className="text-xl text-gray-800 leading-relaxed text-center mb-6
                      transition-all duration-300
                      hover:text-gray-900
                      hover:scale-105"
          >
            I am a passionate{" "}
            <span
              className="font-semibold text-purple-600 
                           transition-colors duration-300
                           hover:text-purple-800"
            >
              Creative Designer
            </span>{" "}
            and{" "}
            <span
              className="font-semibold text-blue-600
                           transition-colors duration-300
                           hover:text-blue-800"
            >
              Developer
            </span>{" "}
            focusing on the seamless blend of aesthetics and functionality. My
            journey as a Technical Artist allows me to create intuitive and
            visually appealing user experiences.
          </p>

          <p
            className="text-xl text-gray-800 leading-relaxed text-center mb-6
                      transition-all duration-300
                      hover:text-gray-900
                      hover:scale-105"
          >
            With proficiency in tools like{" "}
            <span
              className="font-semibold text-red-600
                           transition-colors duration-300
                           hover:text-red-800"
            >
              Adobe Creative Suite
            </span>
            ,{" "}
            <span
              className="font-semibold text-orange-600
                           transition-colors duration-300
                           hover:text-orange-800"
            >
              Blender
            </span>
            , and{" "}
            <span
              className="font-semibold text-gray-800
                           transition-colors duration-300
                           hover:text-black"
            >
              Procreate
            </span>
            , I seamlessly integrate design and technology to bring ideas to
            life.
          </p>
          <blockquote
            className="italic text-gray-600 border-l-4 border-gray-300 pl-4 mb-6
                                transition-all duration-300
                                hover:border-purple-500
                                hover:text-gray-800
                                hover:pl-6
                                hover:bg-purple-50/50
                                hover:py-2
                                rounded-r-lg
                                cursor-pointer"
          >
            "Design is not just what it looks like. Design is how it works." -
            Steve Jobs
          </blockquote>

          <div className="flex justify-center space-x-4 mt-8">
            <a
              href="https://linkedin.com"
              className="text-blue-600 font-semibold px-6 py-2 rounded-full
                       transition-all duration-300
                       hover:bg-blue-600
                       hover:text-white
                       hover:scale-110
                       hover:shadow-lg
                       hover:-translate-y-1"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com"
              className="text-black font-semibold px-6 py-2 rounded-full
                       transition-all duration-300
                       hover:bg-black
                       hover:text-white
                       hover:scale-110
                       hover:shadow-lg
                       hover:-translate-y-1"
            >
              GitHub
            </a>
            <a
              href=""
              className="text-green-600 font-semibold px-6 py-2 rounded-full
                       transition-all duration-300
                       hover:bg-green-600
                       hover:text-white
                       hover:scale-110
                       hover:shadow-lg
                       hover:-translate-y-1"
            >
              Portfolio
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
