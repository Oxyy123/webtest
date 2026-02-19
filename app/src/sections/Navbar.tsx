import { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, Phone } from 'lucide-react';
import { useScroll } from '@/hooks/useScroll';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const navLinks = [
  { name: 'Beranda', href: '#beranda' },
  { name: 'Layanan', href: '#layanan' },
  { name: 'Proses', href: '#proses' },
  { name: 'Testimoni', href: '#testimoni' },
  { name: 'FAQ', href: '#faq' },
];

export function Navbar() {
  const scrolled = useScroll(50);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-xl shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#beranda" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-secondary to-secondary-dark rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-lg">JB</span>
            </div>
            <div className="flex flex-col">
              <span className={`font-bold text-lg leading-tight transition-colors ${scrolled ? 'text-primary' : 'text-white'}`}>
                Jaminan<span className="text-secondary">BPKB</span>
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors relative group ${
                  scrolled ? 'text-slate-600 hover:text-primary' : 'text-white/90 hover:text-white'
                }`}
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Right Side */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:081398843775"
              className={`flex items-center gap-2 transition-colors ${
                scrolled ? 'text-slate-600 hover:text-primary' : 'text-white/90 hover:text-white'
              }`}
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm font-semibold">0813-9884-3775</span>
            </a>
            <Button
              className="bg-secondary hover:bg-secondary-dark text-white font-semibold px-6 py-2.5 rounded-xl transition-all duration-300 hover:shadow-glow hover:scale-105"
            >
              Ajukan Pinjaman
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <button className={`p-2 ${scrolled ? 'text-primary' : 'text-white'}`}>
                <Menu className="w-6 h-6" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-white border-l border-slate-200 w-[300px]">
              <div className="flex flex-col gap-6 mt-8">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-slate-700 hover:text-primary text-lg font-medium transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
                <hr className="border-slate-200" />
                <a
                  href="tel:081398843775"
                  className="flex items-center gap-2 text-slate-700"
                >
                  <Phone className="w-5 h-5 text-secondary" />
                  <span className="font-semibold">0813-9884-3775</span>
                </a>
                <Button
                  className="bg-secondary hover:bg-secondary-dark text-white font-semibold w-full rounded-xl"
                >
                  Ajukan Pinjaman
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </nav>
      </div>
    </motion.header>
  );
}
