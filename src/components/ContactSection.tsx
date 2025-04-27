export default function ContactSection() {
  return (
    <section id="contact" className="py-12 sm:py-20 bg-black/10 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-8 sm:mb-12">Get In Touch</h2>
        <div className="max-w-2xl mx-auto">
          <form className="space-y-4 sm:space-y-6">
            <div>
              <label htmlFor="name" className="block text-white mb-1 sm:mb-2 text-sm sm:text-base">Your Name</label>
              <input
                type="text"
                id="name"
                className="w-full bg-white/20 backdrop-blur-sm rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 text-sm sm:text-base"
                placeholder="Ferdi"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-white mb-1 sm:mb-2 text-sm sm:text-base">Email Address</label>
              <input
                type="email"
                id="email"
                className="w-full bg-white/20 backdrop-blur-sm rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 text-sm sm:text-base"
                placeholder="Ferdi@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-white mb-1 sm:mb-2 text-sm sm:text-base">Your Message</label>
              <textarea
                id="message"
                rows={4}
                className="w-full bg-white/20 backdrop-blur-sm rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 text-sm sm:text-base"
                placeholder="Hello Ferdi, I'd like to talk about..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-yellow-500 text-black font-bold py-2 sm:py-3 px-4 sm:px-6 rounded-lg hover:bg-yellow-600 transition-colors duration-300 text-sm sm:text-base"
            >
              Send Message
            </button>
          </form>
          <div className="mt-8 sm:mt-12 text-center">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">Or reach me directly</h3>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
              <a href="mailto:ferdi@example.com" className="text-white hover:text-yellow-500 transition-colors duration-300 text-sm sm:text-base">
                ✉️ Email
              </a>
              <a href="https://linkedin.com/in/ferdi" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-500 transition-colors duration-300 text-sm sm:text-base">
                🔗 LinkedIn
              </a>
              <a href="https://github.com/Ferdiii06" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-500 transition-colors duration-300 text-sm sm:text-base">
                💻 GitHub
              </a>
              <a href="https://instagram.com/Ferdiii_f" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-500 transition-colors duration-300 text-sm sm:text-base">
                📷 Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}