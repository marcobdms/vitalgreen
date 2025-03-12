'use client';

import './globals.css';

export const metadata = {
  title: 'VitalGreens',
  description: 'VitalGreens IA de agricultura',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
