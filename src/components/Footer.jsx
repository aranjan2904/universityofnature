import { Link } from 'react-router-dom';
import logo from '../assets/logo.jpg';
import { Facebook, Twitter, Linkedin, Instagram, MapPin, Phone, Mail, ArrowRight } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* University Brand */}
            <div className="lg:col-span-4">
              <Link to="/" className="flex items-center space-x-3 group">
                <div className="relative">
                  <div className="absolute inset-0 bg-emerald-500 rounded-full blur-md opacity-50 group-hover:opacity-75 transition-opacity"></div>
                  <img src={logo} alt="University of Nature Logo" className="h-12 w-12 rounded-full relative z-10" />
                </div>
                <span className="text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors">University of Nature</span>
              </Link>
              <p className="mt-6 text-gray-400 leading-relaxed max-w-sm">
                Pioneering sustainable education for a greener tomorrow. Join us in creating a world where knowledge meets nature.
              </p>
              <div className="mt-6 flex space-x-4">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-700/50 rounded-lg text-gray-400 hover:bg-emerald-500 hover:text-white transition-all duration-300">
                  <Facebook size={18} />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-700/50 rounded-lg text-gray-400 hover:bg-emerald-500 hover:text-white transition-all duration-300">
                  <Twitter size={18} />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-700/50 rounded-lg text-gray-400 hover:bg-emerald-500 hover:text-white transition-all duration-300">
                  <Linkedin size={18} />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-700/50 rounded-lg text-gray-400 hover:bg-emerald-500 hover:text-white transition-all duration-300">
                  <Instagram size={18} />
                </a>
              </div>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-4">
              <h3 className="text-lg font-semibold text-white mb-6">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3 group">
                  <MapPin className="text-emerald-400 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="text-sm font-medium text-white">Village Campus</p>
                    <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                      Gadgadwa (Tolra), Rehla, Palamu, Jharkhand – 822124
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 group">
                  <MapPin className="text-emerald-400 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="text-sm font-medium text-white">Office Address</p>
                    <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                      2 No Town, Pratapnagar, Redma, P.O. Redma South, Medininagar, Palamu, Jharkhand – 822102
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 group">
                  <Phone className="text-emerald-400 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="text-sm font-medium text-white">Call Us</p>
                    <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                      9470378404, 7992345197, 7033433128, 7061923665
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 group">
                  <Mail className="text-emerald-400 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="text-sm font-medium text-white">Email</p>
                    <a href="mailto:universityofnature65@gmail.com" className="text-sm text-gray-400 hover:text-emerald-400 transition-colors">
                      universityofnature65@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="lg:col-span-2">
              <h3 className="text-lg font-semibold text-white mb-6">Quick Links</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-3">
                  <Link to="/" className="flex items-center text-gray-400 hover:text-emerald-400 transition-colors group">
                    <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-x-2 group-hover:translate-x-0" />
                    Home
                  </Link>
                  <Link to="/about" className="flex items-center text-gray-400 hover:text-emerald-400 transition-colors group">
                    <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-x-2 group-hover:translate-x-0" />
                    About Us
                  </Link>
                  <Link to="/contact" className="flex items-center text-gray-400 hover:text-emerald-400 transition-colors group">
                    <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-x-2 group-hover:translate-x-0" />
                    Contact
                  </Link>
                </div>
                <div className="space-y-3">
                  <Link to="/programs" className="flex items-center text-gray-400 hover:text-emerald-400 transition-colors group">
                    <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-x-2 group-hover:translate-x-0" />
                    Programs
                  </Link>
                  <Link to="/faculty" className="flex items-center text-gray-400 hover:text-emerald-400 transition-colors group">
                    <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-x-2 group-hover:translate-x-0" />
                    Faculty
                  </Link>
                  <Link to="/blog" className="flex items-center text-gray-400 hover:text-emerald-400 transition-colors group">
                    <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-x-2 group-hover:translate-x-0" />
                    Blog
                  </Link>
                </div>
              </div>
            </div>

            {/* Newsletter */}
            <div className="lg:col-span-2">
              <h3 className="text-lg font-semibold text-white mb-6">Stay Updated</h3>
              <p className="text-sm text-gray-400 mb-4">Get the latest news about our programs and events.</p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex-1 px-4 py-2 bg-slate-700/50 border border-slate-600 rounded-l-lg focus:outline-none focus:border-emerald-500 text-white placeholder-gray-400 transition-colors"
                />
                <button className="px-4 py-2 bg-emerald-500 text-white rounded-r-lg hover:bg-emerald-600 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-700/50 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-400">
              &copy; {new Date().getFullYear()} University of Nature. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
