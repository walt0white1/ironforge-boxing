import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://ironforge-boxing.fr"),
  title: {
    default: "Iron Forge Boxing Club — Club de Boxe Premium à Lyon",
    template: "%s | Iron Forge Boxing Club",
  },
  description:
    "Club de boxe premium à Lyon. Boxe anglaise, Muay Thaï, MMA, préparation physique. Coachs certifiés, équipement professionnel. Séance d'essai gratuite. Rejoignez Iron Forge.",
  keywords: [
    "boxe Lyon",
    "club de boxe Lyon",
    "boxe anglaise Lyon",
    "boxe thaï Lyon",
    "muay thai Lyon",
    "MMA Lyon",
    "salle de boxe Lyon",
    "cours de boxe Lyon",
    "préparation physique Lyon",
    "boxe pour enfants Lyon",
    "Iron Forge Boxing",
    "club boxe premium",
    "sport de combat Lyon",
  ],
  authors: [{ name: "Iron Forge Boxing Club" }],
  creator: "Iron Forge Boxing Club",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://ironforge-boxing.fr",
    siteName: "Iron Forge Boxing Club",
    title: "Iron Forge Boxing Club — Club de Boxe Premium à Lyon",
    description:
      "Le club de boxe premium de Lyon. Boxe anglaise, Muay Thaï, MMA, préparation physique. Séance d'essai gratuite.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Iron Forge Boxing Club — Lyon",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Iron Forge Boxing Club — Club de Boxe Premium à Lyon",
    description:
      "Le club de boxe premium de Lyon. Boxe anglaise, Muay Thaï, MMA, préparation physique.",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://ironforge-boxing.fr",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <head>
        {/* Structured Data - LocalBusiness */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SportsActivityLocation",
              name: "Iron Forge Boxing Club",
              description:
                "Club de boxe premium à Lyon proposant boxe anglaise, Muay Thaï, MMA et préparation physique.",
              url: "https://ironforge-boxing.fr",
              telephone: "+33472000000",
              email: "contact@ironforge-boxing.fr",
              address: {
                "@type": "PostalAddress",
                streetAddress: "42 Rue de la République",
                addressLocality: "Lyon",
                postalCode: "69002",
                addressCountry: "FR",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 45.7578,
                longitude: 4.832,
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
                  opens: "06:00",
                  closes: "22:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: "Friday",
                  opens: "06:00",
                  closes: "21:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: "Saturday",
                  opens: "08:00",
                  closes: "18:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: "Sunday",
                  opens: "09:00",
                  closes: "14:00",
                },
              ],
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                reviewCount: "200",
                bestRating: "5",
              },
              priceRange: "€€",
              image: "https://ironforge-boxing.fr/images/og-image.jpg",
              sameAs: [
                "https://instagram.com/ironforge_boxing",
                "https://facebook.com/ironforgeboxing",
                "https://youtube.com/@ironforgeboxing",
              ],
            }),
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
