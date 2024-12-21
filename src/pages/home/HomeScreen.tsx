import { useState } from "react";
import { SkillsCarousel } from "../../components/ui";
import { Modal } from "../../components/ui/modals";

export const HomeScreen = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section className="w-full pb-2.5 flex flex-col justify-start items-center gap-2.5">
      <Modal isOpen={isModalOpen} onClose={closeModal} />
      <div className="w-full h-96 shadow-lg py-16 pl-10">
        <h1 className="text-xl text-primary-500 sm:text-base md:text-3xl font-semibold">
          My Name is Adam Babatunde Sanusi
        </h1>
      </div>
      <div className="md:px-28 gap-2 flex flex-col">
        <div className="w-full p-5 bg-steelBlue rounded-[30px] shadow-lg flex flex-col justify-center items-center">
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
          {/* Add more service squares as needed */}
        </div>
      </article>
      <article className="w-full bg-blue-400 p-6 flex flex-col gap-4">
        <div className="text-center">
          <h2 className="text-2xl font-bold">Unique Selling Points</h2>
          <ul className="list-disc list-inside text-lg">
            <li>Extensive experience in Backend development</li>
            <li>Strong foundation in React / React-Native</li>
            <li>Proficient in modern technologies and tools</li>
            <li>Expertise in networking, deployment, and DevOps workflows</li>
          </ul>
        </div>
      </article>
      <article className="w-full bg-green-400 p-6 flex flex-col gap-4">
        <div className="text-center">
          <h2 className="text-2xl font-bold">Business Statistics</h2>
          <p className="text-lg">
            <strong>Years of Experience:</strong> 10+ years
          </p>
          <p className="text-lg">
            <strong>Clients Served:</strong> 100+ clients
          </p>
          <p className="text-lg">
            <strong>Projects Completed:</strong> 200+ projects
          </p>
        </div>
      </article>
      <article className="w-full bg-yellow-400 p-6 flex flex-col gap-4">
        <div className="text-center">
          <h2 className="text-2xl font-bold">Portfolio Sneak Peek</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div className="bg-white p-4 shadow-lg rounded-lg">Project 1</div>
            <div className="bg-white p-4 shadow-lg rounded-lg">Project 2</div>
            <div className="bg-white p-4 shadow-lg rounded-lg">Project 3</div>
          </div>
          <button className="mt-4 bg-primary-500 text-white py-2 px-4 rounded-lg">
            View All
          </button>
        </div>
      </article>
      <article className="w-full bg-purple-400 p-6 flex flex-col gap-4">
        <div className="text-center">
          <h2 className="text-2xl font-bold">Testimonials / Social Proof</h2>
          <p className="text-lg">"Adam is a fantastic developer!" - Client A</p>
          <p className="text-lg">
            "Highly recommend Adam's services." - Client B
          </p>
          <div className="flex justify-center gap-4">
            <img src="client-logo1.png" alt="Client 1" className="h-12" />
            <img src="client-logo2.png" alt="Client 2" className="h-12" />
          </div>
        </div>
      </article>
      <article className="w-full bg-orange-400 p-6 flex flex-col gap-4">
        <div className="text-center">
          <h2 className="text-2xl font-bold">Blog or Insights Teaser</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div className="bg-white p-4 shadow-lg rounded-lg">Article 1</div>
            <div className="bg-white p-4 shadow-lg rounded-lg">Article 2</div>
            <div className="bg-white p-4 shadow-lg rounded-lg">Article 3</div>
          </div>
        </div>
      </article>
      <article className="w-full bg-teal-400 p-6 flex flex-col gap-4">
        <div className="text-center">
          <h2 className="text-2xl font-bold">Interactive Features</h2>
          <p className="text-lg">Dynamic Timeline</p>
          <p className="text-lg">Live Chat/Contact Form</p>
        </div>
      </article>
      <article className="w-full bg-pink-400 p-6 flex flex-col gap-4">
        <div className="text-center">
          <h2 className="text-2xl font-bold">Call-to-Action Section</h2>
          <p className="text-lg">Collaborate with Me</p>
          <button className="mt-4 bg-primary-500 text-white py-2 px-4 rounded-lg">
            Join My Newsletter
          </button>
        </div>
      </article>
      <article className="w-full bg-indigo-400 p-6 flex flex-col gap-4">
        <div className="text-center">
          <h2 className="text-2xl font-bold">Media and Press</h2>
          <p className="text-lg">Featured In: XYZ Magazine</p>
          <a href="press-link" className="text-primary-500">
            Read More
          </a>
        </div>
      </article>
      <article className="w-full bg-gray-400 p-6 flex flex-col gap-4">
        <div className="text-center">
          <h2 className="text-2xl font-bold">Embedded Media</h2>
          <p className="text-lg">Introduction Video</p>
          <p className="text-lg">Podcast Links</p>
        </div>
      </article>
      <article className="w-full bg-lime-400 p-6 flex flex-col gap-4">
        <div className="text-center">
          <h2 className="text-2xl font-bold">
            Upcoming Events or Availability
          </h2>
          <p className="text-lg">Upcoming Speaking Events</p>
          <p className="text-lg">Open for Collaborations</p>
        </div>
      </article>
      <footer className="w-full bg-black text-white p-6 flex flex-col gap-4">
        <div className="text-center">
          <h2 className="text-2xl font-bold">Footer with Essential Links</h2>
          <p className="text-lg">Quick Navigation</p>
          <p className="text-lg">Social Media Links</p>
          <p className="text-lg">Newsletter Signup</p>
          <p className="text-lg">Contact Details</p>
        </div>
      </footer>
    </section>
  );
};
