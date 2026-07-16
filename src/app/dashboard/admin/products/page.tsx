"use client";

import { useEffect, useState } from "react";
import { authClient } from "@/lib/auth-client"; // adjust to your actual Better Auth client import path

type Product = {
    id: string;
    title: string;
    shortDescription: string;
    fullDescription: string;
    price: string;
    date: string;
    priority: string;
    imageUrl: string;
};

const emptyForm = {
    title: "",
    shortDescription: "",
    fullDescription: "",
    price: "",
    date: "",
    priority: "Medium",
    imageUrl: "",
};

const API_URL = `${process.env.NEXT_PUBLIC_APP_URL}/products`;

async function getAuthHeaders(): Promise<HeadersInit> {
    const { data, error } = await authClient.token();

    if (error || !data?.token) {
        throw new Error("You need to be logged in as an admin to do that.");
    }

    return {
        "Content-Type": "application/json",
        Authorization: `Bearer ${data.token}`,
    };
}

async function extractErrorMessage(res: Response, fallback: string): Promise<string> {
    try {
        const body = await res.json();
        if (body?.error) return body.error;
    } catch {
        // response wasn't JSON, fall through to fallback
    }
    return fallback;
}

export default function AdminProductsPage() {
    const [products, setProducts] = useState<Product[]>([]);
    const [formData, setFormData] = useState(emptyForm);
    const [editingId, setEditingId] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);
    const [submitting, setSubmitting] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const fetchProducts = async () => {
        setLoading(true);
        setError(null);
        try {
            const res = await fetch(API_URL);
            if (!res.ok) throw new Error(await extractErrorMessage(res, "Couldn't load products. Please try again."));
            const data: Product[] = await res.json();
            setProducts(data);
        } catch (err) {
            setError(err instanceof Error ? err.message : "Something went wrong.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = event.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        setSubmitting(true);
        setError(null);

        try {
            const headers = await getAuthHeaders();

            if (editingId) {
                const res = await fetch(`${API_URL}/${editingId}`, {
                    method: "PUT",
                    headers,
                    body: JSON.stringify(formData),
                });
                if (!res.ok) throw new Error(await extractErrorMessage(res, "Couldn't update this product. Please try again."));
                const updated: Product = await res.json();
                setProducts((prev) => prev.map((product) => (product.id === editingId ? updated : product)));
                setEditingId(null);
            } else {
                const res = await fetch(API_URL, {
                    method: "POST",
                    headers,
                    body: JSON.stringify(formData),
                });
                if (!res.ok) throw new Error(await extractErrorMessage(res, "Couldn't create this product. Please try again."));
                const created: Product = await res.json();
                setProducts((prev) => [created, ...prev]);
            }

            setFormData(emptyForm);
        } catch (err) {
            setError(err instanceof Error ? err.message : "Something went wrong.");
        } finally {
            setSubmitting(false);
        }
    };

    const handleEdit = (product: Product) => {
        setEditingId(product.id);
        setFormData({
            title: product.title,
            shortDescription: product.shortDescription,
            fullDescription: product.fullDescription,
            price: product.price,
            date: product.date,
            priority: product.priority,
            imageUrl: product.imageUrl,
        });
    };

    const handleDelete = async (id: string) => {
        setError(null);
        try {
            const headers = await getAuthHeaders();
            const res = await fetch(`${API_URL}/${id}`, { method: "DELETE", headers });
            if (!res.ok && res.status !== 204) {
                throw new Error(await extractErrorMessage(res, "Couldn't delete this product. Please try again."));
            }
            setProducts((prev) => prev.filter((product) => product.id !== id));
            if (editingId === id) {
                setEditingId(null);
                setFormData(emptyForm);
            }
        } catch (err) {
            setError(err instanceof Error ? err.message : "Something went wrong.");
        }
    };

    const handleCancelEdit = () => {
        setEditingId(null);
        setFormData(emptyForm);
    };

    return (
        <section className="space-y-6">
            <div>
                <h1 className="text-2xl font-semibold text-white">Manage products</h1>
                <p className="mt-2 text-sm text-slate-400">Create, edit, and update product visibility from here.</p>
            </div>

            {error ? (
                <div className="rounded-2xl border border-rose-400/30 bg-rose-400/10 px-4 py-3 text-sm text-rose-200">
                    {error}
                </div>
            ) : null}

            <form onSubmit={handleSubmit} className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 shadow-inner shadow-slate-950/30">
                <div className="flex items-center justify-between gap-4">
                    <div>
                        <p className="text-lg font-semibold text-white">Product form</p>
                        <p className="mt-1 text-sm text-slate-400">Add new inventory to the catalog.</p>
                    </div>
                    <div className="flex items-center gap-2">
                        {editingId ? (
                            <button type="button" onClick={handleCancelEdit} className="rounded-full border border-white/10 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:bg-white/10">
                                Cancel
                            </button>
                        ) : null}
                        <button
                            type="submit"
                            disabled={submitting}
                            className="rounded-full bg-cyan-400 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-60"
                        >
                            {submitting ? "Saving..." : editingId ? "Update product" : "Submit Add"}
                        </button>
                    </div>
                </div>

                <div className="mt-6 grid gap-4 md:grid-cols-2">
                    <div>
                        <label className="mb-2 block text-sm font-medium text-slate-200">Title</label>
                        <input
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            required
                            className="w-full rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-400/50"
                        />
                    </div>
                    <div>
                        <label className="mb-2 block text-sm font-medium text-slate-200">Price</label>
                        <input
                            name="price"
                            value={formData.price}
                            onChange={handleChange}
                            required
                            className="w-full rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-400/50"
                            placeholder="$99"
                        />
                    </div>
                    <div>
                        <label className="mb-2 block text-sm font-medium text-slate-200">Date</label>
                        <input
                            name="date"
                            type="date"
                            value={formData.date}
                            onChange={handleChange}
                            className="w-full rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-400/50"
                        />
                    </div>
                    <div>
                        <label className="mb-2 block text-sm font-medium text-slate-200">Priority</label>
                        <select
                            name="priority"
                            value={formData.priority}
                            onChange={handleChange}
                            className="w-full rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-400/50"
                        >
                            <option value="High">High</option>
                            <option value="Medium">Medium</option>
                            <option value="Low">Low</option>
                        </select>
                    </div>
                    <div className="md:col-span-2">
                        <label className="mb-2 block text-sm font-medium text-slate-200">Short description</label>
                        <input
                            name="shortDescription"
                            value={formData.shortDescription}
                            onChange={handleChange}
                            required
                            className="w-full rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-400/50"
                        />
                    </div>
                    <div className="md:col-span-2">
                        <label className="mb-2 block text-sm font-medium text-slate-200">Full description</label>
                        <textarea
                            name="fullDescription"
                            value={formData.fullDescription}
                            onChange={handleChange}
                            required
                            rows={4}
                            className="w-full rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-400/50"
                        />
                    </div>
                    <div className="md:col-span-2">
                        <label className="mb-2 block text-sm font-medium text-slate-200">Optional image URL</label>
                        <input
                            name="imageUrl"
                            value={formData.imageUrl}
                            onChange={handleChange}
                            className="w-full rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-400/50"
                            placeholder="https://example.com/image.jpg"
                        />
                    </div>
                </div>
            </form>

            <div className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/5">
                <div className="border-b border-white/10 px-6 py-4">
                    <h2 className="text-lg font-semibold text-white">All products</h2>
                </div>
                <div className="overflow-x-auto">
                    <table className="min-w-full text-left text-sm text-slate-300">
                        <thead className="bg-slate-900/60 text-slate-200">
                            <tr>
                                <th className="px-6 py-3">Title</th>
                                <th className="px-6 py-3">Price</th>
                                <th className="px-6 py-3">Date</th>
                                <th className="px-6 py-3">Priority</th>
                                <th className="px-6 py-3 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {loading ? (
                                <tr>
                                    <td colSpan={5} className="px-6 py-6 text-center text-slate-400">
                                        Loading products...
                                    </td>
                                </tr>
                            ) : products.length === 0 ? (
                                <tr>
                                    <td colSpan={5} className="px-6 py-6 text-center text-slate-400">
                                        No products yet.
                                    </td>
                                </tr>
                            ) : (
                                products.map((product) => (
                                    <tr key={product.id} className="border-t border-white/10">
                                        <td className="px-6 py-4">
                                            <div className="font-medium text-white">{product.title}</div>
                                            <div className="mt-1 text-xs text-slate-400">{product.shortDescription}</div>
                                        </td>
                                        <td className="px-6 py-4">{product.price}</td>
                                        <td className="px-6 py-4">{product.date}</td>
                                        <td className="px-6 py-4">
                                            <span className="rounded-full bg-cyan-400/15 px-3 py-1 text-xs font-semibold text-cyan-200">
                                                {product.priority}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            <div className="flex justify-end gap-2">
                                                <button type="button" onClick={() => handleEdit(product)} className="rounded-full border border-cyan-400/30 px-3 py-1.5 text-xs font-semibold text-cyan-200 transition hover:bg-cyan-400/10">
                                                    Edit
                                                </button>
                                                <button type="button" onClick={() => handleDelete(product.id)} className="rounded-full border border-rose-400/30 px-3 py-1.5 text-xs font-semibold text-rose-200 transition hover:bg-rose-400/10">
                                                    Delete
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
}