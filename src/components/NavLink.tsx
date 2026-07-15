import Link from "next/link";
import type { ReactNode } from "react";

type NavLinkProps = {
    href: string;
    children: ReactNode;
    className?: string;
};

export default function NavLink({ href, children, className = "" }: NavLinkProps) {
    return (
        <Link
            href={href}
            className={`rounded-full px-3 py-2 text-sm font-medium text-white/80 transition-all duration-200 hover:bg-white/15 hover:text-white ${className}`}
        >
            {children}
        </Link>
    );
}