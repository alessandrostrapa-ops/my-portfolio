export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-2xl font-semibold text-white mb-4">Contact</h2>
        <p className="text-gray-300 mb-6">Interested in working together? I'm open to freelance and junior roles. Use the form below or reach out via LinkedIn / GitHub.</p>

        <div className="mx-auto max-w-xl">
          <form action="https://formsubmit.co/robertstrapasson@gmail.com" method="POST" className="grid gap-4">
            <input type="hidden" name="_subject" value="New message from portfolio" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_next" value="https://alessandrostrapasson.dev/thanks" />
            
            <div className="glass-panel group focus-within:scale-[1.02] transition-transform duration-300">
              <label className="sr-only" htmlFor="name">Name</label>
              <input 
                id="name" 
                name="name" 
                required 
                placeholder="Your name" 
                className="w-full px-4 py-3 bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-0" />
            </div>

            <div className="glass-panel group focus-within:scale-[1.02] transition-transform duration-300">
              <label className="sr-only" htmlFor="email">Email</label>
              <input 
                id="email" 
                name="email" 
                type="email" 
                required 
                placeholder="you@example.com" 
                className="w-full px-4 py-3 bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-0" />
            </div>

            <div className="glass-panel group focus-within:scale-[1.02] transition-transform duration-300">
              <label className="sr-only" htmlFor="message">Message</label>
              <textarea 
                id="message" 
                name="message" 
                rows="5" 
                required 
                placeholder="How can I help?" 
                className="w-full px-4 py-3 bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-0"></textarea>
            </div>

            <div className="flex items-center justify-center gap-4">
              <button type="submit" className="btn-primary hover:scale-105 transition-transform">Send message</button>
              <a href="mailto:robertstrapasson@gmail.com" className="glass-panel px-6 py-3 hover:scale-105 transition-transform">Email me</a>
            </div>
          </form>
        </div>

        <div className="mt-8 flex items-center justify-center gap-4">
          <a href="https://www.linkedin.com/in/robert-strapasson-936747311/" 
             target="_blank" 
             rel="noreferrer" 
             className="glass-panel px-6 py-3 hover:scale-105 transition-transform">
            LinkedIn
          </a>
          <a href="https://github.com/alessandrostrapa-ops" 
             target="_blank" 
             rel="noreferrer" 
             className="glass-panel px-6 py-3 hover:scale-105 transition-transform">
            GitHub
          </a>
        </div>
      </div>
    </section>
  )
}
