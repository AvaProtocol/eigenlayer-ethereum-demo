import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import clsx from "clsx";
import { Link, Snippet, Code } from "@nextui-org/react";

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Navbar } from "@/components/navbar";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className="relative flex flex-col h-screen">
            <Navbar />
            <main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">
              {children}
            </main>
            <footer className="w-full flex items-center justify-between py-3 px-24">
              <Snippet hideCopyButton hideSymbol variant="flat">
                <span>
                  Contribute and feedback at{" "}
                  <Code color="primary">
                    AvaProtocol/eigenlayer-ethereum-demo
                  </Code>
                </span>
              </Snippet>
              <Link
                isExternal
                className="flex items-center gap-1 text-current"
                href="https://avaprotocol.org"
                title="Ava Protocol Website"
              >
                <span className="text-default-600">Powered by</span>
                <p className="text-primary">Ava Protocol</p>
              </Link>
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
