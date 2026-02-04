import React from "react";

function Skills() {
  const skills = [
    {
      icon: <img src="/Blender.png" alt="Blender" className="w-25 h-25" />,
      desc: "I specialize in high-efficiency 3D modeling using Blender. My workflow relies heavily on non-destructive modifiers and procedural techniques, allowing me to make major changes to a model late in the production pipeline without starting over. I am comfortable bridging the gap between 2D concept and 3D realization using Grease Pencil for 3D sketching",
    },
    {
      icon: <img src="/Procreate.png" alt="Procreate" className="w-35 h-25" />,
      name: "Character Pipeline",
      desc: "Versatile Procreate Concept Artist specialized in end-to-end visual storytelling. Expert in designing expressive character turnarounds, immersive environmental world-building using advanced lighting/perspective, and high-fidelity game posters that merge dynamic compositions with professional branding.",
    },
    {
      icon: <img src="/Html.png" alt="HTML" className="w-16 h-16" />,
      name: "Environment Design & Set Dressing",
      desc: "Structured complex layouts for a Task App and Image Gallery using clean HTML code, enabling seamless integration with CSS Flexbox and Grid for responsive device compatibility.",
    },
    {
      icon: (
        <img src="/JavaScript.png" alt="JavaScript" className="w-16 h-16" />
      ),
      name: "Visual Storytelling & Moodboarding",
      desc: "Developed a responsive web app utilizing CRUD operations (Create, Read, Update, Delete) to manage user data effectively. Implemented Local Storage to ensure data persistence across sessions and utilized DOM manipulation for real-time UI updates.",
    },
  ];

  return (
    <div className="min-h-[calc(100vh-80px)] py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-6xl font-bold text-center text-white mb-16">
          Skills
        </h1>

        <div className="grid grid-cols-4 gap-4 mb-12">
          {skills.map((skill, i) => (
            <div key={i} className="text-center">
              <div className="w-24 h-24 mx-auto bg-transparent rounded-full flex items-center justify-center text-5xl shadow-lg mb-3">
                {skill.icon}
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-4 gap-6">
          {skills.map((skill, i) => (
            <div
              key={i}
              className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl shadow-lg"
            >
              <p className="text-gray-700 text-center text-sm leading-relaxed">
                {skill.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
