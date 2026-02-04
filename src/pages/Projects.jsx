function Projects() {
  const webProjects = [
    {
      title: "Task Management App",
      description: "A CRUD application with LocalStorage and React Router",
      link: "https://activity-3-rho.vercel.app/",
    },
    {
      title: "Notes Website",
      description: "Personal portfolio with routing and reviews system",
      link: "https://activity-2-delta.vercel.app/",
    },
    {
      title: "Image Search Unsplash",
      description: "sjdjsdhsbdhbhsbdhb hsdhd hhjdgh js",
      link: "https://unsplash-weeklyexam.vercel.app/",
    },
  ];

  const designProjects = [
    {
      title: "Character Concept/Design",
      description: "Video game promotional poster design",
      image: "public/2nd.png",
    },
    {
      title: "Local Band Concept Art",
      description: "Album cover and promotional materials",
      image: "public/3rd.png",
    },
    {
      title: "Environmental Concept",
      description: "Original character illustrations",
      image: "public/6th.png",
    },
    {
      title: "Movie Frame Recreation",
      description: "Digital art inspired by classic films",
      image: "public/5th.png",
    },
    {
      title: "Game Ad ",
      description: "Advertisement design for mobile game",
      image: "public/1st.png",
    },
    {
      title: "Devil May Cry Poster",
      description: "Logo and branding materials",
      image: "public/4th.png",
    },
  ];

  return (
    <div className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-5xl font-bold text-[#cf9994] mb-4">Projects</h2>
          <h3 className="text-3xl font-semibold text-[#a2807d] mb-8">
            Web Apps
          </h3>

          <div className="grid md:grid-cols-3 gap-6">
            {webProjects.map((project, i) => (
              <a
                key={i}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black text-white rounded-3xl p-8 hover:bg-gray-900 transition transform hover:-translate-y-2 shadow-lg cursor-pointer"
              >
                <div className="mb-4">
                  <div className="text-sm font-semibold text-gray-400">
                    Project Name
                  </div>
                  <h4 className="text-xl font-bold">{project.title}</h4>
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-400">
                    Description
                  </div>
                  <p className="text-gray-300">{project.description}</p>
                </div>
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-3xl font-semibold text-[#f7cbc8] mb-8">
            Designs
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {designProjects.map((project, i) => (
              <div
                key={i}
                className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 relative"
              >
                <div className="h-64 b overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = "none";
                    }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center"></div>

                  <div className="absolute bottom-4 left-4 bg-[#422b29] text-white px-6 py-2 rounded-2xl text-sm font-semibold shadow-lg">
                    {project.title}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
