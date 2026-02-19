import { MessageCircle, Phone } from 'lucide-react';
import { FadeIn } from '@/components/animations/FadeIn';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'Berapa lama proses pencairan dana?',
    answer: 'Proses pencairan dana sangat cepat, hanya dalam 24 jam setelah pengajuan disetujui. Setelah dokumen lengkap dan verifikasi selesai, dana akan langsung ditransfer ke rekening Anda.',
  },
  {
    question: 'Apa saja dokumen yang diperlukan?',
    answer: 'Dokumen yang diperlukan meliputi: KTP, Kartu Keluarga, BPKB asli, STNK, dan dokumen pendukung lainnya sesuai dengan jenis pinjaman yang diajukan.',
  },
  {
    question: 'Berapa besar bunga pinjaman?',
    answer: 'Suku bunga kami sangat kompetitif, mulai dari 0.9% per bulan atau sekitar 10.8% per tahun. Besaran bunga tergantung dari jenis kendaraan, tahun pembuatan, dan profil kredit nasabah.',
  },
  {
    question: 'Apakah kendaraan saya akan diambil?',
    answer: 'Tidak, kendaraan Anda tetap bisa digunakan sehari-hari. Kami hanya menyimpan BPKB sebagai jaminan. Kendaraan tetap berada di tangan Anda selama masa pinjaman.',
  },
  {
    question: 'Bisakah mengajukan dengan BPKB atas nama orang lain?',
    answer: 'Ya, bisa. Jika BPKB atas nama orang lain (keluarga atau kerabat), Anda perlu melampirkan surat kuasa dari pemilik BPKB dan KTP pemilik BPKB.',
  },
  {
    question: 'Berapa plafon maksimal yang bisa diajukan?',
    answer: 'Plafon pinjaman hingga 90% dari nilai kendaraan untuk mobil dan 85% untuk motor. Nilai kendaraan ditentukan berdasarkan tahun, merek, dan kondisi kendaraan.',
  },
  {
    question: 'Apakah ada biaya admin atau provisi?',
    answer: 'Kami sangat transparan. Ada biaya admin dan provisi yang akan dijelaskan sejak awal. Tidak ada biaya tersembunyi. Semua biaya akan tercantum jelas dalam perjanjian pinjaman.',
  },
  {
    question: 'Bagaimana cara mengajukan pinjaman?',
    answer: 'Anda bisa mengajukan pinjaman secara online melalui website kami atau mengunjungi cabang terdekat. Tim kami akan membantu Anda dalam proses pengajuan.',
  },
];

export function FAQSection() {
  return (
    <section id="faq" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Left Content */}
          <div className="lg:col-span-2 lg:sticky lg:top-32 lg:self-start">
            <FadeIn>
              <span className="inline-block bg-secondary/10 text-secondary px-5 py-2 rounded-full text-sm font-semibold mb-4">
                FAQ
              </span>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-4">
                Pertanyaan yang{' '}
                <span className="text-secondary">Sering Diajukan</span>
              </h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-slate-600 text-lg mb-8">
                Temukan jawaban untuk pertanyaan umum tentang layanan kami. Jika Anda memiliki pertanyaan lain, jangan ragu untuk menghubungi kami.
              </p>
            </FadeIn>

            {/* CTA Card */}
            <FadeIn delay={0.3}>
              <div className="bg-gradient-to-br from-primary to-primary-light rounded-3xl p-6 text-white">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <p className="font-bold text-lg">Masih punya pertanyaan?</p>
                    <p className="text-white/70 text-sm">Tim kami siap membantu</p>
                  </div>
                </div>
                <a href="tel:081398843775">
                  <Button
                    className="w-full bg-secondary hover:bg-secondary-dark text-white font-semibold py-3 rounded-xl transition-all duration-300"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Hubungi Kami
                  </Button>
                </a>
              </div>
            </FadeIn>
          </div>

          {/* Accordion */}
          <div className="lg:col-span-3">
            <FadeIn delay={0.2} direction="left">
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="border border-slate-200 rounded-2xl px-6 data-[state=open]:border-secondary/50 data-[state=open]:shadow-lg transition-all duration-300"
                  >
                    <AccordionTrigger className="text-left font-semibold text-primary hover:text-secondary py-5 hover:no-underline text-lg">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-slate-600 pb-5 leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
