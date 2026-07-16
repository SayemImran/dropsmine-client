import NavLink from "@/components/NavLink";

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-slate-300">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-10 lg:flex-row lg:items-start lg:justify-between lg:px-8">
        <div className="max-w-md">
          <h2 className="text-xl font-semibold text-white">DropsMine</h2>
          <p className="mt-3 text-sm leading-7 text-slate-400">
            Premium drops and limited-edition essentials crafted for everyday style.
          </p>
        </div>

        <div className="flex flex-col gap-6 sm:flex-row sm:gap-12">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-white">
              Explore
            </h3>
            <ul className="mt-3 space-y-2 text-sm">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <NavLink href={link.href} className="px-0 py-0 text-sm text-slate-400 hover:bg-transparent hover:text-white">
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-white">
              Follow
            </h3>
            <ul className="mt-3 space-y-2 text-sm">
              <li><a href="https://instagram.com" target="_blank" rel="noreferrer" className="transition hover:text-white">Instagram</a></li>
              <li><a href="https://x.com" target="_blank" rel="noreferrer" className="transition hover:text-white">Twitter</a></li>
              <li><a href="https://facebook.com" target="_blank" rel="noreferrer" className="transition hover:text-white">Facebook</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 px-6 py-4 text-center text-sm text-slate-500 lg:px-8">
        © 2026 DropsMine. All rights reserved.
      </div>
    </footer>
  );
}
