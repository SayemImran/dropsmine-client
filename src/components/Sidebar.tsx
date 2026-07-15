"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { authClient } from "@/lib/auth-client"; // adjust to your actual Better Auth client import path

type UserRole = "admin" | "customer";

type NavItem = {
    href: string;
    label: string;
    description: string;
};

const adminLinks: NavItem[] = [
    { href: "/dashboard/admin", label: "Overview", description: "Monitor the store" },
    { href: "/dashboard/admin/products", label: "Manage Products", description: "Add, edit, and archive items" },
];

const customerLinks: NavItem[] = [
    { href: "/dashboard/customer", label: "Overview", description: "Your account snapshot" },
    { href: "/dashboard/customer/cart", label: "My Cart", description: "See your cart items" },
];

export default function Sidebar() {
    const pathname = usePathname();
    const { data: session, isPending } = authClient.useSession();

    // Source of truth is the authenticated user's role, not the URL.
    const role: UserRole = (session?.user as { role?: UserRole } | undefined)?.role === "admin"
        ? "admin"
        : "customer";

    const links = role === "admin" ? adminLinks : customerLinks;

    if (isPending) {
        return (
            <aside className="w-full max-w-xs rounded-[2rem] border border-white/10 bg-slate-950/80 p-6 shadow-[0_25px_70px_rgba(2,6,23,0.45)] backdrop-blur-xl lg:min-h-[calc(100vh-3rem)]">
                <p className="text-sm text-slate-400">Loading...</p>
            </aside>
        );
    }

    return (
        <aside className="w-full max-w-xs rounded-[2rem] border border-white/10 bg-slate-950/80 p-6 shadow-[0_25px_70px_rgba(2,6,23,0.45)] backdrop-blur-xl lg:min-h-[calc(100vh-3rem)]">
            <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 to-fuchsia-500 text-lg font-semibold text-slate-950">
                    D
                </div>
                <div>
                    <p className="text-sm font-semibold text-white">Dropsmine</p>
                    <p className="text-sm text-slate-400">{role === "admin" ? "Admin dashboard" : "Customer dashboard"}</p>
                </div>
            </div>

            <div className="mt-6 rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-4">
                <p className="text-sm font-semibold text-white">
                    {role === "admin" ? "Manage inventory and operations" : "Track your cart and orders"}
                </p>
                <p className="mt-1 text-sm text-slate-300">
                    {role === "admin"
                        ? "Keep products, orders, and customers organized in one place."
                        : "Review your current cart and stay on top of your purchases."}
                </p>
            </div>

            <nav className="mt-6 space-y-2">
                {links.map((item) => {
                    const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`);

                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`flex flex-col rounded-2xl border px-4 py-3 transition ${
                                isActive
                                    ? "border-cyan-400/30 bg-cyan-400/10 text-white"
                                    : "border-transparent bg-white/5 text-slate-300 hover:border-white/10 hover:bg-white/10 hover:text-white"
                            }`}
                        >
                            <span className="text-sm font-semibold">{item.label}</span>
                            <span className="mt-1 text-xs text-slate-400">{item.description}</span>
                        </Link>
                    );
                })}
            </nav>
        </aside>
    );
}