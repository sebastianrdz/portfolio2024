import Navigation from "@/components/navigation";
import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-primary-foreground/90 text-primary h-14 flex justify-center fixed top-0 w-full z-50 backdrop-blur-xl">
      <div className="container mx-auto flex justify-between items-center h-full ">
        <Link href="/" className="text-base uppercase tracking-widest ">
          Sebastian Rodriguez
        </Link>
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
