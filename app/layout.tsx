import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";
import "./globals.css";
import { LanguageProvider } from "./context/languageContext";
import ScrollToTop from "./components/ScrollToTop/scrollToTop";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <LanguageProvider>
        <body>
          <Header />
          {children}
          <ScrollToTop />
          <Footer />
        </body>
      </LanguageProvider>
    </html>
  );
}
