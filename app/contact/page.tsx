import { Icons } from "@/components/assets/icons";
import { Button, buttonVariants } from "@/components/ui/button";
import { contactData } from "@/lib/data";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function ContactePage() {
  const { message, email, github, linkeding } = contactData;

  return (
    <section id="about" className="container mx-auto mt-32 my-8">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="grid w-fill min-h-[500px] content-center justify-center relative bg-primary">
          <Icons.logo className="aspect-square w-48 h-48 p-4 text-secondary" />
        </div>
        <div className="grid bg-primary-foreground w-fill min-h-[500px] content-center justify-center p-8 xl:p-32">
          <h1 className="text-2xl tracking-widest mb-4">{message.title}</h1>
          <p>{message.description}</p>
        </div>
        <div className="grid grid-cols-2 bg-primary-foreground w-fill min-h-[500px] content-center justify-center p-8 xl:p-32">
          <Link
            href={github}
            className={cn(
              buttonVariants({
                variant: "ghost",
                size: "lg",
              }),
              "w-fit mx-auto"
            )}
          >
            <Icons.gitHub width={30} />
          </Link>
          <Link
            href={linkeding}
            className={cn(
              buttonVariants({
                variant: "ghost",
                size: "lg",
              }),
              "w-fit mx-auto"
            )}
          >
            <Icons.linkedin width={30} />
          </Link>
        </div>
        <div className="grid  w-fill min-h-[500px] content-center justify-center p-8 xl:p-32 bg-primary">
          <a href="/CV_SebastianRodriguez(V2).pdf" download>
            <Button variant="secondary" size="lg" className="gap-2">
              <Icons.download />
              <p>Download CV</p>
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
