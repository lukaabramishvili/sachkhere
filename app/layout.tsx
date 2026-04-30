import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";
import "./globals.css";
import { LanguageProvider } from "./context/languageContext";

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
          <Footer />
        </body>
      </LanguageProvider>
    </html>
  );
}
