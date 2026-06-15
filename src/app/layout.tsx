import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "冷冻产品B端客户线索管理 AI CRM",
  description: "面向冷冻产品B端销售场景的AI客户线索管理原型。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
