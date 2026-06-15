import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "RIEN DE GRAVE",
  description: "Streetwear francais poetique et cinematographique.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
