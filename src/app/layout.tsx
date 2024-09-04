import { Inter } from "next/font/google";
import "./globals.css";
import StoreProvider from "./StoreProvider";
import { AuthProvider } from "@/lib/AuthProvider";
import initializeApp from "@/lib/init-app";
import { locale } from "@/helper/i18n";
const inter = Inter({ subsets: ["latin"] });

// Initialize different libraries
initializeApp();
export default function RootLayout(
  { children }: { children: React.ReactNode },
) {
  return (
    <html lang={locale.split("-")[0]}>
      <body className={inter.className}>
        <StoreProvider>
          <AuthProvider>
            {children}
          </AuthProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
