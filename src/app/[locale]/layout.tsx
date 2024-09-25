import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import NavBar from './components/navbar/Navbar';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

export default async function LocaleLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body>

        <NextIntlClientProvider messages={messages}>
          <div className="flex flex-col min-h-screen">
            {/* Include shared UI here e.g. a header or sidebar */}
            <NavBar local={locale} />

            <main className="flex-grow">
              {children}
              <BackToTop />
            </main>

             <footer className="">
              <Footer />
            </footer> 
          </div>


        </NextIntlClientProvider>
      </body>
    </html>
  );
}