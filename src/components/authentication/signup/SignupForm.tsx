"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { type ChangeEvent, type FormEvent, useState } from "react";
import { toast } from "sonner";

type FormState = {
    firstName: string;
    lastName: string;
    email: string;
    profileImageUrl: string;
    phoneNumber: string;
    password: string;
    confirmPassword: string;
};

type FormErrors = {
    password?: string;
    confirmPassword?: string;
};

const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,}$/;

export default function SignupForm() {
    const router = useRouter();
    const [formData, setFormData] = useState<FormState>({
        firstName: "",
        lastName: "",
        email: "",
        profileImageUrl: "",
        phoneNumber: "",
        password: "",
        confirmPassword: "",
    });
    const [statusMessage, setStatusMessage] = useState("Create your new Dropsmine account.");
    const [errors, setErrors] = useState<FormErrors>({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const validateForm = (data: FormState): FormErrors => {
        const validationErrors: FormErrors = {};

        if (!passwordPattern.test(data.password)) {
            validationErrors.password =
                "Password must be at least 8 characters and include uppercase, lowercase, number, and special character.";
        }

        if (data.password !== data.confirmPassword) {
            validationErrors.confirmPassword = "Passwords do not match.";
        }

        return validationErrors;
    };

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));

        if (errors[name as keyof FormErrors]) {
            setErrors((prev) => ({
                ...prev,
                [name]: undefined,
            }));
        }
    };

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const validationErrors = validateForm(formData);
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            setStatusMessage("Please fix the highlighted fields before continuing.");
            return;
        }

        setIsSubmitting(true);
        setStatusMessage("Creating your account...");

        try {
            const { error } = await authClient.signUp.email({
                name: `${formData.firstName} ${formData.lastName}`,
                email: formData.email,
                image: formData.profileImageUrl || undefined,
                phoneNumber: formData.phoneNumber,
                password: formData.password,
                role:"customer",
            });
            if(!error){
                toast.success("Registration successful! Please log in.");
                router.push("/login");
                router.refresh();
                
            }
             else {
                toast.error(error.message || "Something went wrong during signup.");
                setStatusMessage("Sign up failed. Please try again.");
                return;
            }

            setStatusMessage(`Welcome aboard, ${formData.firstName || "style seeker"}!`);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="relative min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(192,132,252,0.18),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(14,165,233,0.18),_transparent_20%),linear-gradient(180deg,_#020617_0%,_#090b18_100%)] px-4 py-16 sm:px-6 lg:px-8">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle,_rgba(255,255,255,0.06),_transparent_25%)]" />
            <div className="pointer-events-none absolute left-8 top-12 h-48 w-48 rounded-full bg-fuchsia-500/20 blur-3xl" />
            <div className="pointer-events-none absolute right-8 bottom-16 h-56 w-56 rounded-full bg-cyan-400/20 blur-3xl" />

            <div className="relative mx-auto flex max-w-6xl flex-col gap-8 lg:flex-row">
                <div className="flex-1 rounded-[2rem] border border-white/10 bg-white/10 p-8 shadow-[0_30px_90px_rgba(0,0,0,0.35)] backdrop-blur-2xl lg:p-10">
                    <span className="inline-flex rounded-full border border-cyan-300/30 bg-cyan-300/10 px-3 py-1 text-sm font-medium text-cyan-100">
                        Sign up for drops and updates
                    </span>
                    <h1 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                        Create your account
                    </h1>
                    <p className="mt-4 max-w-xl text-base leading-7 text-slate-300">
                        Join Dropsmine and start saving your favorite releases, tracking new drops, and personalizing your shopping experience.
                    </p>

                    <div className="mt-10 rounded-[1.75rem] border border-white/10 bg-slate-950/40 p-6 text-slate-300 shadow-inner shadow-slate-950/30 backdrop-blur-xl">
                        <p className="font-semibold text-white">Why sign up?</p>
                        <ul className="mt-4 space-y-3 text-sm leading-6">
                            <li>• Personalized product suggestions</li>
                            <li>• Faster checkout with saved details</li>
                            <li>• Exclusive access to new drops</li>
                        </ul>
                    </div>
                </div>

                <div className="flex-1 rounded-[2rem] border border-white/15 bg-white/10 p-8 shadow-2xl shadow-slate-950/40 backdrop-blur-2xl lg:p-10">
                    <div className="mb-6">
                        <h2 className="text-3xl font-semibold text-white">Welcome to Dropsmine</h2>
                        <p className="mt-2 text-sm text-slate-400">{statusMessage}</p>
                    </div>

                    <form className="space-y-5" onSubmit={handleSubmit}>
                        <div className="grid gap-4 sm:grid-cols-2">
                            <div>
                                <label htmlFor="firstName" className="mb-2 block text-sm font-medium text-slate-200">
                                    First name
                                </label>
                                <input
                                    id="firstName"
                                    name="firstName"
                                    type="text"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    placeholder="Jane"
                                    className="w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-400/60 focus:ring-2 focus:ring-cyan-400/20"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="lastName" className="mb-2 block text-sm font-medium text-slate-200">
                                    Last name
                                </label>
                                <input
                                    id="lastName"
                                    name="lastName"
                                    type="text"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    placeholder="Doe"
                                    className="w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-400/60 focus:ring-2 focus:ring-cyan-400/20"
                                    required
                                />
                            </div>
                        </div>

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
                                className="w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-400/60 focus:ring-2 focus:ring-cyan-400/20"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="profileImageUrl" className="mb-2 block text-sm font-medium text-slate-200">
                                Profile image URL
                            </label>
                            <input
                                id="profileImageUrl"
                                name="profileImageUrl"
                                type="url"
                                value={formData.profileImageUrl}
                                onChange={handleChange}
                                placeholder="https://example.com/avatar.jpg"
                                className="w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-400/60 focus:ring-2 focus:ring-cyan-400/20"
                            />
                        </div>

                        <div>
                            <label htmlFor="phoneNumber" className="mb-2 block text-sm font-medium text-slate-200">
                                Phone number
                            </label>
                            <input
                                id="phoneNumber"
                                name="phoneNumber"
                                type="tel"
                                value={formData.phoneNumber}
                                onChange={handleChange}
                                placeholder="(555) 123-4567"
                                className="w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-400/60 focus:ring-2 focus:ring-cyan-400/20"
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
                                placeholder="Create a strong password"
                                className={`w-full rounded-2xl border px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-400/60 focus:ring-2 focus:ring-cyan-400/20 ${errors.password ? "border-rose-400/80 bg-rose-500/10" : "border-white/10 bg-white/10"}`}
                                required
                            />
                            <p className="mt-2 text-sm text-slate-400">
                                Use at least 8 characters, with uppercase, lowercase, number, and symbol.
                            </p>
                            {errors.password ? (
                                <p className="mt-2 text-sm text-rose-300">{errors.password}</p>
                            ) : null}
                        </div>

                        <div>
                            <label htmlFor="confirmPassword" className="mb-2 block text-sm font-medium text-slate-200">
                                Confirm password
                            </label>
                            <input
                                id="confirmPassword"
                                name="confirmPassword"
                                type="password"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                placeholder="Repeat your password"
                                className={`w-full rounded-2xl border px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-400/60 focus:ring-2 focus:ring-cyan-400/20 ${errors.confirmPassword ? "border-rose-400/80 bg-rose-500/10" : "border-white/10 bg-white/10"}`}
                                required
                            />
                            {errors.confirmPassword ? (
                                <p className="mt-2 text-sm text-rose-300">{errors.confirmPassword}</p>
                            ) : null}
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:scale-[1.01] hover:shadow-lg hover:shadow-cyan-500/30 disabled:cursor-not-allowed disabled:opacity-60"
                        >
                            {isSubmitting ? "Creating account..." : "Create account"}
                        </button>
                    </form>

                    <p className="mt-6 text-center text-sm text-slate-400">
                        Already have an account? <Link href="/login" className="font-medium text-cyan-300 hover:text-cyan-200">Sign in</Link>
                    </p>
                </div>
            </div>
        </section>
    );
}
