import Modal from './components/modals/Modal'
import Navbar from './components/navbar/Navbar'
import './globals.css'
import {Nunito} from 'next/font/google'

export const metadata = {
  title: 'Airbnb - JY',
  description: 'Airbnb Clone by JY',
}

const font = Nunito({
  subsets:["latin"]
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Modal isOpen/>
        <Navbar/>
        {children}</body>
    </html>
  )
}
