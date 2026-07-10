// Client-side auth helpers — talk to the backend API routes.
// These replace the old localStorage-only approach.

export interface AuthUser {
  id: string;
  name: string;
  email: string;
}

/** Fetch the currently authenticated user from the server (via HttpOnly cookie). */
export async function fetchCurrentUser(): Promise<AuthUser | null> {
  try {
    const res = await fetch("/api/auth/me", { credentials: "include" });
    if (!res.ok) return null;
    const data = await res.json();
    return data.user ?? null;
  } catch {
    return null;
  }
}

/** Sign up a new user. Returns the user on success or throws with an error message. */
export async function signUp(name: string, email: string, password: string): Promise<AuthUser> {
  const res = await fetch("/api/auth/signup", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    body: JSON.stringify({ name, email, password }),
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.error ?? "Sign up failed.");
  return data.user as AuthUser;
}

/** Log in an existing user. Returns the user on success or throws with an error message. */
export async function logIn(email: string, password: string): Promise<AuthUser> {
  const res = await fetch("/api/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    body: JSON.stringify({ email, password }),
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.error ?? "Login failed.");
  return data.user as AuthUser;
}

/** Log out the current user (clears the server-side HttpOnly cookie). */
export async function logOut(): Promise<void> {
  await fetch("/api/auth/logout", { method: "POST", credentials: "include" });
}

// ── Legacy localStorage helpers (kept for Navbar compatibility) ───────────

const LEGACY_KEY = "ideaforge_user";

/** Cache user in localStorage so Navbar can read it synchronously. */
export function saveUser(user: AuthUser): void {
  if (typeof window !== "undefined") {
    localStorage.setItem(LEGACY_KEY, JSON.stringify(user));
  }
}

/** Read user from localStorage (sync, no network). Used by Navbar/DashboardLayout. */
export function getUser(): AuthUser | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(LEGACY_KEY);
    return raw ? (JSON.parse(raw) as AuthUser) : null;
  } catch {
    return null;
  }
}

/** Remove localStorage cache (call after logOut). */
export function clearUser(): void {
  if (typeof window !== "undefined") localStorage.removeItem(LEGACY_KEY);
}

/** Returns "AB" style initials from a full name. */
export function getInitials(name: string): string {
  const parts = name.trim().split(/\s+/);
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}
