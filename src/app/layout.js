import Navbar from './components/Navbar'
import './globals.css'

export const metadata = {
  title: 'Open Source Component Library',
  description: 'Demo of reusable components (Buttons & Cards)'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50 text-gray-900">
        <div className="max-w-6xl mx-auto p-6">
         <Navbar/>
          <main>{children}</main>
          <footer className="mt-12 text-xs text-gray-500">Made for Hacktoberfest</footer>
        </div>
      </body>
    </html>
  )
}
