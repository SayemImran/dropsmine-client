import Sidebar from "@/components/Sidebar";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.18),_transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(192,132,252,0.18),_transparent_25%),linear-gradient(135deg,_#020617_0%,_#0f172a_50%,_#111827_100%)] px-4 py-6 text-white sm:px-6 lg:px-8">
            <div className="mx-auto flex max-w-7xl flex-col gap-6 lg:flex-row">
                <Sidebar />
                <main className="flex-1 rounded-[2rem] border border-white/10 bg-slate-950/70 p-6 shadow-[0_25px_70px_rgba(2,6,23,0.4)] backdrop-blur-xl">
                    {children}
                </main>
            </div>
        </div>
    );
}