import RegisterModal from "./components/modals/RegisterModal"
import Navbar from "./components/navbar/Navbar"
import "./globals.css"
import { Nunito } from "next/font/google"
import ToasterProvider from "./providers/ToastProvider"

export const metadata = {
  title: "Airbnb - JY",
  description: "Airbnb Clone by JY",
}

const font = Nunito({
  subsets: ["latin"],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ToasterProvider/>
        <RegisterModal/>
        <Navbar />

        {children}  
      </body>
    </html>
  )
}
