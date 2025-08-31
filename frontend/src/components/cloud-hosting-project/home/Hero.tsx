/**
 * @copyright 2025 mohamed boukhari
 * @license Apache-2.0
 * @description Hero section for the home page of the cloud hosting project.
 */

// img
import Image from "next/image";
import CloudImage from "../../../../public/cloud-hosting.png";

// icon
import { TiTick } from "react-icons/ti";

// styles
import "./hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <div className="heroLeft">
        <h1 className="title">Cloud Hosting Project</h1>
        <p className="description">
          The Best web hosting solution for your online success
        </p>
        <div className="services">
          <div className="service">
            <TiTick /> <span>Easy To Use Control Panel</span>
          </div>
          <div className="service">
            <TiTick /> <span>Secure Hosting</span>
          </div>
          <div className="service">
            <TiTick /> <span>Website Maintenance</span>
          </div>
        </div>
        <div className="heroLeft">
          <Image
            src={CloudImage}
            alt="Cloud Hosting"
            width={500}
            height={500}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
