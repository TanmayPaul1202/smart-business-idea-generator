/**
 * Lightweight file-based database.
 * Persists data as JSON in the project root under /data/.
 * Works in Next.js API routes (Node.js runtime only — never import in client components).
 */
import fs from "fs";
import path from "path";

const DATA_DIR = path.join(process.cwd(), "data");

function ensureDir() {
  if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });
}

function filePath(name: string) {
  return path.join(DATA_DIR, `${name}.json`);
}

function readCollection<T>(name: string): T[] {
  ensureDir();
  const fp = filePath(name);
  if (!fs.existsSync(fp)) return [];
  try {
    return JSON.parse(fs.readFileSync(fp, "utf-8")) as T[];
  } catch {
    return [];
  }
}

function writeCollection<T>(name: string, data: T[]): void {
  ensureDir();
  fs.writeFileSync(filePath(name), JSON.stringify(data, null, 2), "utf-8");
}

// ── Users ──────────────────────────────────────────────────────────────────

export interface DbUser {
  id: string;
  name: string;
  email: string;
  passwordHash: string;
  createdAt: string;
}

export const users = {
  all(): DbUser[] {
    return readCollection<DbUser>("users");
  },
  findByEmail(email: string): DbUser | undefined {
    return this.all().find((u) => u.email.toLowerCase() === email.toLowerCase());
  },
  findById(id: string): DbUser | undefined {
    return this.all().find((u) => u.id === id);
  },
  create(user: DbUser): void {
    const all = this.all();
    all.push(user);
    writeCollection("users", all);
  },
};

// ── Ideas ──────────────────────────────────────────────────────────────────

export interface DbIdea {
  id: string;
  userId: string;
  name: string;
  tagline: string;
  industry: string;
  score: number;
  prompt: string;
  status: "saved" | "draft";
  result: Record<string, unknown>;
  createdAt: string;
}

export const ideas = {
  all(): DbIdea[] {
    return readCollection<DbIdea>("ideas");
  },
  byUser(userId: string): DbIdea[] {
    return this.all()
      .filter((i) => i.userId === userId)
      .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  },
  findById(id: string): DbIdea | undefined {
    return this.all().find((i) => i.id === id);
  },
  create(idea: DbIdea): void {
    const all = this.all();
    all.push(idea);
    writeCollection("ideas", all);
  },
  delete(id: string): boolean {
    const all = this.all();
    const next = all.filter((i) => i.id !== id);
    if (next.length === all.length) return false;
    writeCollection("ideas", next);
    return true;
  },
};
