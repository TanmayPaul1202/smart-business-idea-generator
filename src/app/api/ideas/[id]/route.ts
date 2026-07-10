import { NextRequest, NextResponse } from "next/server";
import { getAuthUser } from "@/lib/server-auth";
import { ideas } from "@/lib/db";

// GET /api/ideas/[id]
export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const auth = await getAuthUser();
    if (!auth) return NextResponse.json({ error: "Unauthenticated." }, { status: 401 });

    const { id } = await params;
    const idea = ideas.findById(id);
    if (!idea) return NextResponse.json({ error: "Not found." }, { status: 404 });
    if (idea.userId !== auth.userId) return NextResponse.json({ error: "Forbidden." }, { status: 403 });

    return NextResponse.json({ idea });
  } catch (err) {
    console.error("[ideas/:id GET]", err);
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }
}

// DELETE /api/ideas/[id]
export async function DELETE(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const auth = await getAuthUser();
    if (!auth) return NextResponse.json({ error: "Unauthenticated." }, { status: 401 });

    const { id } = await params;
    const idea = ideas.findById(id);
    if (!idea) return NextResponse.json({ error: "Not found." }, { status: 404 });
    if (idea.userId !== auth.userId) return NextResponse.json({ error: "Forbidden." }, { status: 403 });

    ideas.delete(id);
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[ideas/:id DELETE]", err);
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }
}
