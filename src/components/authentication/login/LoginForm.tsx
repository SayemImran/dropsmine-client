"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { type ChangeEvent, type FormEvent, useState } from "react";
import { toast } from "sonner";

type FormState = {
    email: string;
    password: string;
    rememberMe: boolean;
};

export default function LoginForm() {
    const router = useRouter();
    const [formData, setFormData] = useState<FormState>({
        email: "",
        password: "",
        rememberMe: false,
    });
    const [statusMessage, setStatusMessage] = useState("Sign in to continue shopping.");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = event.target;

        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsSubmitting(true);
        setStatusMessage("Signing you in...");

        const { data, error } = await authClient.signIn.email({
            email: formData.email,
            password: formData.password,
        });

        if (error) {
            toast.error("Failed to login. something error");
            setStatusMessage("Sign in failed. Please check your email and password.");
            setIsSubmitting(false);
            return;
        }

        if (data?.user) {
            setStatusMessage(`Welcome back, ${data.user.name || formData.email}!`);
            toast.success("Login successful")
            router.push("/");
            router.refresh();
            window.location.href = "/";
        }

        setIsSubmitting(false);
    };

    return (
        <section className="relative min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(192,132,252,0.28),_transparent_30%),linear-gradient(135deg,_#020617_0%,_#111827_50%,_#312e81_100%)] px-4 py-16 sm:px-6 lg:px-8">
            <div className="mx-auto flex max-w-6xl flex-col overflow-hidden rounded-[2rem] border border-white/15 bg-slate-950/35 p-3 shadow-[0_25px_80px_rgba(2,6,23,0.45)] backdrop-blur-xl lg:flex-row lg:p-6">
                <div className="flex flex-1 flex-col justify-between rounded-[1.5rem] border border-white/10 bg-white/10 p-8 text-white lg:p-10">
                    <div>
                        <p className="inline-flex rounded-full border border-cyan-400/40 bg-cyan-400/10 px-3 py-1 text-sm font-medium text-cyan-300">
                            Dropsmine access
                        </p>
                        <h1 className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl">
                            Sign in to your style hub.
                        </h1>
                        <p className="mt-4 max-w-md text-lg leading-8 text-slate-300">
                            Discover curated drops, save your favorites, and keep your orders close at hand.
                        </p>
                    </div>

                    <div className="mt-10 rounded-[1.25rem] border border-white/10 bg-slate-900/45 p-5 text-sm text-slate-300">
                        <p className="font-medium text-white">Why members love it</p>
                        <ul className="mt-3 space-y-2">
                            <li>• Early access to limited releases</li>
                            <li>• Fast checkout with saved details</li>
                            <li>• Personalized recommendations</li>
                        </ul>
                    </div>
                </div>

                <div className="mt-4 flex-1 rounded-[1.5rem] border border-white/15 bg-slate-950/60 p-6 shadow-2xl shadow-black/30 backdrop-blur-md lg:mt-0 lg:p-8">
                    <div className="mb-6">
                        <h2 className="text-2xl font-semibold text-white">Welcome back</h2>
                        <p className="mt-2 text-sm text-slate-400">{statusMessage}</p>
                    </div>

                    <form className="space-y-5" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-200">
                                Email address
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="you@example.com"
                                className="w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white outline-none transition focus:border-amber-400/60 focus:ring-2 focus:ring-amber-400/20"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="password" className="mb-2 block text-sm font-medium text-slate-200">
                                Password
                            </label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                value={formData.password}
                                onChange={handleChange}
                                placeholder="Enter your password"
                                className="w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white outline-none transition focus:border-amber-400/60 focus:ring-2 focus:ring-amber-400/20"
                                required
                            />
                        </div>

                        <div className="flex items-center justify-between text-sm text-slate-400">
                            <label className="flex items-center gap-2">
                                <input
                                    type="checkbox"
                                    name="rememberMe"
                                    checked={formData.rememberMe}
                                    onChange={handleChange}
                                    className="h-4 w-4 rounded border-white/20 bg-white/10 accent-amber-400"
                                />
                                Remember me
                            </label>
                            <Link href="#" className="text-amber-300 transition hover:text-amber-200">
                                Forgot password?
                            </Link>
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:scale-[1.01] hover:shadow-lg hover:shadow-cyan-500/30 disabled:cursor-not-allowed disabled:opacity-70"
                        >
                            {isSubmitting ? "Signing in..." : "Sign in"}
                        </button>
                    </form>

                    <p className="mt-6 text-center text-sm text-slate-400">
                        New here? <span className="text-cyan-300">
                            <Link href="/signup">
                                Create an account
                            </Link>
                        </span>
                    </p>
                </div>
            </div>
        </section>
    );
}