import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProjectCard = ({ title, description, images, link, tech }) => {
   
  return (
    <div className="mb-8">
      {Array.isArray(images) ? (
      <Slider
      dots={true}
      infinite={true}
      speed={500}
      slidesToShow={1}
      slidesToScroll={1}
      autoplay={true}
      autoplaySpeed={3000}
    >
      {images.map((img, index) => (
        <div key={index}>
          <Link to={link} className="block overflow-hidden rounded-lg shadow-lg">
            <img
              src={img}
              alt={title}
              className="w-full h-48 object-cover object-center"
            />
          </Link>
        </div>
      ))}
    </Slider>
    
      ) : (
        <Link to={link} className="block overflow-hidden rounded-lg shadow-lg">
          <img
            src={images}
            alt={title}
            className="w-full h-48 object-cover object-center"
          />
        </Link>
      )}
      <div className="p-4">
        <Link
          to={link}
          className="block mt-2 text-xl font-bold text-gray-800 hover:underline"
        >
          {title}
        </Link>
        <p className="mt-2 text-gray-600">{description}</p>
        <div className="mt-4 flex items-center space-x-2">
          {Array.isArray(tech) &&
            tech.map((element, index) => (
              <span
                key={index}
                className="px-2 py-1 text-xs font-semibold text-gray-800 bg-gray-200 rounded"
              >
                {element}
              </span>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
