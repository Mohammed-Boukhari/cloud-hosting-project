/**
 * @copyright 2025 mohamed boukhari
 * @license Apache-2.0
 * @description home page for the app
 */

// node_modules
import Hero from "@/components/cloud-hosting-project/home/Hero";

// components
import WebHostingPlan from "@/components/cloud-hosting-project/home/WebHostingPlan";

const Home = () => {
  return (
    <section>
      {/* Hero Section */}
      <Hero />
      <h2 className=" text-center mt-10 text-3xl font-bold">
        Choose Your Web Hosting Plan
      </h2>

      <div className=" container m-auto flex justify-center items-center my-7 flex-wrap md:gap-7">
        {/* Web Hosting Plan Section */}
        <WebHostingPlan />
        <WebHostingPlan />
        <WebHostingPlan />
      </div>
    </section>
  );
};

export default Home;
