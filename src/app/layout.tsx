import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AWS Connect Chat Integration",
  description: "AWS Connect Chat Support System",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-US">
      <body style={{ margin: 0, fontFamily: "system-ui, sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
