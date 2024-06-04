import { Icons } from "@/components/assets/icons";

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

export const projectsData = {
  // title: "Projects",
  data: [
    {
      title: "Fitness App",
      description:
        "Created a fitness app using React Native to simplify tracking workouts, share fitness experiences, and connect with fitness experts.",
      images: [
        "/fitness-app-1.png",
        "/fitness-app-2.png",
        "/fitness-app-3.png",
        "/fitness-app-4.png",
        "/fitness-app-5.png",
        "/fitness-app-6.png",
        "/fitness-app-7.png",
      ],
      link: "",
      tags: ["Frontend", "Backend", "Design", "Full-stack"],
    },
    {
      title: "Movie Review Sentiment Analysis",
      description:
        "Developed a machine learning model using Python, Pandas, and Scikit-learn to analyze sentiment from 50,000 IMDb movie reviews.",
      images: [
        "/movie-review-1.png",
        "/movie-review-2.png",
        "/movie-review-3.png",
        "/movie-review-4.png",
        "/movie-review-5.png",
        "/movie-review-6.png",
      ],
      link: "https://github.com/sebastianrdz/brown-bag-machine-learning-sentiment-analysis",
      tags: ["Backend"],
      status: "Outdated",
    },
    {
      title: "NLP Chatbot",
      description:
        "Built a Natural Language Processing chatbot using React and Python. It provides personalized responses and guides users through their queries.",
      images: ["/nlp-chatbot-1.png"],
      link: "https://github.com/sebastianrdz/mapa-interactivo",
      tags: ["Frontend", "Backend", "Full-stack"],
      status: "Outdated",
    },
    {
      title: "WhatsApp Clone",
      description:
        "Developed a responsive mobile app using Flutter and Firebase, with features similar to WhatsApp, including authentication and database functionalities.",
      images: ["/whatsapp-clone-1.png"],
      link: "https://github.com/sebastianrdz/whatsapp_messager",
      tags: ["Frontend", "Backend", "Full-stack"],
      status: "Outdated",
    },
    {
      title: "Internal Web Forum",
      description:
        "Redesigned an app to enhance usability with React and deployed on AWS S3. Backend built with Node.js, Express.js, JWT, and Sequelize.",
      images: ["/internal-web-forum-1.png"],
      link: "https://github.com/sebastianrdz/wz-questions-frontend",
      tags: ["Frontend", "Backend", "Full-stack"],
      status: "Outdated",
    },
    {
      title: "Crypto Wallet",
      description:
        "Developed a web app to manage Ethereum wallets using React, Express, and MongoDB. Users can buy, sell, and transfer funds securely.",
      images: [],
      link: "https://github.com/sebastianrdz/fonbnk-front-end",
      tags: ["Frontend", "Backend", "Full-stack"],
      status: "Outdated",
    },
    {
      title: "IT Web App Activation",
      description:
        "Created an onboarding training app for CEMEX GO IT using Unity, C#, SQL, Node.js, Express, and React. Increased productivity by 27%.",
      images: [],
      link: "https://github.com/sebastianrdz/react-website-styled-components-cemex",
      tags: ["Frontend", "Backend", "Full-stack"],
      status: "Outdated",
    },
  ],
};

export const contactData = {
  // title: "Contact",
  message: {
    title: "I'm always open to new opportunities and collaborations. ",
    description:
      "Feel free to reach out to me for any inquiries or just to say hello!",
  },
  email: "sebasstian.rdz@gmail.com",
  github: "https://github.com/sebastianrdz",
  linkeding: "https://www.linkedin.com/in/sebastian-rodriguez123/",
};
