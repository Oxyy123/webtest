# Jaminan BPKB v2 - Design Document

## Part 1: Visual Design System (Global Styles)

### Color Palette (Tema Baru - Emerald & Gold)

| Token Name | HEX Value | Usage |
|------------|-----------|-------|
| `--color-primary` | `#0f172a` | Dark slate - navbar, footer, headings |
| `--color-primary-light` | `#1e293b` | Lighter slate - cards, sections |
| `--color-secondary` | `#f59e0b` | Amber/Gold - accents, CTAs, highlights |
| `--color-secondary-light` | `#fbbf24` | Light amber - hover states |
| `--color-accent` | `#10b981` | Emerald green - success, trust |
| `--color-accent-light` | `#34d399` | Light emerald - hover |
| `--color-background` | `#ffffff` | White background |
| `--color-background-alt` | `#f8fafc` | Slate gray background |
| `--color-text-primary` | `#0f172a` | Primary text color |
| `--color-text-secondary` | `#64748b` | Secondary/muted text |
| `--color-text-light` | `#ffffff` | White text on dark backgrounds |
| `--color-border` | `#e2e8f0` | Border color |

### Typography System

| Element | Font Family | Size | Weight | Line Height |
|---------|-------------|------|--------|-------------|
| H1 (Hero) | Inter | 52px / 3.25rem | 800 (Extra Bold) | 1.1 |
| H2 (Section) | Inter | 40px / 2.5rem | 700 (Bold) | 1.2 |
| H3 (Card Title) | Inter | 22px / 1.375rem | 600 (Semibold) | 1.3 |
| Body Large | Inter | 18px / 1.125rem | 400 (Regular) | 1.7 |
| Body | Inter | 16px / 1rem | 400 (Regular) | 1.7 |
| Body Small | Inter | 14px / 0.875rem | 400 (Regular) | 1.5 |
| Button | Inter | 15px / 0.9375rem | 600 (Semibold) | 1 |

### Layout Grid & Spacing

- **Container Max Width**: 1280px
- **Section Padding**: py-24 (96px vertical)
- **Spacing Scale**: 4px base

---

## Part 2: Content Sections Breakdown

### Section: Navigation Bar

**Layout:** Fixed top, glassmorphism effect on scroll
**Background:** Transparent → Glass effect with blur
**Content:**
- Logo: "JaminanBPKB" with icon
- Links: Beranda, Layanan, Proses, Testimoni, FAQ
- Phone: 0813-9884-3775
- CTA: "Ajukan Pinjaman"

---

### Section: Hero

**Layout:** Full-width, min-height 90vh, centered content with gradient background
**Background:** Gradient from slate-900 to slate-800 with subtle pattern
**Content:**
- Badge: "Pinjaman Terpercaya sejak 2009"
- Headline: "Dana Tunai Cepat dengan Jaminan BPKB"
- Subheadline: "Proses 24 jam, bunga ringan, tanpa survey rumah"
- Stats row: 50rb+ Nasabah, 15+ Tahun, 4.9 Rating
- CTA Buttons: "Ajukan Sekarang" (primary), "Hitung Simulasi" (outline)
- Trust badges: OJK Terdaftar, Tanpa BI Checking, Bunga 0.9%

---

### Section: Layanan (Services)

**Layout:** 3-column grid with hover cards
**Background:** White
**Content:**
- Section title: "Pilih Layanan Sesuai Kebutuhan Anda"
- 4 Service Cards:
  1. **Pinjaman BPKB Mobil** - Plafon 90%, tenor 48 bulan
  2. **Pinjaman BPKB Motor** - Plafon 85%, tenor 36 bulan
  3. **Refinancing** - Bunga lebih rendah, plafon tambahan
  4. **Takeover Kredit** - Pindah ke kami, angsuran lebih ringan

---

### Section: Keunggulan (Why Choose Us)

**Layout:** 2-column, image left, features right
**Background:** Slate-50
**Content:**
- Title: "Mengapa Memilih Jaminan BPKB?"
- 6 Features with icons:
  1. Proses Cepat 24 Jam
  2. Bunga Kompetitif 0.9%
  3. Tanpa BI Checking
  4. Kendaraan Tetap Dipakai
  5. Plafon Tinggi 90%
  6. Terdaftar OJK

---

### Section: Proses (Process Steps)

**Layout:** Horizontal timeline with 4 steps
**Background:** White
**Content:**
- Title: "4 Langkah Mudah Mendapatkan Pinjaman"
- Steps:
  1. Ajukan Online/Offline
  2. Verifikasi Data
  3. Survey Kendaraan
  4. Dana Cair

---

### Section: Simulasi (Calculator)

**Layout:** Card with form inputs
**Background:** Gradient slate
**Content:**
- Title: "Hitung Simulasi Pinjaman Anda"
- Form: Jenis kendaraan, Tahun, Nilai kendaraan
- Result: Plafon, Bunga per bulan, Angsuran

---

### Section: Testimoni

**Layout:** Horizontal scroll cards
**Background:** Slate-50
**Content:**
- Title: "Apa Kata Nasabah Kami?"
- 6 Testimonials with photos

---

### Section: FAQ

**Layout:** 2-column, left sticky title, right accordion
**Background:** White
**Content:**
- Title: "Pertanyaan yang Sering Diajukan"
- 8 FAQ items

---

### Section: CTA Final

**Layout:** Full-width gradient
**Background:** Gradient from slate-900 to emerald-900
**Content:**
- Title: "Butuh Dana Cepat?"
- Subtitle: "Hubungi kami sekarang juga"
- Phone: 0813-9884-3775
- WhatsApp button

---

### Section: Footer

**Layout:** 4-column
**Background:** Slate-900
**Content:**
- Brand info
- Quick links
- Services
- Contact with new phone: 0813-9884-3775
