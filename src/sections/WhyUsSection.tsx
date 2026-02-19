import { motion } from 'framer-motion';
import { Zap, Percent, UserCheck, Car, Shield, Check } from 'lucide-react';
import { FadeIn } from '@/components/animations/FadeIn';
import { StaggerContainer, StaggerItem } from '@/components/animations/StaggerContainer';

const features = [
  {
    icon: Zap,
    title: 'Proses Cepat 24 Jam',
    description: 'Dana cair dalam 24 jam setelah pengajuan disetujui.',
  },
  {
    icon: Percent,
    title: 'Bunga Kompetitif 0.9%',
    description: 'Suku bunga mulai dari 0.9% per bulan.',
  },
  {
    icon: UserCheck,
    title: 'Tanpa BI Checking',
    description: 'Fleksibel untuk berbagai profil nasabah.',
  },
  {
    icon: Car,
    title: 'Kendaraan Tetap Dipakai',
    description: 'Kendaraan Anda tetap bisa digunakan sehari-hari.',
  },
  {
    icon: Percent,
    title: 'Plafon Tinggi 90%',
    description: 'Pinjaman hingga 90% nilai kendaraan Anda.',
  },
  {
    icon: Shield,
    title: 'Terdaftar OJK',
    description: 'Berizin resmi dan diawasi oleh OJK.',
  },
];

export function WhyUsSection() {
  return (
    <section className="py-24 lg:py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <FadeIn direction="right" className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/images/team.jpg"
                alt="Our Team"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
            </div>
            {/* Floating stats */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-6"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-secondary to-secondary-dark rounded-xl flex items-center justify-center">
                  <Check className="w-7 h-7 text-white" />
                </div>
                <div>
                  <p className="text-3xl font-bold text-primary">50rb+</p>
                  <p className="text-slate-500 text-sm">Nasabah Puas</p>
                </div>
              </div>
            </motion.div>
          </FadeIn>

          {/* Content */}
          <div className="space-y-8">
            <FadeIn delay={0.1}>
              <span className="inline-block bg-secondary/10 text-secondary px-5 py-2 rounded-full text-sm font-semibold">
                Mengapa Memilih Kami
              </span>
            </FadeIn>

            <FadeIn delay={0.2}>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary leading-tight">
                Mengapa Memilih{' '}
                <span className="text-secondary">Jaminan BPKB?</span>
              </h2>
            </FadeIn>

            <FadeIn delay={0.3}>
              <p className="text-slate-600 text-lg">
                Kami berkomitmen memberikan layanan terbaik dengan berbagai keunggulan yang membuat kami berbeda dari yang lain.
              </p>
            </FadeIn>

            {/* Features Grid */}
            <StaggerContainer className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <StaggerItem key={index}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="flex items-start gap-4 p-4 rounded-2xl hover:bg-white hover:shadow-lg transition-all duration-300"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-secondary/20 to-secondary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-primary mb-1">{feature.title}</h4>
                      <p className="text-slate-500 text-sm">{feature.description}</p>
                    </div>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </div>
    </section>
  );
}
