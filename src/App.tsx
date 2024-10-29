import "./App.css";
import { motion } from "framer-motion";

function App() {
  return (
    <>
      <div className="flex bg-dark-4 items-center justify-center h-screen">
        <motion.div
          className="text-center text-white space-y-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-lg md:text-xl tracking-[1.11em] font-inter uppercase">
            Software Engineer
          </h2>
          <h1 className="text-7xl md:text-8xl font-custom font-extrabold uppercase">
            Portfolio
          </h1>
          <div className="flex justify-between text-base md:text-lg font-inter mt-2">
            <span className="font-extrabold uppercase tracking-wider">
              Yerhanat
            </span>
            <span className="font-medium tracking-[0.5em]">2024</span>
          </div>
        </motion.div>
      </div>

      <div className="flex flex-col md:flex-row items-center md:items-start p-8 max-w-6xl mx-auto space-y-8 md:space-y-0 md:space-x-12 h-screen justify-center">
        {/* Profile picture  */}
        <div className="w-52 rounded-3xl overflow-hidden flex-shrink-0">
          <img
            src="/public/profile.jpg"
            alt="Yerhanat"
            className="w-full object-cover"
          />
        </div>

        {/* right part */}
        <div className="flex flex-col text-start text-primary">
          <div className="flex flex-row space-x-3">
            {/* Introduction and EDUCATION  */}
            <div className="flex flex-col grow space-y-4">
              {/* intro  */}
              <div className="flex items-center space-x-4">
                <h1 className="text-5xl font-extrabold">Hello!</h1>
                <img src="" alt="" />
              </div>
              <p className="text-primary">
                My name is Yerhanat Yrymbai. I specialize in software
                engineering and enjoy building impactful solutions. I look
                forward to contributing my creativity and technical skills to
                innovative projects.
              </p>
              <p>Hope you enjoy my protfolio!</p>

              {/* Education section  */}
              <div className="space-y-3">
                <h2 className="text-2xl font-extrabold mt-4">EDUCATION</h2>
                <p className="font-bold">
                  2021-2024: Universiti Tenaga Nasional
                </p>
                <p className="">
                  Bachelor of Computer Science (Software Engineering) (Hons.)
                </p>
              </div>
            </div>

            {/* Skills Section and Experience  */}
            <div className="flex flex-col flex-none w-72">
              {/* SKILLS */}
              <div className="space-y-4">
                <h2 className="text-2xl font-extrabold">SKILLS</h2>
                <div className="flex flex-wrap items-center w-52">
                  <div className="bg-primary text-white rounded-md p-2 w-12 h-12 mr-2 mb-2"></div>
                  <div className="bg-primary text-white rounded-md p-2 w-12 h-12 mr-2 mb-2">
                    Type
                  </div>
                  <div className="bg-primary text-white rounded-md p-2 w-12 h-12 mr-2 mb-2">
                    CSS
                  </div>
                  <div className="bg-primary text-white rounded-md p-2 w-12 h-12 mr-2 mb-2">
                    SQL
                  </div>
                  <div className="bg-primary text-white rounded-md p-2 w-12 h-12 mr-2 mb-2">
                    Python
                  </div>
                </div>
              </div>
              {/* Experience Section  */}
              <div className="mt-6">
                <h2 className="text-2xl font-extrabold">EXPERIENCE</h2>
                <p className="font-bold mt-2">2024/06 - 2024/09</p>
                <p>Internship at Erke online Ltd.</p>
                <p className="font-bold mt-2">2024/09 - Present</p>
                <p>Freelance Software Developer</p>
              </div>
            </div>
          </div>
          {/* Social Links */}
          <div className="flex space-x-4 mt-4 text-gray-700">
            <a href="tel:+123456789" className="flex items-center">
              📞 <span className="ml-2">+123456789</span>
            </a>
            <a href="mailto:email@example.com" className="flex items-center">
              📧 <span className="ml-2">email@example.com</span>
            </a>
            <a
              href="https://www.linkedin.com/in/username"
              className="flex items-center"
            >
              🔗 <span className="ml-2">linkedin.com/in/username</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
