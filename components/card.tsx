interface CardProps {
  title: string;
  description: string;
  icon?: JSX.Element;
  imageSrc?: string;
}

const Card = ({ title, description, icon, imageSrc }: CardProps) => {
  return (
    <div className="group relative aspect-square grid content-center bg-primary rounded-lg overflow-hidden">
      <div className="p-6 text-center">
        {icon}
        <h2 className="tracking-widest mb-4 text-xl font-bold capitalize text-secondary mt-4 duration-500 md:text-base">
          {title}
        </h2>
      </div>
      <div className="absolute inset-0 bg-secondary md:p-6 flex flex-col opacity-0 items-center justify-center translate-y-full duration-200 transition-all group-hover:translate-y-0 group-hover:opacity-100 p-24">
        <p className="text-primary text-base md:text-xs lg:text-base">
          {description}
        </p>
        <div className="w-10 h-1 bg-primary mt-4 rounded-full" />
      </div>
    </div>
  );
};

export default Card;
