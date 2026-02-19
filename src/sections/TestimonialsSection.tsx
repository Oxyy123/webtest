import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { FadeIn } from '@/components/animations/FadeIn';

const testimonials = [
  {
    name: 'Ahmad Rizky',
    role: 'Pengusaha',
    avatar: '/images/avatar-1.jpg',
    rating: 5,
    quote: 'Proses sangat cepat dan mudah. Dana cair dalam sehari! Saya bisa mengembangkan usaha saya tanpa harus menunggu lama. Pelayanan yang sangat memuaskan.',
  },
  {
    name: 'Dewi Susanti',
    role: 'Wiraswasta',
    avatar: '/images/avatar-2.jpg',
    rating: 5,
    quote: 'Pelayanan yang sangat memuaskan. Staff ramah dan profesional. Suku bunga juga sangat kompetitif. Sangat recommended untuk yang butuh dana cepat.',
  },
  {
    name: 'Budi Santoso',
    role: 'Karyawan',
    avatar: '/images/avatar-3.jpg',
    rating: 5,
    quote: 'Sangat terbantu dengan layanan Jaminan BPKB. Proses mudah, kendaraan tetap bisa dipakai. Terima kasih atas bantuannya!',
  },
  {
    name: 'Siti Aminah',
    role: 'Ibu Rumah Tangga',
    avatar: '/images/avatar-4.jpg',
    rating: 5,
    quote: 'Sangat puas dengan pelayanannya. Proses cepat, staff ramah, dan bunga sangat bersaing. Recommended banget!',
  },
  {
    name: 'Hendra Wijaya',
    role: 'Pemilik Toko',
    avatar: '/images/avatar-5.jpg',
    rating: 5,
    quote: 'Butuh modal usaha cepat, Jaminan BPKB solusinya. Proses 24 jam dan tanpa ribet. Terima kasih!',
  },
  {
    name: 'Maya Putri',
    role: 'Freelancer',
    avatar: '/images/avatar-6.jpg',
    rating: 5,
    quote: 'Layanan terbaik untuk pinjaman dengan jaminan BPKB. Proses transparan dan tanpa biaya tersembunyi.',
  },
];

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-play
  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, []);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 100 : -100,
      opacity: 0,
    }),
  };

  return (
    <section id="testimoni" className="py-24 lg:py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <FadeIn>
            <span className="inline-block bg-secondary/10 text-secondary px-5 py-2 rounded-full text-sm font-semibold mb-4">
              Testimoni
            </span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-4">
              Apa Kata{' '}
              <span className="text-secondary">Nasabah Kami?</span>
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-slate-600 text-lg">
              Dengarkan pengalaman langsung dari nasabah yang telah merasakan layanan terbaik kami.
            </p>
          </FadeIn>
        </div>

        {/* Testimonials Carousel */}
        <FadeIn delay={0.3}>
          <div className="relative max-w-4xl mx-auto">
            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-16 z-10 w-14 h-14 bg-white rounded-full shadow-lg flex items-center justify-center text-primary hover:bg-secondary hover:text-white transition-all duration-300"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-16 z-10 w-14 h-14 bg-white rounded-full shadow-lg flex items-center justify-center text-primary hover:bg-secondary hover:text-white transition-all duration-300"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Main Card */}
            <div className="overflow-hidden px-4">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="bg-white rounded-3xl shadow-xl p-8 lg:p-12"
                >
                  <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
                    {/* Avatar */}
                    <div className="flex-shrink-0">
                      <div className="relative">
                        <img
                          src={testimonials[currentIndex].avatar}
                          alt={testimonials[currentIndex].name}
                          className="w-28 h-28 lg:w-36 lg:h-36 rounded-full object-cover border-4 border-secondary/20"
                        />
                        <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
                          <Quote className="w-6 h-6 text-white" />
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 text-center lg:text-left">
                      {/* Rating */}
                      <div className="flex items-center justify-center lg:justify-start gap-1 mb-4">
                        {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
                        ))}
                      </div>

                      {/* Quote */}
                      <p className="text-slate-700 text-xl leading-relaxed mb-6 italic">
                        "{testimonials[currentIndex].quote}"
                      </p>

                      {/* Author */}
                      <div>
                        <p className="font-bold text-primary text-lg">{testimonials[currentIndex].name}</p>
                        <p className="text-slate-500">{testimonials[currentIndex].role}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Dots */}
            <div className="flex items-center justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1);
                    setCurrentIndex(index);
                  }}
                  className={`h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-secondary w-10'
                      : 'bg-slate-300 w-3 hover:bg-slate-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
