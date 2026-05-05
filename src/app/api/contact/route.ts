import { NextResponse } from "next/server";
import { sendContactNotification } from "@/lib/email";

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as {
      name?: string;
      phone?: string;
      email?: string;
      message?: string;
    };

    const name = typeof body.name === "string" ? body.name.trim() : "";
    const email = typeof body.email === "string" ? body.email.trim() : "";
    const message = typeof body.message === "string" ? body.message.trim() : "";
    const phone =
      typeof body.phone === "string" && body.phone.trim() !== ""
        ? body.phone.trim()
        : undefined;

    if (!name || !email || !message) {
      return NextResponse.json({ error: "missing_fields" }, { status: 400 });
    }

    if (name.length > 200 || message.length > 10000 || (phone && phone.length > 40)) {
      return NextResponse.json({ error: "invalid_length" }, { status: 400 });
    }

    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!emailOk) {
      return NextResponse.json({ error: "invalid_email" }, { status: 400 });
    }

    await sendContactNotification({ name, phone, email, message });

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("[contact]", e);
    return NextResponse.json({ error: "send_failed" }, { status: 500 });
  }
}
