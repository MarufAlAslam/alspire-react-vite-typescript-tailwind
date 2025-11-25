import { Instagram, Dribbble, Mail } from "lucide-react";
import { motion } from "framer-motion";

// Custom X (Twitter) Icon Component
const XIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const footerLinks = {
  quickLinks: [
    { label: "Home", href: "#" },
    { label: "Features", href: "#" },
    { label: "Pricing", href: "#" },
    { label: "Contact", href: "#" },
  ],
  legalLinks: [
    { label: "Terms Of Service", href: "#" },
    { label: "Privacy Policy", href: "#" },
    { label: "Cookie Policy", href: "#" },
    { label: "GDPR Compliance", href: "#" },
  ],
  supportLinks: [
    { label: "Email Support", href: "#" },
    { label: "Phone Support", href: "#" },
  ],
};

const socialLinks = [
  { icon: XIcon, href: "#", label: "X" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Dribbble, href: "#", label: "Dribbble" },
  { icon: Mail, href: "#", label: "Email" },
];

export function Footer() {
  return (
    <>
      <footer className="bg-[#F5F5F5] py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 xl:grid-cols-4 gap-8 xl:gap-0 text-center xl:text-left">
            {/* Quick Links */}
            <div className="flex flex-col items-center xl:items-start">
              <h3 className="text-[20px] font-bold text-black mb-6">Quick Links</h3>
              <ul className="space-y-3">
                {footerLinks.quickLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-[16px] text-gray-600 hover:text-black transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Links */}
            <div className="flex flex-col items-center xl:items-start">
              <h3 className="text-[20px] font-bold text-black mb-6">Legal Links</h3>
              <ul className="space-y-3">
                {footerLinks.legalLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-[16px] text-gray-600 hover:text-black transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support & Contact */}
            <div className="flex flex-col items-center xl:items-start">
              <h3 className="text-[20px] font-bold text-black mb-6">
                Support & Contact
              </h3>
              <ul className="space-y-3">
                {footerLinks.supportLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-[16px] text-gray-600 hover:text-black transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Stay Connect - spans full width on mobile/tablet, 1 column on desktop */}
            <div className="flex flex-col items-center xl:items-start">
              <h3 className="text-[20px] font-bold text-black mb-6">Stay Connect</h3>
              <div className="flex gap-4 justify-center xl:justify-start">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 flex items-center justify-center text-black hover:text-blue-600 transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon className="w-6 h-6" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-300 mt-12"></div>
        </div>
      </footer>

      {/* Full Width Alspire SVG Logo with Animation */}
      <div className="bg-[#F5F5F5] pb-8 px-5 md:px-[30px] overflow-hidden" style={{ perspective: '1000px' }}>
        <motion.img
          src="/src/assets/aispire.svg"
          alt="Alspire"
          className="w-full h-auto"
          initial={{ 
            opacity: 0.4,
            rotateX: 35,
            y: 30
          }}
          whileInView={{ 
            opacity: 1,
            rotateX: 0,
            y: 0
          }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{
            duration: 1,
            ease: [0.25, 0.1, 0.25, 1]
          }}
          style={{ transformStyle: 'preserve-3d' }}
        />
      </div>
    </>
  );
}
