import './globals.css'

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <nav>
          <h1>Logo</h1>
          <ul>

            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">logout</a></li>
          </ul>
        </nav>
        {children}</body>
    </html>
  )
}