import type { Metadata } from 'next'
import { Nunito, Lato } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import Script from 'next/script'
import './globals.css'

const _nunito = Nunito({ subsets: ["latin"], variable: "--font-nunito" });
const _lato = Lato({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-lato" });

export const metadata: Metadata = {
  title: 'Kit de Grafismo Fonético | Educação Kids',
  description: 'Método americano de alfabetização que ajuda crianças de 2 a 12 anos a aprender a ler até 5x mais rápido. +100 atividades em PDF com acesso imediato.',
  openGraph: {
    title: 'Kit de Grafismo Fonético | Educação Kids',
    description: 'Método americano de alfabetização que ajuda crianças de 2 a 12 anos a aprender a ler até 5x mais rápido.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <Script id="fb-pixel" strategy="afterInteractive">{`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '123456789');
          fbq('track', 'PageView');
        `}</Script>
        <noscript>
          <img height="1" width="1" style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=123456789&ev=PageView&noscript=1" alt="" />
        </noscript>
      </head>
      <body className={`${_nunito.variable} ${_lato.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
