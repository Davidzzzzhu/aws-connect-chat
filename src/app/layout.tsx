import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AWS Connect Chat Integration',
  description: 'AWS Connect Chat 患者聊天支持系统',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN">
      <body style={{ margin: 0, fontFamily: 'system-ui, sans-serif' }}>
        {children}
      </body>
    </html>
  );
}


