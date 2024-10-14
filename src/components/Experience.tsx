interface IExperience {
  duration: string;
  jobTitle: string;
  description: string;
  teckStack: string[];
  place?: string;
}

const experiences: IExperience[] = [
  {
    duration: "Jun 2024 - Present",
    jobTitle: "Android Developer",
    description:
      "Develops and maintains Android applications using Jetpack Compose, ensuring smooth user experiences with modern UI and best practices. Leverages the power ok Kotlin Multiplatform to ship multiplatform software solutions.",
    teckStack: [
      "Kotlin",
      "Jetpack Compose",
      "Compose Multiplatform",
      "IOS",
      "Maven",
      "Gradle",
    ],
  },
  {
    duration: "Jan 2024 - June 2024",
    jobTitle: "Full Stack Developer",
    description:
      "Designed and implemented RESTful APIs for several web applications on contract basis. Contributed to both backend and frontend, improving performance and scalability across services.",
    teckStack: [
      "Spring",
      "Android",
      "Desktop",
      "Jetpack Compose",
      "Rails",
      "Node.js",
      "NestJS",
      "NextJS",
      "Vue.js",
      "ReactJS",
      "Redis",
    ],
  },
  {
    duration: "June 2023 - Dec 2023",
    jobTitle: "Software Engineer",
    place: "Bharath Brands",
    description:
      "Built and maintained microservices at HFC Bank, focusing on backend systems. Optimized database queries and improved application performance by refactoring key services.",
    teckStack: [
      "Java",
      "Spring",
      "Kotlin",
      "PostgreSQL",
      "React",
      "AMQ",
      "RabbitMQ",
    ],
  },
  {
    duration: "May 2023 - June 2023",
    jobTitle: "Junior Software Developer",
    place: "Bharath Brands",
    description:
      "Assisted in developing web applications and debugging code. Worked with senior developers on implementing new features and improving existing functionality.",
    teckStack: [
      "JavaScript",
      "Vue.js",
      "Reactjs",
      "Java",
      "Kotlin",
      "Rails",
      "Nest.js",
      "Spring",
      "HTML5",
      "CSS3",
      "Git",
    ],
  },
];

export function Experience() {
  return (
    <div id="experience" className="container mx-auto px-4 py-12 my-12">
      <h3 className="py-2 text-pink-600 font-semibold">Experience</h3>

      <div className="grid gap-4">
        {experiences.map(
          ({ duration, jobTitle, description, teckStack }, index) => (
            <div
              key={index}
              className="grid grid-cols-5 border-b last:border-none border-gray-200/20 pb-4"
            >
              <div className="col-span-5 lg:col-span-2">
                <span className="text-gray-400">{duration}</span>
              </div>
              <div className="col-span-5 lg:col-span-3">
                <div className="text-xl font-semibold text-pink-200 mb-4">
                  {jobTitle}
                </div>
                <div className="max-w-lg">{description}</div>
                <div className="flex flex-wrap gap-y-1.5 gap-x-2">
                  {teckStack.map((stck, idx) => (
                    <div
                      className="bg-pink-600/20 text-pink-500 rounded-full px-4 py text-xs py-1"
                      key={idx}
                    >
                      {stck}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}
