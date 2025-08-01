// src/components/Footer.jsx

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">About Us</h3>
            <p className="text-sm leading-relaxed">
              The University of Nature is committed to fostering ecological
              awareness and sustainable development.
            </p>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">Contact</h3>
            <ul className="text-sm space-y-2">
              <li>
                📍 Village: Gadgadwa, (Tolra), Police Station: Rehla, Palamu,
                Jharkhand – 822124
              </li>
              <li>
                Office Mailing: 2 No Town, Pratapnagar, Redma, P.O. Redma South,
                P.S. Medininagar, District: Palamu, State: Jharkhand – 822102
              </li>
              <li>📞 9470378404, 7992345197, 7033433128, 7061923665</li>
              <li>✉️ universityofnature65.com</li>
            </ul>
          </div>

          {/* Links Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">
              Quick Links
            </h3>
            <ul className="text-sm space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  Events
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright bar */}
        <div className="border-t border-gray-700 mt-10 pt-4 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} University of Nature. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
