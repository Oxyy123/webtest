import { Facebook, Instagram, Twitter, Linkedin, Phone, Mail, MapPin, ArrowUp } from 'lucide-react';
import { useScroll } from '@/hooks/useScroll';

const quickLinks = [
  { name: 'Beranda', href: '#beranda' },
  { name: 'Layanan', href: '#layanan' },
  { name: 'Proses', href: '#proses' },
  { name: 'Testimoni', href: '#testimoni' },
  { name: 'FAQ', href: '#faq' },
];

const services = [
  { name: 'Pinjaman BPKB Mobil', href: '#' },
  { name: 'Pinjaman BPKB Motor', href: '#' },
  { name: 'Refinancing', href: '#' },
  { name: 'Takeover', href: '#' },
];

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
];

export function Footer() {
  const scrolled = useScroll(300);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-primary-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <a href="#beranda" className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-secondary to-secondary-dark rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">JB</span>
              </div>
              <div>
                <span className="text-white font-bold text-xl">
                  Jaminan<span className="text-secondary">BPKB</span>
                </span>
              </div>
            </a>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              Solusi keuangan terpercaya untuk mewujudkan impian Anda. Pinjaman dana tunai dengan jaminan BPKB mobil dan motor.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center hover:bg-secondary transition-all duration-300 hover:scale-110"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white mb-6 text-lg">Tautan Cepat</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-secondary text-sm transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-white mb-6 text-lg">Layanan</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href={service.href}
                    className="text-white/70 hover:text-secondary text-sm transition-colors duration-300"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-white mb-6 text-lg">Kontak Kami</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:081398843775"
                  className="flex items-center gap-3 text-white/70 hover:text-secondary text-sm transition-colors duration-300"
                >
                  <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center">
                    <Phone className="w-5 h-5 text-secondary" />
                  </div>
                  0813-9884-3775
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@jaminanbpkb.com"
                  className="flex items-center gap-3 text-white/70 hover:text-secondary text-sm transition-colors duration-300"
                >
                  <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center">
                    <Mail className="w-5 h-5 text-secondary" />
                  </div>
                  info@jaminanbpkb.com
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-white/70 text-sm">
                  <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-secondary" />
                  </div>
                  <span>Jl. Sudirman No. 123<br />Jakarta Pusat, 10220</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-white/60 text-sm">
              © 2026 Jaminan BPKB. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-white/60 hover:text-secondary text-sm transition-colors duration-300">
                Kebijakan Privasi
              </a>
              <a href="#" className="text-white/60 hover:text-secondary text-sm transition-colors duration-300">
                Syarat & Ketentuan
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 w-14 h-14 bg-secondary hover:bg-secondary-dark text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-500 z-50 ${
          scrolled ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
        aria-label="Kembali ke atas"
      >
        <ArrowUp className="w-6 h-6" />
      </button>
    </footer>
  );
}
