# Admin Dashboard UI Kit

Modern ve responsive admin dashboard UI kit. React, TypeScript, Tailwind CSS ve Next.js ile geliştirilmiştir.

## 🎯 Özellikler

- ✅ **Reusable Components**: Tekrar kullanılabilir, esnek komponentler
- ✅ **Themeable**: Kolay tema özelleştirmesi 
- ✅ **TypeScript**: Tam tip güvenliği
- ✅ **Responsive**: Mobil uyumlu tasarım
- ✅ **Storybook**: Komponent dokümantasyonu
- ✅ **Modern Design**: Güncel UI/UX tasarım prensipleri

## 📁 Proje Yapısı

```
my-admin-ui-kit/
├── .storybook/              # Storybook konfigürasyon
├── src/
│   ├── app/                 # Next.js App Router
│   │   ├── dashboard/       # Dashboard sayfaları
│   │   └── layout.tsx       # Root layout
│   ├── components/          
│   │   ├── ui/              # Temel UI komponentleri
│   │   │   ├── Button.tsx   # Buton komponenti
│   │   │   ├── Input.tsx    # Input komponenti
│   │   │   ├── Card.tsx     # Kart komponenti
│   │   │   ├── Badge.tsx    # Badge komponenti
│   │   │   └── Sidebar.tsx  # Sidebar komponenti
│   │   ├── dashboard/       # Dashboard komponentleri
│   │   │   ├── StatCard.tsx # İstatistik kartı
│   │   │   └── PaymentHistoryTable.tsx
│   │   └── theme/           # Tema provider
│   ├── lib/                 # Utilities
│   ├── hooks/               # Custom hooks
│   ├── styles/              # Global stiller
│   └── types/               # TypeScript tipleri
├── stories/                 # Storybook hikayeleri
│   ├── ui/                  # UI komponent hikayeleri
│   ├── dashboard/           # Dashboard komponent hikayeleri
│   ├── forms/               # Form örnekleri
│   └── Introduction.mdx     # Dokümantasyon
└── tailwind.config.ts       # Tailwind konfigürasyonu
```

## 🚀 Kurulum

```bash
# Bağımlılıkları kur
npm install

# Geliştirme sunucusunu başlat
npm run dev

# Storybook'u çalıştır
npm run storybook
```

## 📚 Komponentler

### UI Components

#### Button
Çeşitli stil ve boyutlarda buton komponenti.

```tsx
import { Button } from '@/components/ui/Button'

<Button variant="default" size="lg">
  Click Me
</Button>
```

**Variants**: `default`, `destructive`, `outline`, `secondary`, `ghost`, `link`
**Sizes**: `default`, `sm`, `lg`, `icon`

#### Input
Form input komponenti. İkonlar ve hata durumları destekler.

```tsx
import { Input } from '@/components/ui/Input'
import { Search } from 'lucide-react'

<Input 
  placeholder="Search..." 
  leftIcon={<Search className="h-4 w-4" />}
  error="This field is required"
/>
```

#### Card
Esnek kart komponenti.

```tsx
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card'

<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
  </CardHeader>
  <CardContent>
    Card content here
  </CardContent>
</Card>
```

#### Badge
Durum ve kategori göstergeleri.

```tsx
import { Badge } from '@/components/ui/Badge'

<Badge variant="success">Completed</Badge>
<Badge variant="warning">Pending</Badge>
```

### Dashboard Components

#### StatCard
İstatistik kartları.

```tsx
import { StatCard } from '@/components/dashboard/StatCard'
import { Users } from 'lucide-react'

<StatCard
  title="Total Users"
  value="1,234"
  icon={<Users className="h-6 w-6" />}
  trend={{ value: 12, isPositive: true }}
/>
```

#### PaymentHistoryTable
Ödeme geçmişi tablosu.

```tsx
import { PaymentHistoryTable } from '@/components/dashboard/PaymentHistoryTable'

<PaymentHistoryTable />
```

## 🎨 Tema Sistemi

### Renkler
- **Primary**: Mavi ton skala (indigo)
- **Secondary**: Gri ton skala  
- **Accent**: Kırmızı/turuncu ton skala

### Theme Provider
```tsx
import { ThemeProvider } from '@/components/theme/ThemeProvider'

<ThemeProvider defaultTheme="light">
  <App />
</ThemeProvider>
```

## 📱 Responsive Tasarım

Tüm komponentler mobil-first yaklaşımı ile tasarlanmıştır:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

## 🛠 Geliştirme

### Yeni Komponent Ekleme

1. Komponenti `src/components/ui/` klasörüne ekleyin
2. Storybook hikayesini `stories/ui/` klasörüne ekleyin
3. Tip tanımlarını `src/types/index.d.ts` dosyasına ekleyin

### Scripts

```bash
npm run dev          # Geliştirme sunucusu
npm run build        # Production build
npm run start        # Production sunucusu
npm run lint         # ESLint kontrolü
npm run storybook    # Storybook geliştirme
npm run build-storybook # Storybook build
```

## 📖 Dokümantasyon

Detaylı komponent dokümantasyonu için Storybook'u çalıştırın:

```bash
npm run storybook
```

## 🔧 Teknolojiler

- **Next.js 14**: React framework
- **TypeScript**: Tip güvenliği
- **Tailwind CSS**: Utility-first CSS
- **Storybook**: Komponent geliştirme
- **Lucide React**: İkon kütüphanesi

## 📄 Lisans

Bu proje MIT lisansı altında lisanslanmıştır.

---

**🎉 Admin Dashboard UI Kit ile modern ve esnek dashboardlar oluşturun!**




