export default function Footer() {
  return (
    <footer className="bg-black/20 backdrop-blur-sm py-6 sm:py-8">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0 text-center md:text-left">
            <h2 className="text-xl sm:text-2xl font-bold text-white">Ferdi</h2>
            <p className="text-gray-300 text-sm sm:text-base">Web Frontend & Backend</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            <a href="#home" className="text-gray-300 hover:text-white transition-colors duration-300 text-sm sm:text-base">Home</a>
            <a href="#about" className="text-gray-300 hover:text-white transition-colors duration-300 text-sm sm:text-base">About</a>
            <a href="#projects" className="text-gray-300 hover:text-white transition-colors duration-300 text-sm sm:text-base">Projects</a>
            <a href="#contact" className="text-gray-300 hover:text-white transition-colors duration-300 text-sm sm:text-base">Contact</a>
          </div>
        </div>
        <div className="border-t border-white/20 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center text-gray-400 text-sm sm:text-base">
          <p>© {new Date().getFullYear()} Ferdi Portfolio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}