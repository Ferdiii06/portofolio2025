import Image from 'next/image';

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-12 sm:py-20 bg-black/10 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-8 sm:mb-12">My Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <Image 
              src="/project 1.png" 
              alt="Project 1" 
              width={400} 
              height={192} 
              className="w-full h-40 sm:h-48 object-cover"
            />
            <div className="p-4 sm:p-6">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-1 sm:mb-2">Website Village</h3>
              <p className="text-gray-100 mb-3 sm:mb-4 text-sm sm:text-base">A responsive website for a creative agency.</p>
              <div className="flex flex-wrap gap-1 sm:gap-2">
                <span className="bg-yellow-500/30 text-yellow-100 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm">Html/Css</span>
                <span className="bg-yellow-500/30 text-yellow-100 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm">Tailwind</span>
              </div>
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <Image 
              src="/project 2.png" 
              alt="Project 2" 
              width={400} 
              height={192} 
              className="w-full h-40 sm:h-48 object-cover"
            />
            <div className="p-4 sm:p-6">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-1 sm:mb-2">Simple Click Game</h3>
              <p className="text-gray-100 mb-3 sm:mb-4 text-sm sm:text-base">A simple click game built with HTML, CSS, and JavaScript.</p>
              <div className="flex flex-wrap gap-1 sm:gap-2">
                <span className="bg-yellow-500/30 text-yellow-100 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm">HTML/CSS</span>
                <span className="bg-yellow-500/30 text-yellow-100 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm">JavaScript</span>
                <span className="bg-yellow-500/30 text-yellow-100 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm">Python</span>
              </div>
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <Image 
              src="/project 3.png" 
              alt="project 3" 
              width={400} 
              height={192} 
              className="w-full h-40 sm:h-48 object-cover"
            />
            <div className="p-4 sm:p-6">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-1 sm:mb-2">Website Portal Berita</h3>
              <p className="text-gray-100 mb-3 sm:mb-4 text-sm sm:text-base">Website for a news portal.</p>
              <div className="flex flex-wrap gap-1 sm:gap-2">
                <span className="bg-yellow-500/30 text-yellow-100 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm">HTML/CSS</span>
                <span className="bg-yellow-500/30 text-yellow-100 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm">PHP</span>
                <span className="bg-yellow-500/30 text-yellow-100 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm">MySQL</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}