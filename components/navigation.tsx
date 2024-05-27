"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { buttonVariants } from "./ui/button";

const NavigationLinks = [
  { name: "About", link: "about" },
  { name: "Portfolio", link: "portfolio" },
  { name: "Contact", link: "contact" },
];

const Navigation = () => {
  const pathname = usePathname();
  const isActive = (href?: string) => {
    return pathname.split("/")[1] === href;
  };

  return (
    <nav>
      <ul className="flex text-xs uppercase tracking-widest">
        {NavigationLinks.map((link, index) => (
          <li key={index}>
            <Link
              href={link.link}
              className={cn(
                buttonVariants({
                  variant: isActive(link.link) ? "default" : "ghost",
                }),
                "rounded-none h-14"
              )}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
