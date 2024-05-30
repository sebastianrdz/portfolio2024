import { Icons } from "@/components/assets/icons";
import { aboutData } from "@/lib/data";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function AboutPage() {
  const { welcome, education, more } = aboutData;
  const textBoxClassName =
    "grid bg-primary-foreground w-fill min-h-[500px] content-center justify-center p-8 xl:p-32";

  const imageBoxClassName =
    "grid bg-primary-foreground w-fill min-h-[500px] content-center justify-center relative";

  return (
    <section id="about" className="container mx-auto mt-32 my-8">
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* welcome section */}
        <div className={cn(imageBoxClassName, "bg-primary")}>
          <Icons.logo className="aspect-square w-48 h-48 p-4 text-secondary" />
        </div>
        <div className={textBoxClassName}>
          <h1 className="text-2xl tracking-widest mb-4">{welcome.title}</h1>
          <p>{welcome.description}</p>
        </div>

        {/* education section */}
        <div className={textBoxClassName}>
          <h1 className="text-2xl tracking-widest mb-4">{education.title}</h1>
          <p>{education.description}</p>
        </div>
        <div className={cn(imageBoxClassName, "hidden md:flex")}>
          <Image
            src="/about-1.jpg"
            alt="About Image"
            className="object-cover"
            fill
          />
        </div>
      </div>
      {/* more about me section */}
      <div
        className={cn(
          textBoxClassName,
          "grid-cols-1 md:grid-cols-3 text-center gap-4"
        )}
      >
        <h1 className="text-2xl tracking-widest mb-4 md:col-span-3">
          {more.title}
        </h1>
        <div className="grid content-center justify-center bg-primary gap-4 aspect-square cursor-pointer">
          <Icons.rocket className="w-12 h-12 text-secondary mx-auto" />
          <h2 className="text-xl font-bold text-secondary">
            {more.data[0].title}
          </h2>
          {/* need that on hover the descirptions comes on top */}
          <p className="hidden">{more.data[0].description}</p>
        </div>
        <div className="grid content-center justify-center bg-primary gap-4 aspect-square cursor-pointer">
          <Icons.book className="w-12 h-12 text-secondary mx-auto" />
          <h2 className="text-xl font-bold text-secondary">
            {more.data[0].title}
          </h2>
        </div>
        <div className="grid content-center justify-center bg-primary gap-4 aspect-square cursor-pointer">
          <Icons.goal className="w-12 h-12 text-secondary mx-auto" />
          <h2 className="text-xl font-bold text-secondary">
            {more.data[0].title}
          </h2>
        </div>
      </div>
    </section>
  );
}
