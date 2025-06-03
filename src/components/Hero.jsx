import React from "react";
import line from "../assets/media/line.png";
import illustration from "../assets/media/USL.png";
import blob from "../assets/media/blob.png";
import disk from "../assets/media/disk.png";

export default function Hero() {
  return (
    <section className="hero text-center p-[60px] pb-0">
      <div className="hero-content flex flex-col items-center justify-center">
        <h1 className="text-[48px] leading-[96px] font-semibold hidden md:block">
          Optimize Your Online Experience with Our
          <br />
          Advanced&nbsp;
          <span className="highlight relative text-[#005ae2]">
            <img src={line} alt="line" className="absolute top-[3.5rem] left-[5rem] w-[173.63px] h-[19.91px]" />
            URL Shortening&nbsp;
          </span>
          Solution
        </h1>
        {/* Mobile version of the hero title */}
        <h1 className="text-[48px] leading-[96px] sm:hidden">
          Optimize Your Online Experience with Our
          <br />
          Advanced&nbsp;
          <span className="highlight relative text-[#005ae2]">
            URL Shortening&nbsp;
            <img src={line} alt="line" className="mob-line" />
          </span>
          Solution
        </h1>
        <p className="hero-text text-center m-4 w-[781px] h-[105px]">
          Personalize your shortened URLs to align with your brand identity.
          Utilize custom slugs, branded links, and domain customization options
          to reinforce your brand presence and enhance user engagement.
        </p>
        <div className="hero-buttons flex gap-2.5">
          <button className="btn btn-primary">Sign Up</button>
          <button className="btn btn-secondary">Learn More</button>
        </div>
        <div className="hero-image relative mt-12">
          <img src={illustration} alt="Illustration" className="w-[768px] h-[224px] mx-auto" />
          <img src={blob} alt="blob" className="blob -z-1 absolute -top-3 left-69 w-[238.55px] h-[251.2px]" />
          <img src={disk} alt="disk" className="mt-6 h-[93px]" />
        </div>
      </div>
    </section>
  );
}
