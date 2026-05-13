import '../styles/globals.css'
import { inter } from '../lib/fonts'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import { MobileMenuContextProvider } from '../context/MobileMenuContext'
import MobileMenu from '../components/mobile-menu/MobileMenu'
import Script from 'next/script'

export const metadata = {
  description:
    'Besoin d’un site web performant ? Design-me, agence web à Rennes, crée des sites sur-mesure pensés pour attirer, convaincre et convertir vos visiteurs.',
  title: 'Agence Design-me | Votre agence web sur-mesure à Rennes et alentours',

  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_FRONT_URL}`,
  },
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en">
      <MobileMenuContextProvider>
        <body className={inter.className}>
          <Navbar />
          <MobileMenu />
          <main>{children}</main>
          <Footer />
          <Script
            src="http://analytics.agence-designme.com/script.js"
            data-website-id="989307dc-437f-43f4-b256-41d09a39f45e"
            strategy="afterInteractive"
          />
        </body>
      </MobileMenuContextProvider>
    </html>
  )
}
