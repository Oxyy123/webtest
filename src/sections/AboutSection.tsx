import { motion } from 'framer-motion';
import { Users, TrendingUp, Award, ArrowRight } from 'lucide-react';
import { FadeIn } from '@/components/animations/FadeIn';
import { CounterAnimation } from '@/components/animations/CounterAnimation';

const stats = [
  { icon: Award, value: 15, suffix: '+', label: 'Tahun Pengalaman' },
  { icon: Users, value: 50, suffix: 'K+', label: 'Ribu Nasabah' },
  { icon: TrendingUp, value: 2, suffix: 'T+', label: 'Triliun Dana Terdistribusi' },
];

export function AboutSection() {
  return (
    <section id="tentang" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <FadeIn direction="right" className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/images/about-img.jpg"
                alt="Tentang Kami"
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Floating Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-xl p-4 hidden sm:block"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-secondary/20 rounded-lg flex items-center justify-center">
                  <Award className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-primary">15+</p>
                  <p className="text-gray-500 text-sm">Tahun Berpengalaman</p>
                </div>
              </div>
            </motion.div>
          </FadeIn>

          {/* Content */}
          <div className="space-y-6">
            <FadeIn delay={0.1}>
              <span className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium">
                Tentang Kami
              </span>
            </FadeIn>

            <FadeIn delay={0.2}>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
                Partner Keuangan{' '}
                <span className="text-primary">Terpercaya</span>
                <br />
                untuk <span className="text-primary">Masa Depan Anda</span>
              </h2>
            </FadeIn>

            <FadeIn delay={0.3}>
              <p className="text-gray-600 text-lg leading-relaxed">
                Kami hadir sejak 2009 membantu ribuan nasabah mewujudkan impian finansial mereka. Dengan pengalaman dan komitmen, kami menjadi pilihan utama pinjaman jaminan BPKB di Indonesia. Kami memahami bahwa setiap individu memiliki kebutuhan finansial yang unik, dan kami siap memberikan solusi terbaik yang sesuai dengan kebutuhan Anda.
              </p>
            </FadeIn>

            {/* Stats */}
            <FadeIn delay={0.4}>
              <div className="grid grid-cols-3 gap-4 pt-4">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="text-center p-4 bg-gray-50 rounded-xl"
                  >
                    <stat.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                    <p className="text-2xl font-bold text-primary">
                      <CounterAnimation end={stat.value} suffix={stat.suffix} />
                    </p>
                    <p className="text-gray-500 text-xs mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={0.5}>
              <a
                href="#layanan"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary-light transition-colors group"
              >
                Pelajari Layanan Kami
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
