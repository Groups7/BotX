import React from "react";
import {
  Bot,
  Mail,
  Phone,
  MessageCircle,
  ExternalLink,
} from "lucide-react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  // TODO: replace with your real contact endpoints
  const handleWhatsAppClick = () => {
    // Example: https://wa.me/<number>?text=<encoded message>
    window.open(
      "https://wa.me/15551234567?text=Hi%20BotX%2C%20I%27d%20like%20to%20learn%20more%20about%20your%20AI%20trading%20solutions.",
      "_blank"
    );
  };

  const handleLiveChatClick = () => {
    // Fallback to email if you don't have a live chat URL
    window.location.href = "mailto:support@botx.ai?subject=Support%20Request";
  };

  return (
    <footer className="bg-gradient-to-t from-gray-900 to-black border-t border-green-500/20">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
                <Bot className="w-6 h-6 text-black" />
              </div>
              <span className="text-2xl font-bold text-white">
                Bot<span className="text-green-400">X</span>
              </span>
            </div>

            <p className="text-gray-300 leading-relaxed">
              AI Trading that Performs. Every Market. Every Time.
            </p>
            <p className="text-sm text-gray-400">
              Empowering traders worldwide with cutting‑edge AI technology for
              consistent, profitable trading results.
            </p>

            <div className="flex items-center gap-3">
              <button
                onClick={handleWhatsAppClick}
                className="w-10 h-10 rounded-lg bg-green-500/20 hover:bg-green-500/30 text-green-400 hover:text-green-300 transition-colors"
                aria-label="Contact on WhatsApp"
              >
                <MessageCircle className="w-5 h-5 mx-auto" />
              </button>
              <button
                onClick={handleLiveChatClick}
                className="w-10 h-10 rounded-lg bg-green-500/20 hover:bg-green-500/30 text-green-400 hover:text-green-300 transition-colors"
                aria-label="Contact via Email"
              >
                <Mail className="w-5 h-5 mx-auto" />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#home"
                  className="text-gray-300 hover:text-green-400 transition-colors flex items-center"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#products"
                  className="text-gray-300 hover:text-green-400 transition-colors flex items-center"
                >
                  Products
                </a>
              </li>
              <li>
                <a
                  href="#performance"
                  className="text-gray-300 hover:text-green-400 transition-colors flex items-center"
                >
                  Performance
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-gray-300 hover:text-green-400 transition-colors flex items-center"
                >
                  About Us
                  <ExternalLink className="w-3 h-3 ml-1" />
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-300 hover:text-green-400 transition-colors flex items-center"
                >
                  Contact Us
                  <ExternalLink className="w-3 h-3 ml-1" />
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-bold mb-6">Legal</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#terms"
                  className="text-gray-300 hover:text-green-400 transition-colors flex items-center"
                >
                  Terms &amp; Conditions
                  <ExternalLink className="w-3 h-3 ml-1" />
                </a>
              </li>
              <li>
                <a
                  href="#privacy"
                  className="text-gray-300 hover:text-green-400 transition-colors flex items-center"
                >
                  Privacy Policy
                  <ExternalLink className="w-3 h-3 ml-1" />
                </a>
              </li>
              <li>
                <a
                  href="#refund"
                  className="text-gray-300 hover:text-green-400 transition-colors flex items-center"
                >
                  Refund Policy
                  <ExternalLink className="w-3 h-3 ml-1" />
                </a>
              </li>
              <li>
                <a
                  href="#risk"
                  className="text-gray-300 hover:text-green-400 transition-colors"
                >
                  Risk Disclosure
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold mb-6">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MessageCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-gray-300 font-medium">WhatsApp</div>
                  <button
                    onClick={handleWhatsAppClick}
                    className="text-green-400 hover:text-green-300 transition-colors text-sm"
                  >
                    Message Us Instantly
                  </button>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-gray-300 font-medium">Email</div>
                  <button
                    onClick={handleLiveChatClick}
                    className="text-green-400 hover:text-green-300 transition-colors text-sm"
                  >
                    Chat with Support
                  </button>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-gray-300 font-medium">24/7 Support</div>
                  <div className="text-gray-400 text-sm">
                    Available worldwide
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-green-500/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-gray-400 text-sm">
              © {currentYear} BotX. All rights reserved.
            </div>

            <div className="flex items-center gap-6 text-sm text-gray-400">
              <span>🔒 Secure Trading</span>
              <span>🏆 Award Winning</span>
              <span>✅ Verified Performance</span>
            </div>

            <div className="text-gray-400 text-sm">
              Powered by Advanced AI Technology
            </div>
          </div>
        </div>
      </div>

      {/* Risk disclaimer */}
      <div className="bg-gray-900/50 border-t border-green-500/10">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-4">
          <p className="text-xs text-gray-500 text-center leading-relaxed">
            <strong>Risk Warning:</strong> Trading forex, cryptocurrencies and
            CFDs involves substantial risk of loss and is not suitable for all
            investors. Past performance does not guarantee future results.
            Please ensure you fully understand the risks involved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
 