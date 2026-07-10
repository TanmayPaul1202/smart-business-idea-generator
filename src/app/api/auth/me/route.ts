import { NextResponse } from "next/server";
import { getAuthUser } from "@/lib/server-auth";
import { users } from "@/lib/db";

export async function GET() {
  try {
    const auth = await getAuthUser();
    if (!auth) {
      return NextResponse.json({ error: "Unauthenticated." }, { status: 401 });
    }

    const user = users.findById(auth.userId);
    if (!user) {
      return NextResponse.json({ error: "User not found." }, { status: 404 });
    }

    return NextResponse.json({ user: { id: user.id, name: user.name, email: user.email } });
  } catch (err) {
    console.error("[me]", err);
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }
}
