import { Mail, Instagram, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-200 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">

          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-blue-800 mb-2">Artify</h3>
            <p className="text-sm text-gray-500">
              Share your creative works with the world.
            </p>
          </div>

          {/* Platform */}
          <div>
            <h4 className="font-semibold text-gray-800 mb-4">Platform</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-gray-500 hover:text-indigo-600 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-500 hover:text-indigo-600 transition-colors">
                  Explore
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-500 hover:text-indigo-600 transition-colors">
                  Artists
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold text-gray-800 mb-4">Support</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-gray-500 hover:text-indigo-600 transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-500 hover:text-indigo-600 transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-500 hover:text-indigo-600 transition-colors">
                  Help Center
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-gray-800 mb-4">Contact</h4>

            <div className="flex items-center gap-2 text-gray-500 mb-4">
              <Mail size={16} />
              <a
                href="mailto:hello@artify.com"
                className="text-sm hover:text-indigo-600 transition-colors"
              >
                hello@artify.com
              </a>
            </div>

            <div className="flex gap-3">
              <a className="w-9 h-9 bg-blue-800 text-white rounded-lg flex items-center justify-center hover:bg-indigo-500 transition">
                <Twitter size={16} />
              </a>

              <a className="w-9 h-9 bg-blue-800 text-white rounded-lg flex items-center justify-center hover:bg-indigo-500 transition">
                <Instagram size={16} />
              </a>

              <a className="w-9 h-9 bg-blue-800 text-white rounded-lg flex items-center justify-center hover:bg-indigo-500 transition">
                <Linkedin size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
            <p>© {currentYear} Artify. All rights reserved.</p>

            <div className="flex gap-6">
              <a href="#" className="hover:text-indigo-600 transition">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-indigo-600 transition">
                Terms of Service
              </a>
              <a href="#" className="hover:text-indigo-600 transition">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;