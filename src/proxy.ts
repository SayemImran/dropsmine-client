import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth"; // adjust to your actual Better Auth server instance path

export async function proxy(request: NextRequest) {
    const { pathname } = request.nextUrl;

    // Only guard dashboard routes
    if (!pathname.startsWith("/dashboard")) {
        return NextResponse.next();
    }

    const session = await auth.api.getSession({ headers: request.headers });

    // Not logged in — send to login
    if (!session?.user) {
        const loginUrl = new URL("/login", request.url);
        loginUrl.searchParams.set("redirect", pathname);
        loginUrl.searchParams.set("error", "You need to log in to access that page.");
        return NextResponse.redirect(loginUrl);
    }

    const role = (session.user as { role?: string }).role ?? "customer";

    // Non-admins trying to reach admin routes get sent home, not to their own dashboard
    if (pathname.startsWith("/dashboard/admin") && role !== "admin") {
        const homeUrl = new URL("/", request.url);
        homeUrl.searchParams.set("error", "You don't have permission to access the admin dashboard.");
        return NextResponse.redirect(homeUrl);
    }

    // Optional: block admins from customer-only routes, remove if admins should access both
    // if (pathname.startsWith("/dashboard/customer") && role === "admin") {
    //     return NextResponse.redirect(new URL("/dashboard/admin", request.url));
    // }

    return NextResponse.next();
}

export const config = {
    matcher: ["/dashboard/:path*"],
};