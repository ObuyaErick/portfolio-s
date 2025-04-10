import { Code, Box, Hexagon, Server, Layers } from "lucide-react";

export function Hobbies() {
  const techHobbies = [
    {
      name: "Apache Kafka",
      icon: <Server className="h-8 w-8" />,
      description:
        "Building event-driven architectures and data streaming pipelines",
      color: "bg-red-500",
    },
    {
      name: "Three.js",
      icon: <Box className="h-8 w-8" />,
      description: "Creating interactive 3D visualizations for the web",
      color: "bg-blue-500",
    },
    {
      name: "C++",
      icon: <Code className="h-8 w-8" />,
      description: "Developing high-performance applications and systems",
      color: "bg-purple-500",
    },
    {
      name: "Docker Swarm",
      icon: <Hexagon className="h-8 w-8" />,
      description: "Orchestrating containerized applications at scale",
      color: "bg-green-500",
    },
    {
      name: "Kotlin Multiplatform",
      icon: <Layers className="h-8 w-8" />,
      description: "Building cross-platform applications with shared code",
      color: "bg-yellow-500",
    },
  ];

  return (
    <div id="hobbies" className="container mx-auto px-4 py-16 my-12">
      <h2 className="text-3xl font-bold mb-8 text-pink-600">Tech Hobbies</h2>
      <p className="text-lg mb-10 max-w-3xl">
        When I'm not working on company projects, I enjoy exploring these
        technologies to expand my skills and build interesting personal
        projects.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {techHobbies.map((hobby, index) => (
          <div
            key={index}
            className="group cursor-pointer bg-stone-800/10 hover:bg-stone-800/20 border border-stone-800/30 rounded-xl p-6 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <div className="flex items-center mb-4">
              <div className={`${hobby.color} p-3 rounded-lg mr-4 text-white`}>
                {hobby.icon}
              </div>
              <h3 className="text-xl font-semibold">{hobby.name}</h3>
            </div>

            <div className="transition-opacity duration-300 opacity-70 group-hover:opacity-100">
              <p>{hobby.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12">
        <p className="text-sm text-stone-500">
          Always exploring new technologies and looking for interesting problems
          to solve.
        </p>
      </div>
    </div>
  );
}
