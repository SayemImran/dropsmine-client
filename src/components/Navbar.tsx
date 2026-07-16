"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import NavLink from "./NavLink";

export default function Navbar() {
    const router = useRouter();
    const { data: session, isPending } = authClient.useSession();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Products", href: "/products" },
        { name: "About", href: "/about" },
        { name: "Contact", href: "/contact" },
        { name: "Blog", href: "/blog" },
    ];

    const handleLogout = async () => {
        setIsMenuOpen(false);
        await authClient.signOut();
        router.push("/");
        router.refresh();
    };

    const closeMenu = () => setIsMenuOpen(false);

    return (
        <nav className="sticky top-0 z-50 mx-auto flex w-full items-center justify-between bg-gradient-to-br from-violet-950 via-slate-900 to-slate-800 p-3 text-white">
            <div className="mx-auto flex w-full max-w-7xl flex-col rounded-[1.75rem] border border-white/20 bg-white/10 px-3 py-2 shadow-[0_8px_40px_rgba(2,6,23,0.35)] backdrop-blur-xl md:rounded-full">
                <div className="flex w-full items-center justify-between">
                    <Link href="/" className="flex items-center gap-3" onClick={closeMenu}>
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 text-lg font-semibold shadow-lg">
                            D
                        </div>
                        <span className="text-lg font-semibold tracking-wide">DropsMine</span>
                    </Link>

                    <ul className="hidden items-center gap-2 md:flex">
                        {navLinks.map((link) => (
                            <li key={link.href}>
                                <NavLink href={link.href}>{link.name}</NavLink>
                            </li>
                        ))}
                    </ul>

                    <div className="hidden items-center gap-2 md:flex">
                        {isPending ? null : session ? (
                            <>
                                <Link href="/dashboard/customer" className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-2 text-sm font-medium text-white transition hover:bg-white/20">
                                    <div className="flex h-8 w-8 items-center justify-center overflow-hidden rounded-full bg-slate-900/70">
                                        {session.user?.image ? (
                                            <img src={session.user.image} alt="avatar" className="h-full w-full object-cover" />
                                        ) : (
                                            <span className="text-xs font-semibold uppercase">{session.user?.name?.[0] ?? "U"}</span>
                                        )}
                                    </div>
                                    <span className="hidden sm:inline">{session.user?.name ?? "Account"}</span>
                                </Link>
                                <button
                                    onClick={handleLogout}
                                    className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/20"
                                >
                                    Logout
                                </button>
                            </>
                        ) : (
                            <>
                                <Link href="/login">
                                    <button className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/20">
                                        Login
                                    </button>
                                </Link>
                                <Link href="/signup">
                                    <button className="rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20 transition hover:opacity-90">
                                        Sign Up
                                    </button>
                                </Link>
                            </>
                        )}
                    </div>

                    <button
                        type="button"
                        onClick={() => setIsMenuOpen((prev) => !prev)}
                        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                        aria-expanded={isMenuOpen}
                        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition hover:bg-white/20 md:hidden"
                    >
                        <svg
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            {isMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>

                {isMenuOpen && (
                    <div className="mt-3 flex flex-col gap-3 border-t border-white/10 pt-3 md:hidden">
                        <ul className="flex flex-col gap-1">
                            {navLinks.map((link) => (
                                <li key={link.href} onClick={closeMenu}>
                                    <NavLink href={link.href}>{link.name}</NavLink>
                                </li>
                            ))}
                        </ul>

                        <div className="flex flex-col gap-2 pt-2">
                            {isPending ? null : session ? (
                                <>
                                    <Link href="/dashboard/customer" onClick={closeMenu} className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-2 text-sm font-medium text-white transition hover:bg-white/20">
                                        <div className="flex h-8 w-8 items-center justify-center overflow-hidden rounded-full bg-slate-900/70">
                                            {session.user?.image ? (
                                                <img src={session.user.image} alt="avatar" className="h-full w-full object-cover" />
                                            ) : (
                                                <span className="text-xs font-semibold uppercase">{session.user?.name?.[0] ?? "U"}</span>
                                            )}
                                        </div>
                                        <span>{session.user?.name ?? "Account"}</span>
                                    </Link>
                                    <button
                                        onClick={handleLogout}
                                        className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/20"
                                    >
                                        Logout
                                    </button>
                                </>
                            ) : (
                                <>
                                    <Link href="/login" onClick={closeMenu}>
                                        <button className="w-full rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/20">
                                            Login
                                        </button>
                                    </Link>
                                    <Link href="/signup" onClick={closeMenu}>
                                        <button className="w-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20 transition hover:opacity-90">
                                            Sign Up
                                        </button>
                                    </Link>
                                </>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}