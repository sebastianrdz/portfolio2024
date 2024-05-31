import { Icons } from "@/components/assets/icons";
import { title } from "process";

export const aboutData = {
  welcome: {
    title:
      "Hey, I'm Sebastian, a Full-Stack Software Developer from Monterrey, Mexico.",
    description:
      "I've been designing and developing software for over 2 years, working alongside visionaries ranging from startup founders to experienced engineers. I specialize in front-end development and overall user experience, bringing visions to life from initial concepts to fully functional applications.",
    icon: <Icons.logo />,
    imgSrc: "",
  },
  education: {
    title: "Education",
    description:
      "I hold a Bachelor's degree in Computer Science and Technology from Tecnologico de Monterrey. My education provided a solid foundation in programming languages and software development methodologies. During my studies, I gained hands-on experience through projects and internships, applying theoretical knowledge to real-world scenarios. This academic background has been essential in shaping my skills and passion for software development.",
    icon: null,
    imgSrc: "/about-1.jpg",
  },
  more: {
    title: "More About Me",
    data: [
      {
        title: "Journey",
        description:
          "I started coding in high school with block-based game creation. I love combining math, problem-solving, and technology. Building full-stack applications, especially front-end development, is my passion.",
      },
      {
        title: "Hobbies",
        description:
          "I enjoy going to the gym to stay fit and clear my mind. Painting and music are my creative outlets, fueling my innovation.I love reading and meeting new people to continuously learn and grow.",
      },
      {
        title: "Goals",
        description:
          "I aim to start my own businesses and achieve a care-free, fulfilling life, giving back to family and friends. ",
      },
    ],
  },
};
