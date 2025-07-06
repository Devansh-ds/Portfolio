import { Typewriter } from "react-simple-typewriter";
import Tilt from "react-parallax-tilt";
import profile1 from "../../assets/profile1.jpg";

const About = () => {
  return (
    <section id="about" className="py-4 px-[5vw] md:px-[5vw] lg:px-[15vw] font-sans mt-10 md:mt-10 lg:mt-10">
      <div className="flex gap-5 flex-col-reverse md:flex-row justify-between items-center">
        {/* Left Side */}
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          {/* Greeting */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">Hi, I am</h1>
          {/* Name */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">Devansh Singla</h2>
          {/* Skills Heading with Typing Effect */}
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#f64040] leading-tight">
            <span className="text-white">I am a </span>
            <span className="text-[#f64040]">
              <Typewriter
                words={["Frontend Developer", "Backend Developer", "Coder"]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={100}
                deleteSpeed={50}
                delaySpeed={2000}
              />
            </span>
          </h3>

          {/* About Me Paragraph */}
          <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed">
            Hey! I’m a Full Stack Developer who loves solving backend challenges using Java Spring Boot. I build clean, secure APIs and enjoy making
            everything click together with a React-based frontend. I love turning ideas into real-world products. Currently exploring cloud
            deployment, DevOps, and advanced system design.
          </p>
          {/* Resume Button */}
          <a
            href="https://drive.google.com/file/d/112CYgmiYhEIx_06DwIgDNs5r4E0ZzMgO/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105"
            style={{
              background: "linear-gradient(90deg, #f64040, #a855f7)",
              boxShadow: "0 0 2px #f64040, 0 0 2px #f64040, 0 0 40px #f64040",
            }}
          >
            DOWNLOAD CV
          </a>
        </div>
        {/* Right Side */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <Tilt
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-[30rem] md:h-[30rem] border-4 border-amber-600 rounded-full"
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <img
              src={profile1}
              alt="Tarun Kaushik"
              className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
            />
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default About;
