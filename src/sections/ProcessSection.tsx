import { motion } from 'framer-motion';
import { FileText, Search, Car, Wallet, ArrowRight } from 'lucide-react';
import { FadeIn } from '@/components/animations/FadeIn';
import { StaggerContainer, StaggerItem } from '@/components/animations/StaggerContainer';
import { Button } from '@/components/ui/button';

const steps = [
  {
    number: '01',
    icon: FileText,
    title: 'Ajukan Online/Offline',
    description: 'Isi formulir online atau kunjungi cabang terdekat. Tim kami siap membantu.',
  },
  {
    number: '02',
    icon: Search,
    title: 'Verifikasi Data',
    description: 'Tim kami akan memverifikasi data dan dokumen Anda dalam 1-2 jam.',
  },
  {
    number: '03',
    icon: Car,
    title: 'Survey Kendaraan',
    description: 'Penilaian kondisi dan nilai kendaraan oleh tim surveyor profesional.',
  },
  {
    number: '04',
    icon: Wallet,
    title: 'Dana Cair',
    description: 'Dana cair ke rekening Anda dalam 24 jam setelah persetujuan.',
  },
];

export function ProcessSection() {
  return (
    <section id="proses" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <FadeIn>
            <span className="inline-block bg-secondary/10 text-secondary px-5 py-2 rounded-full text-sm font-semibold mb-4">
              Proses Pengajuan
            </span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-4">
              4 Langkah Mudah{' '}
              <span className="text-secondary">Mendapatkan Pinjaman</span>
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-slate-600 text-lg">
              Proses pengajuan yang simpel dan transparan. Dari aplikasi hingga pencairan dana.
            </p>
          </FadeIn>
        </div>

        {/* Steps */}
        <StaggerContainer className="relative">
          {/* Connection Line - Desktop */}
          <div className="hidden lg:block absolute top-24 left-[12.5%] right-[12.5%] h-1">
            <div className="w-full h-full bg-gradient-to-r from-secondary/30 via-secondary to-secondary/30 rounded-full" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <StaggerItem key={index}>
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                  className="relative text-center group"
                >
                  {/* Number Badge */}
                  <div className="relative inline-flex items-center justify-center mb-8">
                    <div className="w-20 h-20 bg-gradient-to-br from-secondary to-secondary-dark rounded-2xl flex items-center justify-center shadow-lg shadow-secondary/30 group-hover:scale-110 transition-transform duration-300">
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="absolute -top-3 -right-3 w-10 h-10 bg-white border-2 border-secondary rounded-full flex items-center justify-center">
                      <span className="text-secondary font-bold text-sm">{step.number}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-primary mb-3">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>

        {/* CTA Banner */}
        <FadeIn delay={0.5} className="mt-20">
          <div className="relative bg-gradient-to-r from-primary to-primary-light rounded-3xl p-10 lg:p-12 text-center overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
            
            <div className="relative z-10">
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-6">
                Siap mengajukan pinjaman? Prosesnya mudah dan cepat!
              </h3>
              <Button
                className="bg-secondary hover:bg-secondary-dark text-white font-semibold px-10 py-6 rounded-xl transition-all duration-300 hover:shadow-glow hover:scale-105 text-base"
              >
                Mulai Pengajuan
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
