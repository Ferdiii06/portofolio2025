export default function SkillsSection() {
  return (
    <section className="py-12 sm:py-16 bg-black/10 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-8 sm:mb-12">My Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          <div className="bg-white/20 p-4 sm:p-6 rounded-xl backdrop-blur-sm text-center hover:scale-105 transition-transform duration-300">
            <div className="text-4xl sm:text-5xl mb-3 sm:mb-4">💻</div>
            <h3 className="text-lg sm:text-xl font-semibold text-white mb-1 sm:mb-2">Web Development</h3>
            <p className="text-gray-100 text-sm sm:text-base">HTML, CSS</p>
          </div>
          <div className="bg-white/20 p-4 sm:p-6 rounded-xl backdrop-blur-sm text-center hover:scale-105 transition-transform duration-300">
            <div className="text-4xl sm:text-5xl mb-3 sm:mb-4">🎨</div>
            <h3 className="text-lg sm:text-xl font-semibold text-white mb-1 sm:mb-2">UI/UX Design</h3>
            <p className="text-gray-100 text-sm sm:text-base">Figma</p>
          </div>
          <div className="bg-white/20 p-4 sm:p-6 rounded-xl backdrop-blur-sm text-center hover:scale-105 transition-transform duration-300">
            <div className="text-4xl sm:text-5xl mb-3 sm:mb-4">⚛️</div>
            <h3 className="text-lg sm:text-xl font-semibold text-white mb-1 sm:mb-2">Frontend</h3>
            <p className="text-gray-100 text-sm sm:text-base">React, Tailwind, Next.js</p>
          </div>
          <div className="bg-white/20 p-4 sm:p-6 rounded-xl backdrop-blur-sm text-center hover:scale-105 transition-transform duration-300">
            <div className="text-4xl sm:text-5xl mb-3 sm:mb-4">🔧</div>
            <h3 className="text-lg sm:text-xl font-semibold text-white mb-1 sm:mb-2">Backend</h3>
            <p className="text-gray-100 text-sm sm:text-base">PHP</p>
          </div>
        </div>
      </div>
    </section>
  );
}