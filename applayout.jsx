import Navbar from '@/components/Navbar';

export const metadata = {
  title: 'منصة القصص',
  description: 'منصة قراءة ونشر القصص الحديثة',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body style={{ margin: 0, fontFamily: 'system-ui, sans-serif', background: '#f7fafc' }}>
        <Navbar />
        <main style={{ maxWidth: '800px', margin: '20px auto', padding: '0 16px' }}>
          {children}
        </main>
      </body>
    </html>
  );
}
