import "./Cover.css";
import { Parallax } from "react-parallax";
const Cover = ({coverImg, title,paragraph}) => {
  return (
    <Parallax
      blur={{ min: -50, max: 50 }}
      bgImage={coverImg}
      bgImageAlt="the dog"
      strength={-200}
    >
      <div className="hero h-[350px] md:h-[700px]">
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center md:w-8/12 text-neutral-content">
          <div className="cover-content w-full py-4 px-8 md:py-16 lg:px-60">
            <h1 className="mb-5 text-3xl mg:text-7xl font-semibold uppercase">{title}</h1>
            <p className="mb-5 uppercase">{paragraph}</p>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default Cover;
