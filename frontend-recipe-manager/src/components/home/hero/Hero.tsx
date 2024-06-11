import couscous from "@/assets/couscous.png";
import image1 from "@/assets/hero/image1.png";
import image2 from "@/assets/hero/image2.png";
import image3 from "@/assets/hero/image3.png";
import image4 from "@/assets/hero/image4.png";
import image5 from "@/assets/hero/image5.png";
import { InfiniteMovingCards } from "./ImageSlider";

const Hero = () => {
  const images = [image1, image2, image3, image4, image5];
  return (
    <div className="hero min-h-screen bg-[#f4f2f0]">
      <img
        className="absolute -left-96"
        style={{ width: "800px", height: "auto" }}
        src={couscous}
        alt="Couscous"
      />
      <div className="pt-40 pl-96">
        <h1 className="font-bold text-4xl lg:text-5xl">
          Welcome to Algerian Gourmet
        </h1>
        <p className="text-gray-500 pt-2 text-lg">
          Discover the Rich Flavors of Algeria <br /> with Our Authentic Recipes
        </p>
      </div>
      <div className="absolute bottom-0 left-0 right-0">
        <InfiniteMovingCards images={images} />
      </div>
    </div>
  );
};

export default Hero;