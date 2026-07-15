"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { authClient } from "@/lib/auth-client";
import NavLink from "./NavLink";


export default function Navbar() {
    const router = useRouter();
    const [session, setSession] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Products", href: "/products" },
        { name: "About", href: "/about" },
    ];

    useEffect(() => {
        const fetchSession = async () => {
            const { data } = await authClient.getSession();
            setSession(data?.session ?? null);
            setLoading(false);
        };

        fetchSession();
    }, []);

    const handleLogout = async () => {
        await authClient.signOut();
        setSession(null);
        router.push("/");
        window.location.href = "/";
    };

    return (
        <nav className="sticky top-0 z-50 mx-auto flex w-full items-center justify-between bg-gradient-to-tr from-violet-500 via-magenta-500 to-orange-400 p-3 text-white">
            <div className="mx-auto flex w-full max-w-7xl items-center justify-between rounded-full border border-white/20 bg-white/12 px-3 py-2 shadow-2xl backdrop-blur-lg">
                <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 text-lg font-semibold shadow-lg">
                        D
                    </div>
                    <span className="text-lg font-semibold tracking-wide">DropsMine</span>
                </div>

                <ul className="hidden items-center gap-2 md:flex">
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <NavLink href={link.href}>{link.name}</NavLink>
                        </li>
                    ))}
                </ul>

                <div className="flex items-center gap-2">
                    {loading ? null : session ? (
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
            </div>
        </nav>
    );
}