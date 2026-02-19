import { motion } from 'framer-motion';
import { Car, Bike, RefreshCw, ArrowLeftRight, ArrowRight, Check } from 'lucide-react';
import { FadeIn } from '@/components/animations/FadeIn';
import { StaggerContainer, StaggerItem } from '@/components/animations/StaggerContainer';

const services = [
  {
    icon: Car,
    title: 'Pinjaman BPKB Mobil',
    description: 'Dapatkan pinjaman dengan plafon tinggi menggunakan jaminan BPKB mobil Anda.',
    features: [
      'Plafon hingga 90% nilai kendaraan',
      'Tenor hingga 48 bulan',
      'Bunga kompetitif 0.9%',
      'Proses 24 jam',
    ],
    color: 'from-blue-500 to-blue-600',
    bgColor: 'bg-blue-50',
  },
  {
    icon: Bike,
    title: 'Pinjaman BPKB Motor',
    description: 'Solusi keuangan cepat dengan jaminan BPKB motor. Proses mudah dan cepat.',
    features: [
      'Plafon hingga 85% nilai kendaraan',
      'Tenor hingga 36 bulan',
      'Tanpa survey rumah',
      'Pencairan dalam 24 jam',
    ],
    color: 'from-emerald-500 to-emerald-600',
    bgColor: 'bg-emerald-50',
  },
  {
    icon: RefreshCw,
    title: 'Refinancing',
    description: 'Refinancing kredit kendaraan Anda untuk mendapatkan suku bunga lebih rendah.',
    features: [
      'Bunga lebih rendah',
      'Plafon tambahan',
      'Proses takeover cepat',
      'Tanpa biaya tersembunyi',
    ],
    color: 'from-violet-500 to-violet-600',
    bgColor: 'bg-violet-50',
  },
  {
    icon: ArrowLeftRight,
    title: 'Takeover Kredit',
    description: 'Pindahkan kredit kendaraan Anda ke kami dengan syarat lebih menguntungkan.',
    features: [
      'Suku bunga lebih rendah',
      'Angsuran lebih ringan',
      'Proses cepat',
      'Dana tambahan',
    ],
    color: 'from-amber-500 to-amber-600',
    bgColor: 'bg-amber-50',
  },
];

export function ServicesSection() {
  return (
    <section id="layanan" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <FadeIn>
            <span className="inline-block bg-secondary/10 text-secondary px-5 py-2 rounded-full text-sm font-semibold mb-4">
              Layanan Kami
            </span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-4">
              Pilih Layanan Sesuai{' '}
              <span className="text-secondary">Kebutuhan Anda</span>
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-slate-600 text-lg">
              Berbagai pilihan layanan pinjaman dengan jaminan BPKB untuk memenuhi kebutuhan finansial Anda.
            </p>
          </FadeIn>
        </div>

        {/* Services Grid */}
        <StaggerContainer className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <StaggerItem key={index}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className="group bg-white rounded-3xl border border-slate-100 shadow-card hover:shadow-card-hover p-8 transition-all duration-300 h-full"
              >
                <div className="flex flex-col h-full">
                  {/* Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-primary mb-3">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 mb-6">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-3 mb-8 flex-grow">
                    {service.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center gap-3">
                        <div className={`w-6 h-6 ${service.bgColor} rounded-full flex items-center justify-center flex-shrink-0`}>
                          <Check className={`w-4 h-4 ${service.color.replace('from-', 'text-').replace('to-', '').split(' ')[0]}`} />
                        </div>
                        <span className="text-slate-600">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-secondary font-semibold hover:text-secondary-dark transition-colors group/link"
                  >
                    Pelajari Lebih Lanjut
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                  </a>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
