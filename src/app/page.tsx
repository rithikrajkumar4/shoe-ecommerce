import Image from "next/image";
import CarouselComponent from "./components/CarouselComponent";
import Link from "next/link";

export default function Home() {
  const navComp = [
    "home",
    "apparels",
    "sole*rangers",
    "sneakers",
    "dunks",
    "jordans",
  ];
  return (
    <div>
      <CarouselComponent />
      <div>
        <nav className="flex justify-center gap-10 m-10 text-3xl uppercase">
          {navComp.map((item, index) => {
            return (
              <Link key={index} href={`/item`}>
                {item}
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
