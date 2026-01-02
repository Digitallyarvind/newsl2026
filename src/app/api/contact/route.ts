
import { NextResponse } from "next/server";
import db from "@/lib/db";

// package.json doesn't have zod. Manual validation is fine for now.

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { name, email, subject, message } = body;

        // Basic validation
        if (!name || !email || !message) {
            return NextResponse.json(
                { error: "Name, email, and message are required." },
                { status: 400 }
            );
        }

        const enquiry = await db.enquiry.create({
            data: {
                name,
                email,
                subject: subject || "",
                message,
                status: "NEW",
            },
        });

        return NextResponse.json({ success: true, enquiry });
    } catch (error) {
        console.error("Contact API Error:", error);
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 }
        );
    }
}
