import Navbar from './components/Navbar'
import '../styles/globals.css'  // ← Go up one level, then into styles
import { ThemeProvider } from './context/ThemeContext'

export const metadata = {
  title: 'Open Source Component Library',
  description: 'Demo of reusable components (Buttons & Cards)'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-theme-background text-theme-primary">
        <ThemeProvider>
          <div className="py-6">
            <Navbar />
            <main className='max-w-7xl mx-auto'>
              {children}
            </main>
            <footer className="mt-12 text-xs text-theme-muted text-center">
              Made for Hacktoberfest
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}