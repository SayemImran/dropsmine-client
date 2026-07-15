import NavLink from "./NavLink";

export default function Navbar() {
    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Products", href: "/products" },
        { name: "About", href: "/about" },
    ];

    return (
        <nav className="sticky top-0 z-50 text-white p-3 w-full mx-auto flex items-center justify-between bg-gradient-to-tr from-violet-500 via-magenta-500 to-orange-400">

            <div className="w-full max-w-7xl mx-auto px-3 py-2 flex items-center justify-between border border-white/20 bg-white/12 shadow-2xl backdrop-blur-lg rounded-full">
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
                    <button className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/20">
                        Login
                    </button>
                    <button className="rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20 transition hover:opacity-90">
                        Sign Up
                    </button>
                </div>
            </div>

        </nav>
    );
}