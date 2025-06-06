export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-sky-100 via-blue-200 to-indigo-200 dark:from-slate-800 dark:via-indigo-900 dark:to-slate-900 transition-colors duration-500 py-8">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0 text-center md:text-left">
            <h2 className="text-2xl font-bold text-white">Ferdi</h2>
            <p className="text-gray-300 text-base">Web Frontend</p>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            <a href="#home" className="text-gray-300 hover:text-white transition-colors duration-300 text-base">Home</a>
            <a href="#about" className="text-gray-300 hover:text-white transition-colors duration-300 text-base">About</a>
            <a href="#skills" className="text-gray-300 hover:text-white transition-colors duration-300 text-base">Skills</a>
            <a href="#projects" className="text-gray-300 hover:text-white transition-colors duration-300 text-base">Projects</a>
            <a href="#contact" className="text-gray-300 hover:text-white transition-colors duration-300 text-base">Contact</a>
          </div>
        </div>
        <div className="border-t border-white/20 mt-8 pt-8 text-center text-gray-400 text-base">
          <p>© {new Date().getFullYear()} Ferdi Portfolio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}