import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next.js Rendering Patterns",
  description: "Comparing SSR and CSR in Next.js with shadcn/ui",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased min-h-screen bg-background text-foreground`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container mx-auto px-4 flex h-16 items-center justify-between">
              <Link href="/" className="flex items-center gap-2 font-bold text-xl tracking-tight">
                <span className="bg-primary text-primary-foreground px-2 py-1 rounded">RP</span>
                <span>RenderPatterns</span>
              </Link>
              <nav className="flex items-center gap-6 text-sm font-medium">
                <Link href="/ssr" className="transition-colors hover:text-primary">
                  SSR Page
                </Link>
                <Link href="/csr" className="transition-colors hover:text-primary">
                  CSR Page
                </Link>
              </nav>
            </div>
          </header>
          <main className="container mx-auto px-4 py-8">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
