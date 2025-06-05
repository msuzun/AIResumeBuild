# AI Resume Build

Bu proje, modern ve profesyonel bir özgeçmiş (CV) oluşturmak için React Native ile geliştirilmiş bir mobil uygulamadır. Kullanıcılar, kişisel bilgilerini, deneyimlerini, yeteneklerini ve daha fazlasını kolayca ekleyip düzenleyebilir, farklı şablonlar ile CV'lerini özelleştirebilirler.

## Özellikler
- **Kişisel Bilgiler:** Ad, e-posta, telefon, adres gibi temel bilgiler.
- **Kariyer Hedefi:** Kullanıcıdan kariyer hedefi alınabilir.
- **Deneyimler:** İş deneyimleri eklenip listelenebilir.
- **Projeler:** Proje detayları eklenebilir.
- **Yetenekler:** Yetenek ve yeterlilik seviyesi eklenebilir.
- **Eğitim ve Nitelikler:** Eğitim geçmişi ve nitelikler eklenebilir.
- **Diller:** Bilinen diller ve seviyeleri eklenebilir.
- **Hobiler/İlgi Alanları:** Hobiler ve ilgi alanları eklenebilir.
- **Sertifikalar, Ödüller:** Sertifika ve ödül bilgileri eklenebilir.
- **Şablonlar:** Farklı CV şablonları ile önizleme ve seçim imkanı.
- **Profil:** Kullanıcı profil ekranı ve bölümler arası hızlı erişim.

## Proje Mimarisi

- **React Native:** Mobil uygulama geliştirme.
- **React Navigation:** Stack ve Tab navigasyon ile ekranlar arası geçiş.
- **Context API:** Global state yönetimi (kişisel bilgiler, deneyimler, vs.).
- **AsyncStorage:** Kullanıcı verilerinin kalıcı olarak saklanması için yardımcı fonksiyonlar (hazır, entegrasyon yapılabilir).
- **TypeScript:** Tip güvenliği ve daha sağlam kod yapısı.
- **Modern UI:** Gradient arka planlar, ikonlar, animasyonlar ve gölgelerle zenginleştirilmiş kullanıcı arayüzü.

## Klasör Yapısı

```
src/
  ├── context/           # Global state yönetimi (AppContext)
  ├── navigation/        # Stack ve Tab navigasyon dosyaları
  ├── screens/           # Tüm ekranlar (bölümler, ekleme, profil, şablonlar, vs.)
  ├── types/             # Navigation ve veri tipleri
  └── utils/             # AsyncStorage yardımcı fonksiyonları
```

## Kurulum

1. **Bağımlılıkları yükleyin:**
   ```bash
   npm install
   # veya
   yarn install
   ```
2. **Expo ile başlatın:**
   ```bash
   npx expo start
   ```

## Geliştirici Notları
- Yeni bir CV bölümü eklemek için ilgili context, ekran ve navigation dosyalarına ekleme yapmanız yeterlidir.
- Navigation ve context tiplerini güncel tutmak, hata riskini azaltır.
- AsyncStorage ile context verilerini kalıcı hale getirmek için `src/utils/storage.tsx` dosyasındaki fonksiyonları kullanabilirsiniz.
- UI/UX geliştirmeleri için ortak componentler ve stiller oluşturabilirsiniz.

## Katkı Sağlama
Pull request ve issue açarak katkıda bulunabilirsiniz.

## Lisans
MIT 