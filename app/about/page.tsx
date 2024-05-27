import { Icons } from "@/components/assets/icons";
import { cn } from "@/lib/utils";
import Image from "next/image";

const text = {
  welcome: {
    title:
      "Hey, I'm Sebastian, a Full-Stack Software Developer from Monterrey, Mexico.",
    description:
      "I've been designing and developing software for over 2 years, working alongside visionaries ranging from startup founders to experienced engineers. I specialize in front-end development and overall user experience, bringing visions to life from initial concepts to fully functional applications.",
  },
  frontend: {
    title: "Front-End Development",
    description:
      "Creating intuitive and engaging user interfaces through a combination of modern design principles, effective use of color, styling, typography, and whitespace is what drives my passion for front-end development. I strive to craft seamless user experiences that not only solve problems but also evoke positive emotions.",
  },
  fullstack: {
    title: "Full-Stack Development",
    description:
      "I build robust and scalable web applications, ensuring smooth functionality and efficient performance. From developing interactive prototypes to implementing complex backend solutions, I use a variety of tools and technologies such as React, Node.js, and PostgreSQL to bring ideas to life.",
  },
  collaboration: {
    title: "Collaboration & Communication",
    description:
      "Working closely with clients and team members is essential to my approach. I facilitate open sessions and technical discussions to gather requirements and provide insights, balancing project scope, timing, and budget. Effective communication is key to delivering successful projects and achieving outstanding results.",
  },
  personal: {
    title: "Personal Projects & Hobbies",
    description:
      "In my spare time, I enjoy exploring new technologies and continuously honing my skills. I also love hiking, photography, and playing the guitar. These hobbies keep me balanced and inspired, allowing me to approach my work with fresh perspectives and creativity.",
  },
  bio: {
    title: "Brief Bio and Experience",
    description:
      "My journey into the world of software development began with a fascination for technology and an insatiable curiosity for how things work. This passion for problem-solving and creating intuitive solutions propelled me into a career in full-stack development. I’m a dedicated software developer who enjoys crafting seamless user experiences and making a positive impact through my work. Specializing in front-end development, I bring visions to life using modern design principles and effective coding practices. My expertise spans across a variety of technologies, including React, Node.js, and PostgreSQL, allowing me to build robust and scalable applications.",
  },
  interests: {
    title: "Personal Interests",
    description:
      "Outside of my professional life, I am an avid explorer of new technologies and enjoy continuously improving my skills. In my spare time, I love hiking, capturing moments through photography, and playing the guitar. These hobbies not only keep me balanced but also inspire creativity in my work. I believe in maintaining a healthy work-life balance and always seek out new adventures and challenges to keep my life exciting and fulfilling.",
  },
};

export default function AboutPage() {
  const textBoxClassName =
    "grid bg-primary-foreground w-fill min-h-[500px] content-center justify-center p-8 lg:p-32";

  const imageBoxClassName =
    "grid bg-primary-foreground w-fill min-h-[500px] content-center justify-center relative";

  return (
    <section id="about" className="container mx-auto mt-32 my-8">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className={cn(imageBoxClassName, "bg-primary")}>
          <Icons.logo className="aspect-square w-48 h-48 p-4 text-secondary" />
        </div>
        <div className={textBoxClassName}>
          <h1 className="text-2xl tracking-widest mb-4">
            {text.welcome.title}
          </h1>
          <p>{text.welcome.description}</p>
        </div>
        <div className={textBoxClassName}>
          <h1 className="text-2xl tracking-widest mb-4">
            {text.frontend.title}
          </h1>
          <p>{text.frontend.description}</p>
          <h1 className="text-2xl tracking-widest mb-4 mt-8">
            {text.fullstack.title}
          </h1>
          <p>{text.fullstack.description}</p>
        </div>

        <div className={cn(imageBoxClassName, "hidden sm:flex")}>
          <Image
            src="/about-1.jpg"
            alt="About Image"
            className="object-cover"
            fill
          />
        </div>
        <div className={cn(textBoxClassName, "md:col-span-2")}>
          <h1 className="text-2xl tracking-widest mb-4"></h1>
          <p>
            {/* I've been designing and developing software for over 2 years,
            working alongside visionaries ranging from startup founders to
            experienced engineers. I specialize in front-end development and
            overall user experience, bringing visions to life from initial
            concepts to fully functional applications. */}
          </p>
          {/* About Me Brief Bio and Experience My journey into the world of
          software development began with a fascination for technology and an
          insatiable curiosity for how things work. This passion for
          problem-solving and creating intuitive solutions propelled me into a
          career in full-stack development. I’m a dedicated software developer
          who enjoys crafting seamless user experiences and making a positive
          impact through my work. Specializing in front-end development, I bring
          visions to life using modern design principles and effective coding
          practices. My expertise spans across a variety of technologies,
          including React, Node.js, and PostgreSQL, allowing me to build robust
          and scalable applications. Personal Interests Outside of my
          professional life, I am an avid explorer of new technologies and enjoy
          continuously improving my skills. In my spare time, I love hiking,
          capturing moments through photography, and playing the guitar. These
          hobbies not only keep me balanced but also inspire creativity in my
          work. I believe in maintaining a healthy work-life balance and always
          seek out new adventures and challenges to keep my life exciting and
          fulfilling.*/}
        </div>
      </div>
    </section>
  );
}
