//import SkillsCarousel from "@/components/ui/";

import { SkillsCarousel } from "../../components/ui";

export const HomeScreen = () => {
  return (
    <section className="w-full pb-2.5 flex flex-col justify-start items-center gap-2.5">
      <div className="w-full h-96 shadow-lg py-16 pl-10">
        <h1 className="text-xl text-primary-500 sm:text-base md:text-3xl font-semibold">
          My Name is Adam Babatunde Sanusi
        </h1>
      </div>
      <div className="md:px-28 gap-2 flex flex-col">
        <div className="w-full p-5  bg-steelBlue rounded-[30px] shadow-lg flex flex-col justify-center items-center">
          <p className="text-sm text-white text-center font-bold">
            Highly motivated Full-Stack Developer with extensive experience in
            Backend development, a strong foundation in React / React-Native,
            and a comprehensive understanding of modern technologies.
            <p>
              Skilled in building scalable applications using Node.js, Python,
              and C#, as well as leveraging tools like Docker, Version control
              systems, and security best practices.
            </p>
            <p>
              Proficient in networking, deployment, and DevOps workflows, making
              me well-equipped to manage and optimize both client-side and
              server-side solutions.
            </p>
          </p>
        </div>
      </div>
      {/** skills */}
      <SkillsCarousel />
      <article className="w-full bg-red-400 p-6 flex flex-col gap-4">
        <div className="text-center">
          <h2 className="text-2xl font-bold">Our Services</h2>
          <p className="text-lg">
            We offer a wide range of services to meet your needs.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <div className="bg-white p-4 shadow-lg rounded-lg">Service 1</div>
          <div className="bg-white p-4 shadow-lg rounded-lg">Service 2</div>
          <div className="bg-white p-4 shadow-lg rounded-lg">Service 3</div>
          <div className="bg-white p-4 shadow-lg rounded-lg">Service 4</div>
          <div className="bg-white p-4 shadow-lg rounded-lg">Service 1</div>
          <div className="bg-white p-4 shadow-lg rounded-lg">Service 2</div>
          <div className="bg-white p-4 shadow-lg rounded-lg">Service 3</div>
          <div className="bg-white p-4 shadow-lg rounded-lg">Service 4</div>
          {/* Add more service squares as needed */}
        </div>
      </article>
    </section>
  );
};
