import BaseCarousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function Carousel(props: { children: React.ReactNode }) {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <BaseCarousel responsive={responsive} containerClass="py-4">
      {props.children}
    </BaseCarousel>
  );
}

export default Carousel;
