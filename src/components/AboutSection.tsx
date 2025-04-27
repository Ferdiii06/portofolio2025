export default function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-20 bg-black/10 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-8 sm:mb-12">About Me</h2>
        <div className="flex flex-col md:flex-row items-center gap-8 sm:gap-12">
          <div className="md:w-1/2 w-full">
            <div className="bg-white/20 backdrop-blur-md rounded-xl p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">Who I Am</h3>
              <p className="text-gray-100 mb-4 sm:mb-6 text-sm sm:text-base">
                Im Ferdi, a passionate web developer with expertise in frontend technologies.
                I love creating beautiful, responsive, and user-friendly websites.
              </p>
              <p className="text-gray-100 text-sm sm:text-base">
                With a strong foundation in HTML, CSS, and JavaScript, I enjoy turning ideas 
                into reality through code.
              </p>
            </div>
          </div>
          <div className="md:w-1/2 w-full">
            <div className="bg-white/20 backdrop-blur-md rounded-xl p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">My Journey</h3>
              <ul className="space-y-3 sm:space-y-4 text-gray-100 text-sm sm:text-base">
                <li className="flex items-start">
                  <span className="bg-yellow-500/30 text-yellow-100 rounded-full p-1 sm:p-2 mr-3 sm:mr-4">🎓</span>
                  <span>Self-taught developer with a passion for web development</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-yellow-500/30 text-yellow-100 rounded-full p-1 sm:p-2 mr-3 sm:mr-4">💼</span>
                  <span>Completed multiple freelance projects</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-yellow-500/30 text-yellow-100 rounded-full p-1 sm:p-2 mr-3 sm:mr-4">🚀</span>
                  <span>Continuously learning new technologies</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}