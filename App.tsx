import React, { useState, useEffect } from 'react';
import { Home, BookOpen, Mail, Users, Github, GamepadIcon, ArrowRight, Twitter, Instagram, Stamp as Steam, Gamepad2 } from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'projects', label: 'Projects', icon: GamepadIcon },
    { id: 'devlog', label: 'Devlog', icon: BookOpen },
    { id: 'contact', label: 'Contact', icon: Mail },
    { id: 'about', label: 'About Us', icon: Users },
  ];

  const socialLinks = [
    { icon: Twitter, href: 'https://x.com', label: 'X (Twitter)' },
    { icon: Twitter, href: 'https://bluesky.com', label: 'Bluesky', className: 'rotate-180' },
    { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
    { icon: Steam, href: 'https://store.steampowered.com', label: 'Steam' },
    { icon: Gamepad2, href: 'https://itch.io', label: 'Itch.io' },
    { icon: Github, href: 'https://github.com', label: 'GitHub' },
  ];

  return (
    <div className="min-h-screen bg-neutral-950 text-white selection:bg-purple-500/30">
      {/* Header */}
      <header className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/80' : 'bg-transparent'
      } backdrop-blur-sm`}>
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-4xl font-bold text-center animate-gradient bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-transparent bg-clip-text">
            Neon Brown Studios
          </h1>
          
          {/* Navigation */}
          <nav className="mt-4">
            <div className="flex justify-center space-x-8">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveSection(item.id)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                      activeSection === item.id
                        ? 'bg-purple-500 text-white shadow-lg shadow-purple-500/20'
                        : 'hover:bg-purple-500/20 hover:shadow-lg hover:shadow-purple-500/10'
                    }`}
                  >
                    <Icon size={18} className="transition-transform group-hover:scale-110" />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </div>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 pt-40 pb-24">
        {/* Home Section */}
        {activeSection === 'home' && (
          <div className="space-y-16 animate-fade-in">
            {/* Hero Section */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-purple-500/10">
              <img
                src="https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=2000&q=80"
                alt="Studio Banner"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex items-end p-8">
                <div className="animate-slide-up">
                  <h2 className="text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-purple-400">
                    Welcome to Neon Brown Studios
                  </h2>
                  <p className="text-xl text-gray-300 max-w-2xl leading-relaxed">
                    Creating immersive psychological horror games that challenge your perception of reality.
                  </p>
                </div>
              </div>
            </div>
            
            {/* About Studio */}
            <div className="bg-black/30 p-8 rounded-xl backdrop-blur-sm border border-white/5 shadow-lg shadow-purple-500/5">
              <p className="text-lg text-gray-300 leading-relaxed">
                We are an independent game development studio focused on crafting unique horror experiences 
                that blend psychological elements with compelling narratives. Our games aim to challenge 
                players' expectations and create memorable experiences that stay with them long after they've 
                finished playing.
              </p>
            </div>

            {/* Latest Project Preview */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-bold">Latest Project</h3>
                <button 
                  onClick={() => setActiveSection('projects')}
                  className="group flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors"
                >
                  <span>View All Projects</span>
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </button>
              </div>
              <div className="bg-black/30 rounded-xl overflow-hidden border border-white/5 shadow-lg shadow-purple-500/5">
                <div className="relative h-[300px] group">
                  <img
                    src="https://images.unsplash.com/photo-1536152470836-b943b246224c?auto=format&fit=crop&w=2000&q=80"
                    alt="Subject 19 Preview"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-6">
                    <h4 className="text-3xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-white to-purple-300">
                      Subject 19
                    </h4>
                    <p className="text-gray-300">A psychological horror experience</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Latest Updates */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-bold">Latest Updates</h3>
                <button 
                  onClick={() => setActiveSection('devlog')}
                  className="group flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors"
                >
                  <span>View Full Devlog</span>
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </button>
              </div>
              <div className="bg-black/30 p-6 rounded-xl border border-white/5 shadow-lg shadow-purple-500/5">
                <div className="text-purple-400 font-mono mb-2">01/04/25</div>
                <p className="text-gray-300">Over the past few days I have a simple movement rig on Godot fit with sprinting, a jump buffer mechanic and crouching. - D</p>
              </div>
            </div>

            {/* Quick Links */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <button 
                onClick={() => setActiveSection('about')}
                className="bg-black/30 p-8 rounded-xl border border-white/5 hover:bg-black/40 transition-all duration-300 group hover:shadow-lg hover:shadow-purple-500/5"
              >
                <div className="flex items-center justify-between mb-4">
                  <Users size={24} className="text-purple-400" />
                  <ArrowRight size={16} className="text-purple-400 transform group-hover:translate-x-1 transition-transform" />
                </div>
                <h4 className="text-xl font-bold mb-2">About Us</h4>
                <p className="text-gray-300">Meet the team behind Neon Brown Studios</p>
              </button>
              
              <button 
                onClick={() => setActiveSection('contact')}
                className="bg-black/30 p-8 rounded-xl border border-white/5 hover:bg-black/40 transition-all duration-300 group hover:shadow-lg hover:shadow-purple-500/5"
              >
                <div className="flex items-center justify-between mb-4">
                  <Mail size={24} className="text-purple-400" />
                  <ArrowRight size={16} className="text-purple-400 transform group-hover:translate-x-1 transition-transform" />
                </div>
                <h4 className="text-xl font-bold mb-2">Get in Touch</h4>
                <p className="text-gray-300">Have questions? Contact us</p>
              </button>
            </div>
          </div>
        )}

        {/* Projects Section */}
        {activeSection === 'projects' && (
          <div className="space-y-8 animate-fade-in">
            <h2 className="text-3xl font-bold mb-8">Our Projects</h2>
            
            <div className="bg-black/30 rounded-xl overflow-hidden border border-white/5 shadow-lg shadow-purple-500/5">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1536152470836-b943b246224c?auto=format&fit=crop&w=2000&q=80"
                  alt="Subject 19 Banner"
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
              </div>
              
              <div className="p-8 space-y-6">
                <div>
                  <h3 className="text-4xl font-bold mb-4 animate-gradient bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
                    Subject 19
                  </h3>
                  <p className="text-xl text-gray-300 mb-4">
                    Explore the facility and find the truth before you become like the others.
                  </p>
                </div>

                <div className="space-y-4">
                  <h4 className="text-xl font-semibold text-purple-400">About the Game</h4>
                  <p className="text-gray-300 leading-relaxed">
                    In this psychological horror game, you are Subject 19, the lone survivor of a failed 
                    experiment. Navigate through an abandoned facility where you once spent countless hours 
                    as a test subject. Uncover the dark truth behind the experiments while avoiding the 
                    fate that befell the others.
                  </p>
                </div>

                <div className="space-y-4">
                  <h4 className="text-xl font-semibold text-purple-400">Key Features</h4>
                  <ul className="list-disc list-inside text-gray-300 space-y-2">
                    <li>Immersive psychological horror experience</li>
                    <li>Complex movement system with sprint and crouch mechanics</li>
                    <li>Atmospheric abandoned facility environment</li>
                    <li>Deep narrative uncovered through exploration</li>
                  </ul>
                </div>

                <div className="mt-8 flex flex-wrap gap-4">
                  <a
                    href="https://store.steampowered.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-6 py-3 bg-[#1b2838] rounded-lg hover:bg-[#2a475e] transition-all duration-300 hover:shadow-lg hover:shadow-[#1b2838]/20 group"
                  >
                    <Steam size={20} className="transition-transform group-hover:scale-110" />
                    <span>Wishlist on Steam</span>
                  </a>
                  <a
                    href="https://kickstarter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-6 py-3 bg-[#05ce78] text-black rounded-lg hover:bg-[#00b36a] transition-all duration-300 hover:shadow-lg hover:shadow-[#05ce78]/20 group font-medium"
                  >
                    <span className="font-bold transition-transform group-hover:scale-110">★</span>
                    <span>Support on Kickstarter</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Devlog Section */}
        {activeSection === 'devlog' && (
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-3xl font-bold mb-8">Development Log</h2>
            
            <div className="space-y-6">
              {[
                {
                  date: '01/04/25',
                  content: 'Over the past few days I have a simple movement rig on Godot fit with sprinting, a jump buffer mechanic and crouching. - D'
                },
                {
                  date: '26/03/25',
                  content: 'Testing the devlog on the new website (still in beta) I will finish it over the next few days. - D'
                }
              ].map((entry, index) => (
                <div key={index} className="bg-black/30 p-6 rounded-xl border border-white/5 shadow-lg shadow-purple-500/5 hover:shadow-purple-500/10 transition-all duration-300">
                  <div className="text-purple-400 font-mono mb-2">{entry.date}</div>
                  <p className="text-gray-300">{entry.content}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Contact Section */}
        {activeSection === 'contact' && (
          <div className="max-w-2xl mx-auto animate-fade-in">
            <h2 className="text-3xl font-bold mb-8">Contact Us</h2>
            <div className="bg-black/30 p-8 rounded-xl border border-white/5 shadow-lg shadow-purple-500/5">
              <p className="text-lg text-gray-300 leading-relaxed">
                If you have any questions or inquiries, please reach out to us at{' '}
                <a
                  href="mailto:neonbrownstudios@gmail.com"
                  className="text-purple-400 hover:text-purple-300 transition-colors underline decoration-purple-400/30 hover:decoration-purple-300"
                >
                  neonbrownstudios@gmail.com
                </a>
              </p>
            </div>
          </div>
        )}

        {/* About Section */}
        {activeSection === 'about' && (
          <div className="max-w-2xl mx-auto animate-fade-in">
            <h2 className="text-3xl font-bold mb-8">About Us</h2>
            <div className="bg-black/30 p-8 rounded-xl border border-white/5 shadow-lg shadow-purple-500/5 space-y-6">
              <p className="text-xl text-purple-400">
                We are the best indie game development team within a metre of us!
              </p>
              
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Meet the Team:</h3>
                <div className="bg-black/30 p-6 rounded-lg border border-white/5 hover:shadow-lg hover:shadow-purple-500/5 transition-all duration-300">
                  <h4 className="text-lg font-semibold text-purple-400">Devendr</h4>
                  <p className="text-gray-300 leading-relaxed">
                    The main game designer, artist, and the main decision maker. I basically do everything here.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="fixed bottom-0 w-full bg-black/80 backdrop-blur-sm border-t border-white/5">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col items-center space-y-4">
            {/* Social Links */}
            <div className="flex items-center space-x-6">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-purple-400 transition-all duration-300 hover:scale-110"
                  title={link.label}
                >
                  <link.icon size={20} className={link.className} />
                </a>
              ))}
            </div>
            
            {/* Copyright */}
            <div className="text-sm text-gray-400">
              © 2025 Neon Brown Studios. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;