import Banner from "@/components/Banner";
import BottomBanner from "@/components/BottomBanner";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import LineUp from "@/components/LineUp";
export default function Home() {
  return (
    <div>
      <Header />
      <Banner />
      <LineUp />
      <BottomBanner />
      <Footer />
    </div>
  );
}
