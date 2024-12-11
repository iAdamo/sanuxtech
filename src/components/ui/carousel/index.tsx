import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const SkillsCarousel = () => {
  const settings = {
    dots: false, // Disable dots
    infinite: true,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear", // Smooth transition
    arrows: true, // Enable arrows
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="mx-6 flex flex-col self-stretch">
      <div className="">
        <h1 className="text-2xl text-primary-500 font-bold">Skills</h1>
      </div>
      <div className="p-2 w-full justify-center items-center">
        <Slider {...settings}>
          {[
            "Skill 1",
            "Skill 2",
            "Skill 3",
            "Skill 4",
            "Skill 1",
            "Skill 2",
            "Skill 3",
            "Skill 4",
          ].map((skill, index) => (
            <div
              key={index}
              className="flex justify-center items-center shadow-md space-x-4"
            >
              <img
                className="h-auto max-h-16 object-contain"
                src={`https://via.placeholder.com/150x64`}
                alt={skill}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};
