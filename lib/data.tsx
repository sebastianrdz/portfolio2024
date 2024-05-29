import { Icons } from "@/components/assets/icons";

const data = {
  about:
    "This is a simple API for testing purposes. It returns a random number between 1 and 100.",
  contact: "",
  portfolio: {
    name: "Portfolio",
    url: "",
    projects: [
      {
        name: "Project 1",
        url: "",
      },
      {
        name: "Project 2",
        url: "",
      },
    ],
  },
};

export const aboutData = {
  welcome: {
    title:
      "Hey, I'm Sebastian, a Full-Stack Software Developer from Monterrey, Mexico.",
    description:
      "I've been designing and developing software for over 2 years, working alongside visionaries ranging from startup founders to experienced engineers. I specialize in front-end development and overall user experience, bringing visions to life from initial concepts to fully functional applications.",
    imgSrc: <Icons.logo />,
  },
  education: {
    title: "Education",
    description:
      "I hold a Bachelor's degree in Computer Science and Technology from Tecnologico de Monterrey. My education provided a solid foundation in programming languages and software development methodologies. During my studies, I gained hands-on experience through projects and internships, applying theoretical knowledge to real-world scenarios. This academic background has been essential in shaping my skills and passion for software development.",
    imgSrc: "/about-1.jpg",
  },
};
