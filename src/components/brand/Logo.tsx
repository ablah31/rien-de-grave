import Link from "next/link";

interface LogoProps {
  href?: string;
  className?: string;
}

export function Logo({ href = "/", className = "" }: LogoProps) {
  return (
    <Link
      href={href}
      className={`font-sans text-xs tracking-[0.45em] uppercase text-brand-cream transition-opacity hover:opacity-80 ${className}`}
    >
      RIEN DE GRAVE
    </Link>
  );
}
