import { Check, Phone, MessageCircle } from 'lucide-react';
import { FadeIn } from '@/components/animations/FadeIn';
import { Button } from '@/components/ui/button';
import { CounterAnimation } from '@/components/animations/CounterAnimation';

const features = [
  'Konsultasi gratis',
  'Penawaran terbaik',
  'Proses cepat',
];

const stats = [
  { value: 50, suffix: 'rb+', label: 'Nasabah' },
  { value: 15, suffix: '+', label: 'Tahun' },
  { value: 4.9, suffix: '', label: 'Rating', decimals: 1 },
];

export function CTASection() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-light to-emerald-900">
        {/* Pattern overlay */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
        }} />
        {/* Glow effects */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold text-white mb-6">
              Butuh Dana{' '}
              <span className="text-secondary">Cepat?</span>
            </h2>
          </FadeIn>

          <FadeIn delay={0.1}>
            <p className="text-white/80 text-lg lg:text-xl mb-8">
              Hubungi kami sekarang juga dan dapatkan penawaran terbaik untuk kebutuhan finansial Anda. Tim kami siap membantu 24/7.
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2 text-white/90">
                  <div className="w-6 h-6 bg-secondary/30 rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-secondary" />
                  </div>
                  <span className="text-sm font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <a href="tel:081398843775">
                <Button
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-primary font-semibold px-8 py-6 rounded-xl transition-all duration-300 hover:scale-105 group text-base"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  0813-9884-3775
                </Button>
              </a>
              <Button
                className="bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-6 rounded-xl transition-all duration-300 hover:scale-105 text-base"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Chat WhatsApp
              </Button>
            </div>
          </FadeIn>

          {/* Stats */}
          <FadeIn delay={0.4}>
            <div className="border-t border-white/20 pt-10">
              <p className="text-white/60 text-sm mb-6">Terpercaya oleh ribuan nasabah</p>
              <div className="flex items-center justify-center gap-8 lg:gap-16">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <p className="text-3xl lg:text-4xl font-bold text-secondary">
                      {stat.decimals ? (
                        <span>4.9</span>
                      ) : (
                        <CounterAnimation end={stat.value} suffix={stat.suffix} />
                      )}
                    </p>
                    <p className="text-white/60 text-sm mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
