export const metadata = {
  title: 'OGUSOFT',
  description: 'Web Design & Shopify Solutions',
}

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  )
}
