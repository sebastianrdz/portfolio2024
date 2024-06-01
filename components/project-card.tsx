import Image from "next/image";
import { Icons } from "./assets/icons";

interface ProjectCardProps {
  title: string;
  description: string;
  images: string[];
  link: string;
  tags: string[];
}

const ProjectCard = ({
  title,
  description,
  images,
  link,
  tags,
}: ProjectCardProps) => {
  return (
    <div className="group relative aspect-square grid content-center bg-primary overflow-hidden text-center cursor-pointer">
      {images.length >= 1 ? (
        <Image src={images[0]} alt={images[0]} className="object-cover" fill />
      ) : (
        <Icons.logo className="aspect-square w-48 h-48 p-4 text-secondary mx-auto" />
      )}
      <div className="absolute inset-0 bg-secondary sm:p-6 flex flex-col opacity-0 items-center justify-center translate-y-full duration-200 transition-all group-hover:translate-y-0 group-hover:opacity-95 p-24">
        <h2 className="tracking-widest mb-4 text-2xl uppercase text-primary mt-4 duration-500 md:text-2xl">
          {title}
        </h2>
        <p className="text-primary uppercase tracking-widest">
          {tags?.join(", ")}
        </p>

        <div className="w-10 h-1 bg-primary mt-4 rounded-full" />
      </div>
    </div>
  );
};

export default ProjectCard;
