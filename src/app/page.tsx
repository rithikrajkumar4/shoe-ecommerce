import CarouselComponent from "./components/CarouselComponent";
import MainNavbar from "./components/MainNavbar";
import MembershipComponents from "./components/MembershipComponents";
import ProductDisplayPage from "./components/ProductDisplayPage";

export default function Home() {
  return (
    <div>
      <CarouselComponent />
      <MainNavbar />
      <ProductDisplayPage />
      <MembershipComponents />
    </div>
  );
}
