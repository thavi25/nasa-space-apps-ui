import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { partners } from '../metaData';


const PartnerSlider = () => {
  const settings = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: null,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="container max-w-7xl mx-auto py-12">
      <h2 className="text-4xl font-extrabold italic text-center mb-12 text-zinc-800">Our Partners</h2>
      <Slider {...settings}>
        {partners.map((partner, idx) => (
          <div key={idx} className="p-4">
            <img src={partner.logo} alt={partner.name} className="w-24 h-24" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default PartnerSlider;