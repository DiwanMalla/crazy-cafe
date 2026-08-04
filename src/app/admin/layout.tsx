import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Menu Admin",
  robots: {
    index: false,
    follow: false,
  },
};

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-full bg-[linear-gradient(180deg,#f7efe3_0%,#f2e4d3_100%)]">
      {children}
    </div>
  );
}
