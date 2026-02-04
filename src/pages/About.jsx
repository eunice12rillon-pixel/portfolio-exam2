function About() {
  return (
    <div className="min-h-[calc(100vh-80px)] py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-white mb-16">
          About
        </h1>

        <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-16 shadow-lg">
          <p className="text-1xl text-gray-800 leading-relaxed text-center">
            As an <span className="font-semibold">Designer and Programmer</span>,
            I am a multidisciplinary developer specializing in the intersection
            of aesthetics and logic. As a Technical Artist and Programmer, I
            don't just implement designs—I build the systems that make artistic
            visions playable. Fluent in C#, Shaders, and 3D pipelines, I bridge
            the gap between creative intent and technical constraint.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
